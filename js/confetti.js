function($) {

    function confetti(options) {
	var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

	this.options = $.extend({}, $.fn.confetti.defaults, options);
	
	NUM_CONFETTI = this.options.num_confetti;//350;

	COLORS = this.options.colors;//[[220, 50, 47], [211, 54, 130], [108, 113, 196], [38, 139, 210], [133, 153, 0], [203, 75, 22], [181,	137,	0], [42, 161, 152]]; //Solarized Colors

	PI_2 = 2 * Math.PI;

	canvas = document.getElementById("world");

	context = canvas.getContext("2d");

	window.w = 0;

	window.h = 0;

	resizeWindow = function() {
	    window.w = canvas.width = window.innerWidth;
	    return window.h = canvas.height = window.innerHeight;
	};

	window.addEventListener('resize', resizeWindow, false);

	window.onload = function() {
	    return setTimeout(resizeWindow, 0);
	};

	range = function(a, b) {
	    return (b - a) * Math.random() + a;
	};

	drawCircle = function(x, y, r, style) {
	    context.beginPath();
	    context.arc(x, y, r, 0, PI_2, false);
	    context.fillStyle = style;
	    return context.fill();
	};

	xpos = 0.5;

	document.onmousemove = function(e) {
	    return xpos = e.pageX / w;
	};

	window.requestAnimationFrame = (function() {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
		return window.setTimeout(callback, 1000 / 60);
	    };
	})();

	Confetti = (function() {
	    function Confetti() {
		this.style = COLORS[~~range(0, COLORS.length)];
		this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
		this.r = ~~range(2, 6);
		this.r2 = 2 * this.r;
		this.replace();
	    }

	    Confetti.prototype.replace = function() {
		this.opacity = 0;
		this.dop = 0.03 * range(1, 4);
		this.x = range(-this.r2, w - this.r2);
		this.y = range(-20, h - this.r2);
		this.xmax = w - this.r;
		this.ymax = h - this.r;
		this.vx = range(0, 2) + 8 * xpos - 5;
		return this.vy = 0.7 * this.r + range(-1, 1);
	    };

	    Confetti.prototype.draw = function() {
		var ref;
		this.x += this.vx;
		this.y += this.vy;
		this.opacity += this.dop;
		if (this.opacity > 1) {
		    this.opacity = 1;
		    this.dop *= -1;
		}
		if (this.opacity < 0 || this.y > this.ymax) {
		    this.replace();
		}
		if (!((0 < (ref = this.x) && ref < this.xmax))) {
		    this.x = (this.x + this.xmax) % this.xmax;
		}
		return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
	    };

	    return Confetti;

	})();

	confetti = (function() {
	    var j, ref, results;
	    results = [];
	    for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
		results.push(new Confetti);
	    }
	    return results;
	})();

	window.step = function() {
	    var c, j, len, results;

	    requestAnimationFrame(step);
	    context.clearRect(0, 0, w, h);
	    results = [];
	    for (j = 0, len = confetti.length; j < len; j++) {
		c = confetti[j];
		results.push(c.draw());
	    }
	    return results;
	};


	step();

    };
}(window.JQuery);
//).call(this);
