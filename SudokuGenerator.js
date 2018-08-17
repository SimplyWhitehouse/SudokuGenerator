class Cell {
	constructor(){
		this.candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		this.value = undefined;
	}

	removeCandidate(num){
		this.candidates = this.candidates.filter(x => x != num);
		if (this.candidates.length === 1){
			this.value = this.candidates[0];
		}
	}

	getRandCandidate(){
		return this.candidates[~~(Math.random()*this.candidates.length)];
	}

	reduceToCandidate(num){
		this.candidates = [num];
		this.value = num;
	}

	toString(){
		if (this.candidates.length > 1)
	}
}

class Table {
	constructor(){
		this.cells = [];
		for (let row = 0; row < 9; row++){
			this.cells.push([]);
			for (let col = 0; col < 9; col++){
				this.cells[row].push(new Cell());
			}
		}
	}

	getCell(row, column){
		return this.cells[row][column];
	}

	toString(){
		let str = [];
		for (let row = 0; row < 9; row++){
			for (let col = 0; col < 9; col++){
				str.push(getCell(row, col).toString())
			}
			str.push("\n");
		}
	}
}

// Really naive way of doing this
function GenerateSudoku(){
	const table = new Table();

	// go through each cell
	for (let row = 0; row < 9; row++){
		for (let col = 0; col < 9; col++){
			const cell = table.getCell(row, col);
			const num = cell.getRandCandidate();
			cell.reduceToCandidate(num);
			removeOtherOptions(num, row, col);
		}
	}

	function removeOtherOptions(num, row, col){

	}
}