module.exports = function(eleventyConfig) {
  // Filtro para verificar se é um array
  eleventyConfig.addFilter("is_array", function(value) {
    return Array.isArray(value);
  });

   // Filtro para garantir caminho absoluto em caminhos locais
  eleventyConfig.addFilter("absolute_path", function(url) {
    if (typeof url !== 'string' || url.startsWith('http') || url.startsWith('/')) return url;
    return '/' + url;
  });

  // Filtro para otimizar imagens do Unsplash
  eleventyConfig.addFilter("optimize_unsplash", function(url, width = 1000) {
    if (typeof url !== 'string') return url;
    
    // Se for Unsplash, otimiza
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?auto=format&fit=crop&q=75&w=${width}`;
    }
    
    // Se não for Unsplash, garante que o caminho local seja absoluto
    if (!url.startsWith('http') && !url.startsWith('/')) {
      return '/' + url;
    }
    
    return url;
  });

  // Configuração para garantir que os arquivos apareçam na raiz do site final
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "src/uploads": "uploads" });
  
  eleventyConfig.addPassthroughCopy({
    "src/*.css": ".",
    "src/*.js": ".",
    "src/*.jpg": ".",
    "src/*.png": ".",
    "src/assets": "assets",
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
