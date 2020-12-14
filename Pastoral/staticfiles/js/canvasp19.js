
var canvas19=document.getElementById('canvas19');
var ctx19=canvas19.getContext('2d');
var rect19=canvas19.getBoundingClientRect();
var x19=0, y19=0, dibujando19=false, color19='black', grosor19=1;

function defcolor19(c)
{
    color19=c;
}

function defgrosor19(g)
{
    grosor19=g;
}

canvas19.addEventListener('mousedown', function(e)
{
    x19=e.clientX - rect19.left;
    y19=e.clientY - rect19.top;
    dibujando19=true;
});

canvas19.addEventListener('mousemove', function(e)
{
    if (dibujando19===true)
    {
        dibujar19(x19, y19, e.clientX - rect19.left, e.clientY - rect19.top);
        x19=e.clientX - rect19.left;
        y19=e.clientY - rect19.top;
        console.log(e.clientX);
    }
});

canvas19.addEventListener('mouseup', function(e)
{
    if (dibujando19===true)
    {
        dibujar19(x19, y19, e.clientX - rect19.left, e.clientY - rect19.top);
        x19=0;
        y19=0;
        dibujando19=false;
    }
});

function dibujar19(x1,y1,x2,y2)
{
    ctx19.beginPath();
    ctx19.strokeStyle=color;
    ctx19.lineWidth=grosor;
    ctx19.moveTo(x1-309,y1);
    ctx19.lineTo(x2-309,y2);
    ctx19.stroke();
    ctx19.closePath();
}