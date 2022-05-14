 function showPreview(event) {
          if (event.target.files.length > 0) {
            var src = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("file-ip-1-preview");
            preview.src = src;
            preview.style.display = "block";
          }
        }
        function appear(){
          document.querySelector("#table").style.visibility = "visible";
          var img = document.getElementById("file-ip-1-preview");

          //Get size of orignal img
          var imgpath = document.getElementById("file-ip-1");
          if (!imgpath.value == "") {
            var img = imgpath.files[0].size;
            var imgsize = img / 1024;
            document.getElementById("orignal-size").innerHTML = imgsize;
          }
        }


//compress

 var WIDTH =600;
 let input = document.getElementById("file-ip-1");
 input.addEventListener("change", (event) => {
   let image_file = event.target.files[0];
   let reader = new FileReader();
   reader.readAsDataURL(image_file);
   reader.onload = (event) => {
     let imgage_url = event.target.result;
     let image = document.createElement("img");
     image.src = imgage_url;
     image.onload = (e) => {
       let canvas = document.createElement("canvas");
       crop(e.target);
       let ratio = WIDTH / e.target.width;
       canvas.width = WIDTH;
       canvas.height = e.target.height * ratio;
       const context = canvas.getContext("2d");
       context.drawImage(image, 0, 0, canvas.width, canvas.height);
       let new_image_url = context.canvas.toDataURL("image/jpeg", 90);
       let new_image = document.createElement("img");
       new_image.src = new_image_url;
       document.getElementById("compressed").appendChild(new_image);
       //Get size of compressed img
       document.getElementById("compressed-size").innerHTML =
         new_image_url.length / 1024;
     };

   };
 });

//crop
 let crop = function (target) {
   var img = document.getElementById("file-ip-1-preview");
   var WIDTH_C = img.clientWidth;
   let canvas = document.createElement("canvas");
   let ratio = WIDTH_C / target.width;
   canvas.width = WIDTH_C;
   canvas.height = target.height * ratio;
   const context = canvas.getContext("2d");
  //  context.fillStyle = "red";
  //  context.fill();
  //  context.beginPath();
   context.drawImage(
     img,
     canvas.width / 2,
     canvas.height / 3,
     500,
     300,
     60,
     60,
     canvas.width,
     canvas.height
   );
   let new_image_url = context.canvas.toDataURL("image/jpeg", 90);
   let new_image = document.createElement("img");
   new_image.src = new_image_url;
   document.getElementById("croped").appendChild(new_image);
   //Get size of croped img
   document.getElementById("croped-size").innerHTML =
     new_image_url.length / 1024;
 };


