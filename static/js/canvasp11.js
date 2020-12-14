
var canvas11=document.getElementById('canvas11');
var ctx11=canvas11.getContext('2d');
var rect11=canvas11.getBoundingClientRect();
var x11=0, y11=0, dibujando11=false, color11='black', grosor11=1;

function defcolor11(c)
{
    color11=c;
}

function defgrosor11(g)
{
    grosor11=g;
}

canvas11.addEventListener('mousedown', function(e)
{
    x11=e.clientX - rect11.left;
    y11=e.clientY - rect11.top;
    dibujando11=true;
});

canvas11.addEventListener('mousemove', function(e)
{
    if (dibujando11===true)
    {
        dibujar11(x11, y11, e.clientX - rect11.left, e.clientY - rect11.top);
        x11=e.clientX - rect11.left;
        y11=e.clientY - rect11.top;
        console.log(e.clientX);
    }
});

canvas11.addEventListener('mouseup', function(e)
{
    if (dibujando11===true)
    {
        dibujar11(x11, y11, e.clientX - rect11.left, e.clientY - rect11.top);
        x11=0;
        y11=0;
        dibujando11=false;
    }
});

function dibujar11(x1,y1,x2,y2)
{
    ctx11.beginPath();
    ctx11.strokeStyle=color;
    ctx11.lineWidth=grosor;
    ctx11.moveTo(x1-309,y1);
    ctx11.lineTo(x2-309,y2);
    ctx11.stroke();
    ctx11.closePath();
}
