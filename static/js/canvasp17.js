
var canvas17=document.getElementById('canvas17');
var ctx17=canvas17.getContext('2d');
var rect17=canvas17.getBoundingClientRect();
var x17=0, y17=0, dibujando17=false, color17='black', grosor17=1;

function defcolor17(c)
{
    color17=c;
}

function defgrosor17(g)
{
    grosor17=g;
}

canvas17.addEventListener('mousedown', function(e)
{
    x17=e.clientX - rect17.left;
    y17=e.clientY - rect17.top;
    dibujando17=true;
});

canvas17.addEventListener('mousemove', function(e)
{
    if (dibujando17===true)
    {
        dibujar17(x17, y17, e.clientX - rect17.left, e.clientY - rect17.top);
        x17=e.clientX - rect17.left;
        y17=e.clientY - rect17.top;
        console.log(e.clientX);
    }
});

canvas17.addEventListener('mouseup', function(e)
{
    if (dibujando17===true)
    {
        dibujar17(x17, y17, e.clientX - rect17.left, e.clientY - rect17.top);
        x17=0;
        y17=0;
        dibujando17=false;
    }
});

function dibujar17(x1,y1,x2,y2)
{
    ctx17.beginPath();
    ctx17.strokeStyle=color;
    ctx17.lineWidth=grosor;
    ctx17.moveTo(x1-309,y1);
    ctx17.lineTo(x2-309,y2);
    ctx17.stroke();
    ctx17.closePath();
}