const blocks = document.querySelectorAll('.block')
const reset = document.querySelector('.button')

let blockIndex = 0

let indexList = [
	'null', 'null', 'null',
	'null', 'null', 'null',
	'null', 'null', 'null'
]

let blockClickHandler = function (block, index){
	block.addEventListener('click', function(){
		blockIndex++

		if (blockIndex % 2 == 0) {
			block.classList.add('cross')
			indexList[index] = 'cross'
		}

		else {
			block.classList.add('circle')
			indexList[index] = 'circle'
		}
		console.log(indexList)
	})
}

reset.addEventListener('click', function(){
	for(var i = 0; i < 9; i++){
		blocks[i].classList.remove('cross')
		blocks[i].classList.remove('circle')
	}
})

for (var i = 0; i < 9; i++) {
	blockClickHandler(blocks[i], i)
}