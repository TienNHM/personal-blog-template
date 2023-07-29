# Personal blog template

![GitHub Repo stars](https://img.shields.io/github/stars/TienNHM/personal-blog-template)
![GitHub forks](https://img.shields.io/github/forks/TienNHM/personal-blog-template)
![GitHub watchers](https://img.shields.io/github/watchers/TienNHM/personal-blog-template)
![GitHub contributors](https://img.shields.io/github/contributors/TienNHM/personal-blog-template)
![GitHub issues](https://img.shields.io/github/issues/TienNHM/personal-blog-template?color=red)
![GitHub top language](https://img.shields.io/github/languages/top/TienNHM/personal-blog-template?color=cyan)
![GitHub repo size](https://img.shields.io/github/repo-size/TienNHM/personal-blog-template)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/TienNHM/personal-blog-template)

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/TienNHM/personal-blog-template?color=g)
![GitHub last commit](https://img.shields.io/github/last-commit/TienNHM/personal-blog-template?color=yellow)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/TienNHM/personal-blog-template/deploy.yml)
![GitHub deployments](https://img.shields.io/github/deployments/TienNHM/personal-blog-template/github-pages)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/TienNHM/personal-blog-template)
![npm](https://img.shields.io/npm/v/personal-blog-template)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. It is deployed on [GitHub Pages](https://pages.github.com/). You can use this template to build your own personal blog.

Beside that, this website is integrated with some useful tools, such as [GitHub Actions](https://docs.github.com/en/actions), [GitCus](https://giscus.app/), [Algolia](https://www.algolia.com/), [Canny for GitHub](https://canny.io/integrations/github), ... to help you manage your blog easily.

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
- There are some process environment variables in `.env` file. You must update them to match your information.

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

## Demo

You can see the demo of this website at [https://tiennhm.github.io](https://tiennhm.github.io).

![Demo](https://v1.screenshot.11ty.dev/https%3A%2F%2Ftiennhm.github.io/opengraph/_123)

## References
- [Docusaurus](https://docusaurus.io/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [GitCus](https://giscus.app/)
- [Algolia](https://www.algolia.com/)
- [Canny for GitHub](https://canny.io/integrations/github)