var DEG2RAD = Math.PI / 180
var RAD2DEG = 180 / Math.PI

export default {
	isRotateLeft(a, b, c) {
		return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) > 0
	},

	deg_between_points_360(cx, cy, ex, ey) {
		var theta = this.angleLine(cx, cy, ex, ey) // range (-180, 180]
		if (theta < 0) theta = 360 + theta // range [0, 360)
		return theta
	},

	deg_between_points(cx, cy, ex, ey) {
		var dy = ey - cy
		var dx = ex - cx
		var theta = Math.atan2(dy, dx) // range (-PI, PI]
		theta *= 180 / Math.PI // rads to degs, range (-180, 180]
		return theta
	},

	angle_between_points(cx, cy, ex, ey) {
		var dy = ey - cy
		var dx = ex - cx
		var theta = Math.atan2(dy, dx) // range (-PI, PI]
		// theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
		return theta
	},

	distance2Point(x1, y1, x2, y2) {
		var dist = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
		return dist
	},

	randRound: function (number) {
		return Math.round(Math.random() * number)
	},

	rand(number) {
		return (Math.random() - Math.random()) * number
	},

	randHalt(number) {
		var rand = Math.random() - Math.random()
		var res
		if (rand > 0) {
			res = rand * (number / 2) + number / 2
		} else {
			res = rand * (number / 2) - number / 2
		}
		return Math.abs(res)
	},

	clamp(value, min, max) {
		return Math.max(min, Math.min(max, value))
	},

	// compute euclidian modulo of m % n
	// https://en.wikipedia.org/wiki/Modulo_operation

	euclideanModulo(n, m) {
		return ((n % m) + m) % m
	},

	// Linear mapping from range <a1, a2> to range <b1, b2>

	mapLinear(x, a1, a2, b1, b2) {
		return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1)
	},

	// https://en.wikipedia.org/wiki/Linear_interpolation

	lerp(x, y, t) {
		return (1 - t) * x + t * y
	},

	// http://en.wikipedia.org/wiki/Smoothstep

	smoothstep(x, min, max) {
		if (x <= min) return 0
		if (x >= max) return 1

		x = (x - min) / (max - min)

		return x * x * (3 - 2 * x)
	},

	smootherstep(x, min, max) {
		if (x <= min) return 0
		if (x >= max) return 1

		x = (x - min) / (max - min)

		return x * x * x * (x * (x * 6 - 15) + 10)
	},

	// Random integer from <low, high> interval

	randInt(low, high) {
		return low + Math.floor(Math.random() * (high - low + 1))
	},

	// Random float from <low, high> interval

	randFloat(low, high) {
		return low + Math.random() * (high - low)
	},

	// Random float from <-range/2, range/2> interval

	randFloatSpread(range) {
		return range * (0.5 - Math.random())
	},

	rotationDegToRad(rotation) {
		return {
			x: this.degToRad(rotation.x),
			y: this.degToRad(rotation.y),
			z: this.degToRad(rotation.z),
		}
	},

	degToRad(degrees) {
		return degrees * DEG2RAD
	},

	radToDeg(radians) {
		return radians * RAD2DEG
	},

	isPowerOfTwo(value) {
		return (value & (value - 1)) === 0 && value !== 0
	},

	nearestPowerOfTwo(value) {
		return Math.pow(2, Math.round(Math.log(value) / Math.LN2))
	},

	nextPowerOfTwo(value) {
		value--
		value |= value >> 1
		value |= value >> 2
		value |= value >> 4
		value |= value >> 8
		value |= value >> 16
		value++

		return value
	},

	circleByPercentRadius(percent, radius) {
		const theta = ((percent * 360 - 90) * Math.PI) / 180

		const x = radius * Math.cos(theta)
		const y = -radius * Math.sin(theta)
		return { x, y }
	},

	/**
	 *
	 * @param {Array} array
	 */
	arrayToVector(array = [0, 0, 0]) {
		const keys = ['x', 'y', 'z', 'w']
		const result = {}
		array.map((item, index) => {
			result[keys[index]] = item
		})
		return result
	},
}
