exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-flickity-component/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
