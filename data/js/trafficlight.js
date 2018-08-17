const delayForEach = (arr, delay, cb) => arr.forEach((x, i) => setTimeout(cb.bind(cb, x), delay * i))

const $canvas = document.querySelector('#canvas')
const ctx = $canvas.getContext('2d')

const sequence = ['red', 'yellow', 'green']


const draw = (color) => {
	
	ctx.fillStyle = '#666'
	ctx.fillRect(0, 0, 800, 600)

	const colors = {
		red: () => {
			ctx.fillStyle = '#ff0000'
			ctx.beginPath()
			ctx.arc(400, 110, 90, 0, 2 * Math.PI, false)
			ctx.fill()
		},
		yellow: () => {
			ctx.fillStyle = '#ffff00'
			ctx.beginPath()
			ctx.arc(400, 300, 90, 0, 2 * Math.PI, false)
			ctx.fill()
		},
		green: () => {
			ctx.fillStyle = '#00ff00'
			ctx.beginPath()
			ctx.arc(400, 490, 90, 0, 2 * Math.PI, false)
			ctx.fill()
		}
	}

	return colors[color]() 
} 

delayForEach(sequence, 1000, draw)

// function resize() {
// 	var height = window.innerHeight
// 	var ratio = canvas.width / canvas.height
// 	var width = height * ratio

// 	canvas.style.width = width + 'px'
// 	canvas.style.height = height + 'px'
// }