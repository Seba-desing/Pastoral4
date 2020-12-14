
var canvas22=document.getElementById('canvas22');
var ctx22=canvas22.getContext('2d');
var rect22=canvas22.getBoundingClientRect();
var x22=0, y22=0, dibujando22=false, color22='black', grosor22=1;

function defcolor22(c)
{
    color22=c;
}

function defgrosor22(g)
{
    grosor22=g;
}

canvas22.addEventListener('mousedown', function(e)
{
    x22=e.clientX - rect22.left;
    y22=e.clientY - rect22.top;
    dibujando22=true;
});

canvas22.addEventListener('mousemove', function(e)
{
    if (dibujando22===true)
    {
        dibujar22(x22, y22, e.clientX - rect22.left, e.clientY - rect22.top);
        x22=e.clientX - rect22.left;
        y22=e.clientY - rect22.top;
        console.log(e.clientX);
    }
});

canvas22.addEventListener('mouseup', function(e)
{
    if (dibujando22===true)
    {
        dibujar22(x22, y22, e.clientX - rect22.left, e.clientY - rect22.top);
        x22=0;
        y22=0;
        dibujando22=false;
    }
});

function dibujar22(x1,y1,x2,y2)
{
    ctx22.beginPath();
    ctx22.strokeStyle=color;
    ctx22.lineWidth=grosor;
    ctx22.moveTo(x1+105,y1);
    ctx22.lineTo(x2+105,y2);
    ctx22.stroke();
    ctx22.closePath();
}