



var canvas2=document.getElementById('canvas2');
var ctx2=canvas2.getContext('2d');
var rect2=canvas2.getBoundingClientRect();
var x2=0, y2=0, dibujando2=false, color2='black', grosor2=1;

function defcolor2(c)
{
    color2=c;
}

function defgrosor2(g)
{
    grosor2=g;
}

canvas2.addEventListener('mousedown', function(e)
{
    x2=e.clientX - rect2.left;
    y2=e.clientY - rect2.top;
    dibujando2=true;
});

canvas2.addEventListener('mousemove', function(e)
{
    if (dibujando2===true)
    {
        dibujar2(x2, y2, e.clientX - rect2.left, e.clientY - rect2.top);
        x2=e.clientX - rect2.left;
        y2=e.clientY - rect2.top;
        console.log(e.clientX);
    }
});

canvas2.addEventListener('mouseup', function(e)
{
    if (dibujando2===true)
    {
        dibujar2(x2, y2, e.clientX - rect2.left, e.clientY - rect2.top);
        x2=0;
        y2=0;
        dibujando2=false;
    }
});

function dibujar2(x1,y1,x2,y2)
{
    ctx2.beginPath();
    ctx2.strokeStyle=color;
    ctx2.lineWidth=grosor;
    ctx2.moveTo(x1-309,y1);
    ctx2.lineTo(x2-309,y2);
    ctx2.stroke();
    ctx2.closePath();
}

