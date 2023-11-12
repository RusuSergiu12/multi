$(document).ready(function() {

    let canvas = $("#picture")[0];
    let context = canvas.getContext("2d");
    let clicked = $("#clicked")[0];
    let hover = $("#hover")[0];

    let image = new Image();
    image.src = '../img/papuc.jpg';

    image.onload = function() {
        console.log(image.width)
        console.log(image.height)

        canvas.width=image.width;
        canvas.height=image.height;

        context.drawImage(image, 0, 0);
    }
    $(canvas).on("mousemove", function(e) {
        
       setColor(e, hover)

    }); 

    $(canvas).click(function(e) {
        setColor(e, clicked)
    });


    function setColor(e, destination){
        let x = e.offsetX;
        let y = e.offsetY;

        

        let pixel = context.getImageData(x, y, 1, 1);
        console.log(pixel);

        let red = pixel.data[0];
        let green = pixel.data[1];
        let blue = pixel.data[2];
      
        let color = `rgba(${red}, ${green}, ${blue}, 1)`;

        destination.style.backgroundColor = color;
    }


});