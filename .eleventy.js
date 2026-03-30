module.exports = function(eleventyConfig) {
  // Filtro para verificar se é um array
  eleventyConfig.addFilter("is_array", function(value) {
    return Array.isArray(value);
  });

  // Filtro para otimizar imagens do Unsplash
  eleventyConfig.addFilter("optimize_unsplash", function(url, width = 1000) {
    if (typeof url !== 'string' || !url.includes('unsplash.com')) return url;
    
    // Remove parâmetros existentes e reconstrói com otimização
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&q=75&w=${width}`;
  });

  // Configuração para garantir que os arquivos apareçam na raiz do site final
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "src/uploads": "uploads" });
  
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
