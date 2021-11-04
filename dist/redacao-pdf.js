// type =
//   "text/javascript" >
//   jQuery(document).ready(function () {
//     jQuery("#redacao_simulado").submit(function () {
//       var data;
//       var contentType = "application/x-www-form-urlencoded";
//       var processData = false;
//       if ($(this).attr("enctype") == "multipart/form-data") {
//         data = new FormData($(".redacao_simulado").get(0)); //seleciona classe form-simulado adicionada na tag form do html
//         contentType = false; //false
//         processData = false; //false
//       } else {
//         data = $(this).serialize();
//       }
//       console.log(data);
//       jQuery.ajax({
//         data: data,
//         type: $(this).attr("method"),
//         url: "upload.php",
//         contentType: contentType,
//         processData: processData,
//         success: function (response) {
//           console.log(response);
//           $("#respostas").html(response);
//         },
//       });
//     });
//   });
