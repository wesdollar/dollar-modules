# Dollar Modules

**Please see very important note about linking and unlinking the project found below.**

NPM package sharing common types, logic, etc. between backend and frontend services.

This repo uses `yarn` for all NPM needs. Please do not use `npm install`, as this will cause conflicts between `package-lock.json` and `yarn.lock`.

**Note on Yarn:** this project uses version 3.\*, codename `berry`.

#### Publishing Updates

Please follow [semver](https://semver.org/) when making version updates.

- Update versioning in `dist/package.json` based on semver and changes made

  - Run `yarn version [major/minor/patch]` without brackets and targeting the semver needed
  - If this is your first time running the version command, you'll need to install the version plugin by running `yarn plugin import version`

- From project root, run `yarn build`
- Change working directory to `dist` - `cd dist`
- Run `yarn publish` from within `dist` directory

#### Making Changes During Active Development in Consuming Repo

Yarn link will symlink your local modules to any local consuming repo. You'll then be able to make changes in the modules repo and have those changes reflected instantly in your other project.

From within the project you're working on, run:

`yarn link <destination>` where "\<destination>" is the path to your modules **dist** directory.

Example:
`yarn link ~/Code/dollar-modules/dist`

**Publish the package** after you've made your changes. Be sure to run `yarn add @dollar/modules` after the changes have been published to Artifactory.

**Note about unlinking**

It is important to unlink the project before pushing up changes. Otherwise, Yarn's cache will point the modules to your local filesystem breaking the pipeline.

To unlink the project, open `package.json` in your in-development project (not the modules repo). Remove the `resolutions` block, which should be at the very bottom of your `package.json`. After removing, run `yarn install`.

To confirm successful unlinking, you can search you `yarn.lock` for `@dollar/modules` to ensure it is pulling from Artifactory and not your local file system.

#### Contributing

**Do not publish without permission from Wes Dollar**

- Please use [Convention Commit](https://www.conventionalcommits.org) commit message format when making contributions
- Avoid making breaking changes, use Convention Commit to signal and document breaking changes
- Include in your commit message whether the version bump should be major, minor, or patch; patch will be assumed if not documented
- PR's should be destined for `develop`
- Package should be published from `main` with Wes Dollar's permission
  - Until the pipeline is fully setup, publishing from local CLI is permitted

#### Getting Help

Primary point of contact is Wes Dollar. Please reach out via Slack.
