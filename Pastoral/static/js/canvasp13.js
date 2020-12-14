
var canvas13=document.getElementById('canvas13');
var ctx13=canvas13.getContext('2d');
var rect13=canvas13.getBoundingClientRect();
var x13=0, y13=0, dibujando13=false, color13='black', grosor13=1;

function defcolor13(c)
{
    color13=c;
}

function defgrosor13(g)
{
    grosor13=g;
}

canvas13.addEventListener('mousedown', function(e)
{
    x13=e.clientX - rect13.left;
    y13=e.clientY - rect13.top;
    dibujando13=true;
});

canvas13.addEventListener('mousemove', function(e)
{
    if (dibujando13===true)
    {
        dibujar13(x13, y13, e.clientX - rect13.left, e.clientY - rect13.top);
        x13=e.clientX - rect13.left;
        y13=e.clientY - rect13.top;
        console.log(e.clientX);
    }
});

canvas13.addEventListener('mouseup', function(e)
{
    if (dibujando13===true)
    {
        dibujar13(x13, y13, e.clientX - rect13.left, e.clientY - rect13.top);
        x13=0;
        y13=0;
        dibujando13=false;
    }
});

function dibujar13(x1,y1,x2,y2)
{
    ctx13.beginPath();
    ctx13.strokeStyle=color;
    ctx13.lineWidth=grosor;
    ctx13.moveTo(x1-309,y1);
    ctx13.lineTo(x2-309,y2);
    ctx13.stroke();
    ctx13.closePath();
}