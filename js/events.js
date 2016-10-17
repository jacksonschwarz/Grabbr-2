//Changes the background color to a random color. If an rgb value is put in, then the background will animate to that color
function changeBackground(r, g, b, t){
	$("body").animate({backgroundColor:"rgb("+((Math.round(Math.random()*150))+75)+","+((Math.round(Math.random()*150))+75)+","+((Math.round(Math.random()*150))+75)+")"}, t);
}

function startTimer(t, endFunction){
	if(typeof endFunction == "function")
		$(".timer").animate({height:"100%"}, t, "linear", function(){ endFunction() });
	else
		console.log("ERROR: parameter 'loseFunction' in function 'startTimer' is not a function")
}
function resetTimer(){
	$(".timer").stop()
	$(".timer").css({height:"10px"});
}

//checks an array of objects(arr) to see if the puck(p) is intersecting it. If found, it will return the object.
function checkIntersection(arr, p){
	var puckX=parseInt(p.css("left"))+(p.width()/2);
	var puckY=parseInt(p.css("top"))+(p.height()/2);
	// console.log(puckX+","+puckY)
	for(var i=0;i<arr.length;i++){
		var o=arr[i];
		//if p is withn the bounds of o
		if(puckX > parseInt(o.css("left")) && puckY > parseInt(o.css("top"))){
			if(puckY < parseInt(o.css("top"))+50 && puckX < parseInt(o.css("left"))+50)
				return o;
				// console.log(o.attr("id"));
		}
	}
	return $("")
}
//collision function that I don't know how to use.
function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }
