'use strict';

require.config(
    {
	 	baseUrl: '../'
		,paths: {
			libs: 'libs'
		}
    }
);


define('drawDelayTest', function() {
	var canvas 	= document.getElementById('grid')
	var ctx 	= canvas.getContext("2d");
	console.dir(ctx);
	var amount 	= 0;
	var startX 	= 0;
	var startY 	= 1;
	var endX 	= 600;
	var endY 	= 1;

	setTimeout(function() {
	    var interval = setInterval(function() {
	        amount += 0.01; // change to alter duration
	        if (amount > 1) {
	            amount = 1;
	            clearInterval(interval);
	        }
	        ctx.clearRect(0, 0, canvas.width, canvas.height);
	        ctx.strokeStyle = "black";
	        ctx.lineWidth=1;
	        ctx.strokeStyle="#707070";
	        ctx.moveTo(startX, startY);
	        // lerp : a  + (b - a) * f
	        ctx.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
	        ctx.stroke();
	    }, 600);

	}, 100);
});


define('drawPointTest', function() {
	var ref 	= document.getElementById('grid')
	var canvas = {
		 w: ref.clientWidth
		,h: ref.clientHeight
	}
	var ctx 	= ref.getContext("2d");
	console.dir(ref);
	console.log(ctx, canvas);
})


require(
     [
     	 'pontinho/js/Ponto2D'
     	,'libs/jquery-1.9.1.min'
     	,'drawPointTest'
     ]
     , function(){
     	console.log(new Ponto2D(1,2), $);
     }
)