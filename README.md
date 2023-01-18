This React + Webpack projects serves as an example for
integrating static file reload with FastAPI or any server side
code that deploys index.html with the loaded static file.

This React project includes a public dir for storing images
and other static files. The public dir is usually served separately
in the CDN from the src dir. The src dir is bundled with webpack.

To run this, run the following:

```bash
npm run dev
```

### License

This repository is licensed under the Apache 2.0 license. The license
file can be found in the [LICENSE](./LICENSE) file in the root of the source tree.
