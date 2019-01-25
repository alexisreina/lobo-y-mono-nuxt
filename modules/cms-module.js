import path from "path";
import fs from "fs";
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

  const basePath = path.resolve(__dirname, `./../${options.contentFolder}`);

  const copyUploads = options => {
    return builder => {
      return new Promise((resolve, reject) => {
        const from = options.mediaFolder;
        const to = options.staticFolder;

        consola.info("Copying uploaded assets to static folder");

        return copydir(from, to, err => (err ? reject(err) : resolve()));
      });
    };
  };

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

  const cms = buildFilesTree(basePath);

  // Register $cms plugin
  this.addPlugin({
    src: path.resolve(__dirname, "../plugins/cms-plugin.js"),
    options: { cms }
  });

  // move uploads folder to static as netlify-cms
  // uses it to generate for the image preview in image widget
  this.nuxt.hook(
    "build:before",
    copyUploads({
      mediaFolder,
      staticFolder
    })
  );
}
