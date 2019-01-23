import path from "path";
import copydir from "copy-dir";
import consola from "consola";

export default function(moduleOptions) {
  this.nuxt.hook("build:before", builder => {
    return new Promise((resolve, reject) => {
      const from = path.resolve(__dirname, "../assets/uploads");
      const to = path.resolve(__dirname, "./../static/uploads");
      const msg = "uploaded assets copied";

      consola.info("Copying uploaded assets to static folder");

      return copydir(from, to, err => (err ? reject(err) : resolve(msg)));
    });
  });
}
