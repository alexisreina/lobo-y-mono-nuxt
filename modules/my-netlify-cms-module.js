import path from "path";
import fs from "fs";
import chokidar from "chokidar";
import copydir from "copy-dir";
import consola from "consola";

export default function(moduleOptions) {
  const options = Object.assign(
    {},
    {
      uploadsFolder: "uploads",
      contentFolder: "content"
    },
    moduleOptions
  );

  const basePath = path.resolve(__dirname, `./../${options.contentFolder}`);

  const mediaFolder = path.resolve(
    __dirname,
    "../",
    `./${this.options.dir.assets}`,
    `./${options.uploadsFolder}`
  );

  const staticFolder = path.resolve(
    __dirname,
    "../",
    `./${this.options.dir.static}`,
    `./${options.uploadsFolder}`
  );

  const copyImages = () =>
    new Promise((resolve, reject) => {
      const from = mediaFolder;
      const to = staticFolder;
      return copydir(from, to, err => (err ? reject(err) : resolve()));
    });

  const buildFilesTree = dir => {
    return fs.readdirSync(dir).reduce((map, file) => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isFile()) {
        const key = file.split(".")[0];
        map[key] = JSON.parse(fs.readFileSync(filePath, "utf8"));
      } else {
        map[file] = buildFilesTree(filePath);
      }
      return map;
    }, {});
  };

  const createJson = cms => {
    fs.writeFileSync(
      path.resolve(__dirname, `./../${this.options.dir.static}`, `cms.json`),
      JSON.stringify(cms)
    );
  };

  // watch for contentChanges
  if (process.env.NODE_ENV === "development") {
    chokidar.watch(basePath).on("all", (event, path) => {
      if (event === "ready") return;
      if (path.includes("uploads")) {
        copyImages();
      } else {
        const cms = buildFilesTree(basePath);
        createJson(cms);
      }
    });
  }

  // Build cms
  consola.info("Building cms");
  const cms = buildFilesTree(basePath);

  createJson(cms);

  // Register $cms plugin
  this.addPlugin({
    src: path.resolve(__dirname, "../plugins/my-netlify-cms-plugin.js")
  });

  // move uploads folder to static as netlify-cms
  // uses it to generate for the image preview in image widget
  consola.info("Copying uploaded assets to static folder");
  return copyImages();
}
