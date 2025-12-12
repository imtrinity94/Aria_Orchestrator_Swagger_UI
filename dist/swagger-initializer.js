window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    // url: "vRO 8.18.1 Swagger OpenAPI.json",
     urls: [
      { url: "vRO 8.18.1 Swagger OpenAPI.json", name: "Aria Automation Orchestrator 8.18.1" },
      { url: "VCFOO 9.0.0 Swagger OpenAPI.json", name: "VCF Operations Orchestrator 9.0.0" }
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
