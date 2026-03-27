module.exports = function(eleventyConfig) {
  // Configuração para garantir que os arquivos apareçam na raiz do site final
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/uploads");
  
  eleventyConfig.addPassthroughCopy({
    "src/*.css": ".",
    "src/*.js": ".",
    "src/*.jpg": ".",
    "src/*.png": "."
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "templates"
    }
  };
};
