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

  // Coleções Automáticas por Pasta
  eleventyConfig.addCollection("pacotes_aereos", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pacotes/aereos/*.md");
  });

  eleventyConfig.addCollection("pacotes_rodoviarios", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pacotes/rodoviarios/*.md");
  });

  eleventyConfig.addCollection("cruzeiros", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pacotes/cruzeiros/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "templates",
      data: "_data"
    }
  };
};
