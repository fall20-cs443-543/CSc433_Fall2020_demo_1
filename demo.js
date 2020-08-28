/*
  Basic Canvas Image Data displaying
  Author: Xueheng Wan
  Email: wanxueheng@email.arizona.edu
  */

//access DOM elements we'll use
var input = document.getElementById("click");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//Function to generate image data
var click = function () {
    var width = 100;
    var height = 100;
    // update width and height of canvas
    document.getElementById("canvas").setAttribute("width", window.innerWidth);
    document.getElementById("canvas").setAttribute("height", window.innerHeight);
    // create ImageData object
    var image_data = ctx.createImageData(width, height);
    // fill ImageData
    for(var i = 0; i < image_data.data.length; i+= 4){
        // Row 0 - 29
        if(i < 30 * 100 * 4) {
            image_data.data[i + 0] = 255;   // Red ~ i + 0
            image_data.data[i + 1] = 0;     // Green ~ i + 1
            image_data.data[i + 2] = 24;    // Blue ~ i + 2
            image_data.data[i + 3] = 255;
        }else if(i < 60 * 100 * 4){ // Row 30 - 59
            image_data.data[i + 0] = 0;     // Red ~ i + 0
            image_data.data[i + 1] = 128;   // Green ~ i + 1
            image_data.data[i + 2] = 24;    // Blue ~ i + 2
            image_data.data[i + 3] = 255;
        }else{ // Row 60 - 100
            image_data.data[i + 0] = 0;     // Red ~ i + 0
            image_data.data[i + 1] = 0;     // Green ~ i + 1
            image_data.data[i + 2] = 249;   // Blue ~ i + 2
            image_data.data[i + 3] = 255;
        }
    }
    // Paint Image
    ctx.putImageData(image_data, canvas.width/2 - width/2, canvas.height/2 - height/2);
}

//Connect event listeners
input.addEventListener("click", click);