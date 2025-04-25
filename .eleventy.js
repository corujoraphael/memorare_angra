const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // Copiar pasta de estilos diretamente para o output
  eleventyConfig.addPassthroughCopy("./styles");
  eleventyConfig.addPassthroughCopy("./imgs");
  eleventyConfig.addPassthroughCopy("./fonts");
  eleventyConfig.addPassthroughCopy("./js");

	
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,  
        useShortDoctype: true,
      });
    }

    return content;
  });
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));
  return {
    dir: {
      input: ".", // Pasta de entrada
      output: "_site" // Pasta de saída
    }
  };
  
};