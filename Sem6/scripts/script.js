window.onload = function() {
    let canvas = document.getElementById("picture");
    let context = canvas.getContext("2d");
    let clicked = document.getElementById("clicked");
    let hover=document.getElementById("hover");


    let image = new Image();
    image.src = '../img/papuc.jpg';

    image.onload = function() {

        canvas.width=image.width;
        canvas.height=image.height;

        context.drawImage(image, 0, 0);
    }
   canvas.addEventListener("mousemove", function(e) {
       
      setColor(e, hover)

    });

    canvas.addEventListener("click", function(e) {
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
}