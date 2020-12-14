
var canvas9=document.getElementById('canvas9');
var ctx9=canvas9.getContext('2d');
var rect9=canvas9.getBoundingClientRect();
var x9=0, y9=0, dibujando9=false, color9='black', grosor9=1;

function defcolor9(c)
{
    color9=c;
}

function defgrosor9(g)
{
    grosor9=g;
}

canvas9.addEventListener('mousedown', function(e)
{
    x9=e.clientX - rect9.left;
    y9=e.clientY - rect9.top;
    dibujando9=true;
});

canvas9.addEventListener('mousemove', function(e)
{
    if (dibujando9===true)
    {
        dibujar9(x9, y9, e.clientX - rect9.left, e.clientY - rect9.top);
        x9=e.clientX - rect9.left;
        y9=e.clientY - rect9.top;
        console.log(e.clientX);
    }
});

canvas9.addEventListener('mouseup', function(e)
{
    if (dibujando9===true)
    {
        dibujar9(x9, y9, e.clientX - rect9.left, e.clientY - rect9.top);
        x9=0;
        y9=0;
        dibujando9=false;
    }
});

function dibujar9(x1,y1,x2,y2)
{
    ctx9.beginPath();
    ctx9.strokeStyle=color;
    ctx9.lineWidth=grosor;
    ctx9.moveTo(x1-309,y1);
    ctx9.lineTo(x2-309,y2);
    ctx9.stroke();
    ctx9.closePath();
}
