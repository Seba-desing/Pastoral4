
var canvas15=document.getElementById('canvas15');
var ctx15=canvas15.getContext('2d');
var rect15=canvas15.getBoundingClientRect();
var x15=0, y15=0, dibujando15=false, color15='black', grosor15=1;

function defcolor15(c)
{
    color15=c;
}

function defgrosor15(g)
{
    grosor15=g;
}

canvas15.addEventListener('mousedown', function(e)
{
    x15=e.clientX - rect15.left;
    y15=e.clientY - rect15.top;
    dibujando15=true;
});

canvas15.addEventListener('mousemove', function(e)
{
    if (dibujando15===true)
    {
        dibujar15(x15, y15, e.clientX - rect15.left, e.clientY - rect15.top);
        x15=e.clientX - rect15.left;
        y15=e.clientY - rect15.top;
        console.log(e.clientX);
    }
});

canvas15.addEventListener('mouseup', function(e)
{
    if (dibujando15===true)
    {
        dibujar15(x15, y15, e.clientX - rect15.left, e.clientY - rect15.top);
        x15=0;
        y15=0;
        dibujando15=false;
    }
});

function dibujar15(x1,y1,x2,y2)
{
    ctx15.beginPath();
    ctx15.strokeStyle=color;
    ctx15.lineWidth=grosor;
    ctx15.moveTo(x1-309,y1);
    ctx15.lineTo(x2-309,y2);
    ctx15.stroke();
    ctx15.closePath();
}