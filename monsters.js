const monsters = [
	{
		name: "someMonster",
		someFeature: "fangs",
		hitPoints: "234",
		toString: function() {
			return `This is a ${this.name} it has ${this.someFeature} and ${this.hitPoints} hit points.`;
		}
	}, {

		name: "someOtherMonster",
		someFeature: "horns",
		hitPoints: "111",
		toString: function() {
			return "This is a " + this.name;
		}
	}
]

const showMonsters = function() {

	for (let i = 0; i < monsters.length; i++) {
		var monster = `<li><button>${monsters[i].name}</button></li>`
		$('#monsterList').append(monster);
	}

	$('button').click(function(event) {
		$('#monsterInfo').remove();
		var name = event.target.innerHTML; 
		var location = monsters.map(function(e) { return e.name; }).indexOf(name);
		var monsterInfo = `<div id="monsterInfo"><h2>${event.target.innerHTML}</h2>
			<p>${monsters[location].toString()}</p></div>`;
		$('.modal-content').append(monsterInfo);
		$('#myModal').css('display', 'block');
		
});
	$('#close').click(function() {
		$('#myModal').css('display', 'none');
	});
	
	// $('body').click(function() {
	// 	console.log($('#myModal').attr('style'));
	// 	$('#myModal').css('display', 'none');

	// });
}

showMonsters();