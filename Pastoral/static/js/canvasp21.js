
var canvas21=document.getElementById('canvas21');
var ctx21=canvas21.getContext('2d');
var rect21=canvas21.getBoundingClientRect();
var x21=0, y21=0, dibujando21=false, color21='black', grosor21=1;

function defcolor21(c)
{
    color21=c;
}

function defgrosor21(g)
{
    grosor21=g;
}

canvas21.addEventListener('mousedown', function(e)
{
    x21=e.clientX - rect21.left;
    y21=e.clientY - rect21.top;
    dibujando21=true;
});

canvas21.addEventListener('mousemove', function(e)
{
    if (dibujando21===true)
    {
        dibujar21(x21, y21, e.clientX - rect21.left, e.clientY - rect21.top);
        x21=e.clientX - rect21.left;
        y21=e.clientY - rect21.top;
        console.log(e.clientX);
    }
});

canvas21.addEventListener('mouseup', function(e)
{
    if (dibujando21===true)
    {
        dibujar21(x21, y21, e.clientX - rect21.left, e.clientY - rect21.top);
        x21=0;
        y21=0;
        dibujando21=false;
    }
});

function dibujar21(x1,y1,x2,y2)
{
    ctx21.beginPath();
    ctx21.strokeStyle=color;
    ctx21.lineWidth=grosor;
    ctx21.moveTo(x1-309,y1);
    ctx21.lineTo(x2-309,y2);
    ctx21.stroke();
    ctx21.closePath();
}