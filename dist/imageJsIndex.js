// apply german translations
ImagerJs.translations.set(window.ImagerJsGerman);

var pluginsConfig = {
  Crop: {
    controlsCss: {
      width: "15px",
      height: "15px",
      background: "#000",
      border: "1px solid black",
    },
    controlsTouchCss: {
      width: "25px",
      height: "25px",
      background: "#000",
      border: "2px solid black",
    },
  },
  Save: {
    upload: true,
    uploadFunction: function (imageId, imageData, callback) {
      var imager = this;

      console.log("uploading Save " + imageId);

      var data = new FormData();
      data.append("file", imageData);

      var dataJson = '{ "imageData" : "' + data + '" }';

      $.ajax({
        url: "upload.php",
        processData: false,
        contentType: false,
        data: data,
        type: "POST",
        success: function (imageUrl) {
          // data:image/png;base64,
          // callback(imageUrl); // assuming that server returns an `imageUrl` as a response
          console.log(imageUrl);
        },
        error: function (xhr, status, error) {
          console.log("ERRO: ", error);
        },
      });
    },
  },
};

var options = {
  plugins: ["Rotate", "Crop", "Resize", "Toolbar", "Save", "Delete", "Undo"],
  editModeCss: {},
  pluginsConfig: pluginsConfig,
  quality: {
    sizes: [
      // { label: "Original", scale: 1, quality: 1, percentage: 100 },
      { label: "Large", scale: 0.5, quality: 0.5, percentage: 50 },
      // { label: "Medium", scale: 0.2, quality: 0.2, percentage: 20 },
      // { label: "Small", scale: 0.05, quality: 0.05, percentage: 5 },
    ],
  },
};

var addNew = function () {
  var $imageContainer = $(
    '<div class="image-container">' +
      '  <img class="imager-test" ' +
      '       src="" ' +
      '       style="min-width: 300px; min-height: 200px; width: 300px;">' +
      "</div>"
  );

  $("#imagers").append($imageContainer);
  var imager = new ImagerJs.Imager($imageContainer.find("img"), options);
  imager.startSelector();

  imager.on("editStart", function () {
    // fix image dimensions so that it could be properly placed on the grid
    imager.$imageElement.css({
      minWidth: "auto",
      minHeight: "auto",
    });
    var qualitySelector = new window.ImagerQualitySelector(
      imager,
      options.quality
    );

    var qualityContainer = $('<div class="imager-quality-standalone"></div>');
    qualityContainer.append(qualitySelector.getElement());

    imager.$editContainer.append(qualityContainer);

    qualitySelector.show();
    qualitySelector.update();
  });
};

const clearFile = () => {
  $("#container_img").css("display", "block");
  $(".imager-selector-container").css("display", "block");
  document.getElementById("displayRedacao").style.display = "none";
  const redacaoInput = document.getElementById("upl");
  redacaoInput.value = "";

  var output = document.getElementById("output");

  output.src = "";
};
