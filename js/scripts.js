

function drawTreeLeft(h) {
	for ( var i = 0; i < h; i++) {
		var star='';
	
		for (var j = 0; j <= i; j++) {
			star+= '*';
		}
	console.log(star);
	}
}
drawTreeLeft(5)


function drawTreeRight(h) {
	for ( var i = 0; i < h; i++) {
		var star='';
	
		for (var j = 0; j <= h-i; j++) {
			star+= ' ';
		}
		for (var j = 0; j <= i; j++) {
			star+='*';
		}
		
	console.log(star);
	}
}
drawTreeRight(5)

function drawTree(h) {
	for ( var i = 0; i < h; i++) {
		var star='';
	
		for (var j = 0; j <= h-i; j++) {
			star+= ' ';
		}
		for (var j = 0; j <= i*2; j++) {
			star+='*';
		}
		
	console.log(star);
	}
}
drawTree(10)




function drawSymmetricalTree(h) {
	for ( var i = 0; i < h; i++) {
		var star='*';
		
		for (var j = 0; j <= (h-i); j++) {
			star = ' ' + star;
		}

		for (var j = 1; j <= i; j++) {
			star+='**';
		}

	
	console.log(star);
	}
}
drawSymmetricalTree(10)

