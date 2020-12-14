
var canvas23=document.getElementById('canvas23');
var ctx23=canvas23.getContext('2d');
var rect23=canvas23.getBoundingClientRect();
var x23=0, y23=0, dibujando23=false, color23='black', grosor23=1;

function defcolor23(c)
{
    color23=c;
}

function defgrosor23(g)
{
    grosor23=g;
}

canvas23.addEventListener('mousedown', function(e)
{
    x23=e.clientX - rect23.left;
    y23=e.clientY - rect23.top;
    dibujando23=true;
});

canvas23.addEventListener('mousemove', function(e)
{
    if (dibujando23===true)
    {
        dibujar23(x23, y23, e.clientX - rect23.left, e.clientY - rect23.top);
        x23=e.clientX - rect23.left;
        y23=e.clientY - rect23.top;
        console.log(e.clientX);
    }
});

canvas23.addEventListener('mouseup', function(e)
{
    if (dibujando23===true)
    {
        dibujar23(x23, y23, e.clientX - rect23.left, e.clientY - rect23.top);
        x23=0;
        y23=0;
        dibujando23=false;
    }
});

function dibujar23(x1,y1,x2,y2)
{
    ctx23.beginPath();
    ctx23.strokeStyle=color;
    ctx23.lineWidth=grosor;
    ctx23.moveTo(x1-309,y1);
    ctx23.lineTo(x2-309,y2);
    ctx23.stroke();
    ctx23.closePath();
}