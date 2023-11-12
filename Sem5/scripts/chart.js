window.onload = function () {
    let canvas = document.getElementById('chart');   
    let context = canvas.getContext('2d');


    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    
    let values = [];

    function drawHorizontalGridLines(){
        context.strokeStyle = 'green'
        context.lineWidth = 1;
        for(let i = 100; i<=canvasHeight;i+=100){
            context.beginPath();
            context.moveTo(0,i);
            context.lineTo(canvasWidth,i);
            context.stroke();
            context.strokeText(canvasHeight - i, 5, i-10);
        }
    }
    
    function drawVerticalGridLines(){
        context.strokeStyle = 'green'
        context.lineWidth = 1;
        for(let i = 150; i<canvasWidth;i+=150){
            context.beginPath();
            context.moveTo(i,0);
            context.lineTo(i,canvasHeight);
            context.stroke();
        }
    }

    function generateRandomNumber(){
        return Math.random()*canvasHeight; // Math.random generates numbers between 0 - 1
    }
    function generateRandomNumbers(){
        for (let i = 0;i<=canvasWidth / 20; i++){
            values.push(generateRandomNumber());

        }
        console.log(values);

    }

    function drawChart(){
        context.strokeStyle = 'red';
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(0, canvasHeight - values[0]);
        for(let i = 1; i < values.length; i++){
            context.lineTo(i*20, canvasHeight - values[i]);
        }
        context.stroke();
    }

    function clearCanvas(){
        context.clearRect(0,0,canvasWidth,canvasHeight);
    }

    generateRandomNumbers();

    function drawGrid(){
        clearCanvas();
        drawHorizontalGridLines();
        drawVerticalGridLines();
        drawChart();
    }

    drawGrid();

    setInterval(function() {
        drawGrid();
        values.push(generateRandomNumber());
        values.shift();
   
    }, 1000)
}