import { execSync } from "child_process";
import { copyFileSync, mkdirSync, writeFileSync } from "fs";
import { chdir, cwd } from "process";
import rimraf from "rimraf";

const distFolder = "dist";

const publish = () => {
  rimraf.sync(distFolder);
  mkdirSync(distFolder);
  writeFileSync("dist/yarn.lock", "");
  execSync(`yarn version patch`);
  copyFileSync(`${cwd()}/README.md`, `${cwd()}/dist/README.md`);
  copyFileSync(`${cwd()}/package.json`, `${cwd()}/dist/package.json`);
  execSync("yarn build");
  chdir("dist");
  execSync("yarn install");
  execSync(`yarn npm publish`);
};

publish();
