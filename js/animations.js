//creates (n) amounts of divs with the class (type) and the id of (type)+i. Returns an array of the placed objects
function populate(n, type){
	var r=[]
	for (var i=0;i<n;i++){
		$("body").append("<div class='"+type+"' id='"+type+i+"'></div>")
		r.push($("#"+type+i));
	}
	return r;
}
//places o at a random spot within the bounds of x and y
function place(o, x, y){
	o.css("left", Math.round(Math.random()*x));
	o.css("top", Math.round(Math.random() *y));
}
//places (n) objects at a random point within the bounds of x and y
function place_all(n, type, x, y){
	for(var i=0;i<n;i++){
		str="#"+type+i;
		place($(str), x, y);
	}
}
//animates object o to move in different, random spot between the bounds of x and y.
function shift(o, x, y, speed){
	o.animate({
		left:Math.round(Math.random()*x),
		top:Math.round(Math.random()*y)
	}, speed, function(){shift(o, x, y, speed)});
}
//shifts a number of objects(n) to a random sport within the bounds of x and y
function shift_all(n,type, x, y, speed){
	for(var i=0;i<n;i++){
		str="#"+type+i;
		shift($(str), x, y, speed);
	}
}
//stops (n) amount of (type) objects
function stop_all(n, type){
	for(var i=0;i<n;i++){
		$("."+type).stop();
	}
}
//changes object (o)'s size to the height of (h) and the width of (w)
function transform(o, h, w){
	o.animate({height:h+"px", width:w+"px"}, 500);
}
//causes the player object to follow the mouse cursor.
function followMouse(x, y){
	$(".player").css({top:y-25+"px"});
	$(".player").css({left:x-25+"px"});
}