# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install 
```

### Local Development

Update some information in the website:
- Update the `baseUrl` in `docusaurus.config.js` to match your GitHub Pages URL (or custom domain). For example, if you are using GitHub Pages with a custom domain `https://mywebsite.com`, then `baseUrl` should be set to `/`.
- Change all occurrences of `YourName` to your GitHub username. For example, if your GitHub username is `TienNHM`, then replace all occurrences of `YourName` with `TienNHM`.
- Update your personal information, including `name`, `title`, `url`, `image_url` in `authors.yml`. Notice that, `image_url` is the URL to your GitHub avatar.
- Please change your contact information in `docusaurus.config.js` and `contact.md`.

After that, you can run the website in the development mode using:

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

If there is the first time you deploy the website, you need to update permissions for `Workflow permissions` in `Settings > Code and automation > Actions > General` tab of your repository. 

You must enable `Read and write permissions` permission for `Workflows` section, and check `Allow GitHub Actions to create and approve pull requests`.

If you are using GitHub pages for hosting, please ensure the `gh-pages` branch is existed. If not, please create it. After that, please enable GitHub pages in `Settings > Pages` tab of your repository, and choose `gh-pages` branch as the source.

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
