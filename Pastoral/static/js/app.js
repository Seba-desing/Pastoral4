var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.book-content');
var uno = document.querySelectorAll('.book');
var portada = document.querySelectorAll('#portada');

var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < uno.length; i++) {
	uno[i].style.zIndex = customZindex;
	customZindex--;

	uno[i].addEventListener('click', function(e){

		var tgt = e.target;
		var unoThis = this;

		unoThis.style.zIndex = contZindex;
		contZindex++;

		if (tgt.getAttribute('class') == 'face-front') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;
			setTimeout(function(){
				unoThis.style.transform = 'rotateY(-180deg)';
			}, 500);
		}
		if (tgt.getAttribute("class") == 'face-back') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;

			setTimeout(function(){
				unoThis.style.transform = 'rotateY(0deg)';
			}, 500);
		}

		if (tgt.getAttribute('id') == 'portada') {
			flip.classList.remove("trnsf-reset");
			flip.classList.add("trnsf");
		}
		if (tgt.getAttribute('id') == 'trsf') {
			flip.classList.remove("trnsf");
			flip.classList.add("trnsf-reset");
		}

	});
}

var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var rect=canvas.getBoundingClientRect();
var x=0, y=0, dibujando=false, color='black', grosor=1;

function defcolor(c)
{
    color=c;
}

function defgrosor(g)
{
    grosor=g;
}

canvas.addEventListener('mousedown', function(e)
{
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;
    dibujando=true;
});

canvas.addEventListener('mousemove', function(e)
{
    if (dibujando===true)
    {
        dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        console.log(e.clientX);
    }
});

canvas.addEventListener('mouseup', function(e)
{
    if (dibujando===true)
    {
        dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x=0;
        y=0;
        dibujando=false;
    }
});

function dibujar(x1,y1,x2,y2)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=grosor;
    ctx.moveTo(x1-309,y1);
    ctx.lineTo(x2-309,y2);
    ctx.stroke();
    ctx.closePath();
}



