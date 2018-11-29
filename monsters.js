const monsters = [
	{
		name: "someMonster",
		someFeature: "fangs",
		hitPoints: "234",
		toString: function() {
			return "This is a " + this.name;
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
		console.log(event.target.innerHTML);
		var monsterInfo = `${event.target.innerHTML}`;
		$('.modal-content').append(monsterInfo);
		$('#myModal').css('display', 'block');
		
});
	$('#close').click(function() {
		$('#myModal').css('display', 'none');
	});
}

showMonsters();