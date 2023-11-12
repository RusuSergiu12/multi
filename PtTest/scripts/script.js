window.onload = function() {
    var c = document.getElementById("imgCanvas");
    var graphCanvas = document.getElementById("graphCanvas");
    var ctx = c.getContext("2d");
    let clicked = document.getElementById("form-text");
    let hover = document.getElementById("form-value");
    

    var graphCtx = graphCanvas.getContext("2d");
    graphCtx.moveTo(0, 0);
    let canvasHeight = graphCanvas.height;
    let canvasWidth = graphCanvas.width;

    function drawVerticalLines(){
        graphCtx.strokeStyle = '#FFD700'
        graphCtx.lineWidth = 1;
        for(let i = 100; i <canvasWidth; i+=100){
            graphCtx.beginPath();
            graphCtx.moveTo(i, 0);
            graphCtx.lineTo(i, canvasHeight);
            graphCtx.stroke();
        }
    }
    function drawHorizontalLines(){
        graphCtx.strokeStyle = '#FFD700'
        graphCtx.lineWidth = 1;
        for(let i = 100; i <canvasHeight; i+=100){
            graphCtx.beginPath();
            graphCtx.moveTo(0, i);
            graphCtx.lineTo(canvasWidth, i);
            graphCtx.stroke();
        }
    }
    // function drawDiagonal1(){
    //     graphCtx.strokeStyle = '#FFD700';
    //     graphCtx.lineWidth = 1;
    //     graphCtx.beginPath();
    //     graphCtx.moveTo(0, 0);
    //     graphCtx.lineTo(canvasWidth, canvasHeight);
    //     graphCtx.stroke();
    // }
    // function drawDiagonal2(){
    //     graphCtx.strokeStyle = '#FFD700';
    //     graphCtx.lineWidth = 1;
    //     graphCtx.beginPath();
    //     graphCtx.moveTo(canvasWidth, 0);
    //     graphCtx.lineTo(0, canvasHeight);
    //     graphCtx.stroke();
    // }
    // drawDiagonal2();
    // drawDiagonal1();
    drawVerticalLines();
    drawHorizontalLines();
    let values = [];
    function generateRandomNumber(){
        return Math.random()*canvasHeight; 
    }
    function generateValues(){
        for (let i =0 ;i<=canvasWidth/50;i++){
            values.push(generateRandomNumber());
        }
    }
    function drawChart(){
        graphCtx.strokeStyle = 'pink';
        graphCtx.lineWidth = 2;
        graphCtx.beginPath();
        graphCtx.moveTo(0, canvasHeight-values[0]);
        for(let i = 1; i < values.length; i++){
            graphCtx.lineTo(i*50, canvasHeight-values[i]);
        }
        graphCtx.stroke();
    }
    function clearCanvas(){
        graphCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
    generateValues();

    function drawGrid(){
        clearCanvas();
        drawVerticalLines();
        drawHorizontalLines();
        drawChart();
    }
  
    drawGrid();

    setInterval(function(){
        drawGrid();
        values.shift();
        values.push(generateRandomNumber());
        
    }, 1000);





    ////////////////////////////////

    var img = new Image();
    img.src = "catel.jpg";

    img.onload = function() {
        console.log(img.width);
        console.log(img.height);
        c.width = img.width;
        c.height = img.height+60;
        ctx.drawImage(img, 0, 0);
        ctx.font = "30px Arial";
        ctx.strokeText("i'm a puppy", 0, 200);
    }
    function setColor(e, destination){
        let x = e.offsetX;
        let y = e.offsetY;

        let pixel = ctx.getImageData(x, y, 1, 1);

        let red = pixel.data[0];
        let green = pixel.data[1];
        let blue = pixel.data[2];

        let color = `rgb(${red}, ${green}, ${blue}, 1)`;
        destination.style.backgroundColor = color;
    }
    c.addEventListener("click", function(e){
        setColor(e, clicked);
    });
    c.addEventListener("mousemove", function(e){
        setColor(e, hover);
    });
};