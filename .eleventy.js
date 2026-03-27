module.exports = function(eleventyConfig) {
  // Configuração para garantir que os arquivos apareçam na raiz do site final
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/uploads");
  
  eleventyConfig.addPassthroughCopy({
    "src/*.css": ".",
    "src/*.js": ".",
    "src/*.jpg": ".",
    "src/*.png": ".",
    "src/promocao": "promocao",
    "src/grupo-promo-paraguay": "grupo-promo-paraguay"
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "templates"
    }
  };
};
