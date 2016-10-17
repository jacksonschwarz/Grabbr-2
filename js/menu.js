function clearMenu(){
	$("#menu-container").children().detach();
}
function showTitle(){
	$("#game-container").hide();
	$("#menu-container").html(`<h1>Grabbr</h1>
		<h2 id="play-button" class="selectable">Play</h2>
		`);
}
function showLoss(lossMessage){
	$("#game-container").hide();
	$("#menu-container").html(`
		<h1>`+lossMessage+`</h1>
			<h2 id="play-button" class="selectable">Play again?</h2>
	`)
}