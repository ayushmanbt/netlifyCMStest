const withMDX = require("@next/mdx");

module.exports = {
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });
    return cfg;
  }
};

module.exports = withMDX({
  extension: /\.md$/
});
