# How to deploy a stand alone React.js application described in the book?

Since React.js application is a JavaScript application, we can deploy it on GitHub Pages.

## How to deploy on GitHub Pages?

1. Create local `gh-pages` branch: `git checkout -b gh-pages`
2. Create remote `gh-pages` branch: `git push origin gh-pages`
3. Push changes in `build` directory to remote `gh-pages` branch: `git subtree push --prefix build origin gh-pages`
