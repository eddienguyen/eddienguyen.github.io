import MathExtra from './MathExtra'

const ArrayExtra = {
	/**
	 *
	 * @param {Array} array
	 * @param {string} key
	 * @returns {Number}
	 */
	sum(array, key) {
		if (!array) {
			console.warn('ARRAY NOT EXITED !')
			return 0
		}
		if (key) return array.reduce((c, v) => c + v[key], 0)
		else return array.reduce((c, v) => c + v, 0)
	},

	/**
	 *
	 * @param {Array} array
	 * @param {string} key
	 * @returns {Number}
	 */
	average(array, key) {
		if (!array) {
			console.warn('ARRAY NOT EXITED !')
			return 0
		}
		return this.sum(array, key) / array.length || 0
	},

	/**
	 *
	 * @param {Array} array
	 * @param {string} key
	 * @returns {Number}
	 */
	min(array, key) {
		if (!array) {
			console.warn('ARRAY NOT EXITED !')
			return 0
		}
		if (array.length > 0) {
			if (key) return array.reduce((c, v) => (c < v[key] ? c : v[key]))
			else return array.reduce((c, v) => (c < v ? c : v))
		}
		return 0
	},

	/**
	 *
	 * @param {Array} array
	 * @param {string} key
	 * @returns {Number}
	 */
	max(array, key) {
		if (!array) {
			console.warn('ARRAY NOT EXITED !')
			return 0
		}
		if (array.length > 0) {
			if (key) return array.reduce((c, v) => (c > v[key] ? c : v[key]))
			else return array.reduce((c, v) => (c > v ? c : v))
		}
		return 0
	},

	/**
	 *
	 * @param {Array} array
	 * @param {string} key
	 * @returns {Array}
	 */
	sortElementByString(array, key) {
		if (key)
			return array.sort((x, y) => {
				var a = x[key].toUpperCase(),
					b = y[key].toUpperCase()
				return a == b ? 0 : a > b ? 1 : -1
			})
		console.log('NO KEY')
	},

	/**
	 *
	 * @param {Array} array
	 * @param {string} key
	 * @returns {Array}
	 */
	sortElementByNumber(array, key) {
		return array.sort((a, b) => {
			return a[key] - b[key]
		})
	},

	/**
	 *
	 * @param {Array} array
	 * @returns {any}
	 */
	first(array) {
		if (array) if (array.length || array.length > 0) return array[0]
		return null
	},

	/**
	 *
	 * @param {Array} array
	 * @returns {any}
	 */
	last(array) {
		if (array) if (array.length || array.length > 0) return array[array.length - 1]
		return null
	},

	/**
	 *
	 * @param {Array} array
	 * @returns {any}
	 */
	randomIndex(array) {
		if (array) return MathExtra.randInt(0, array.length - 1)
		return -1
	},

	/**
	 *
	 * @param {Array} array
	 * @returns {any}
	 */
	randomElement(array) {
		if (array) return array[this.randomIndex(array)]
		return null
	},

	/**
	 *
	 * @param {Array} list1
	 * @param {Array} list2
	 * @param {string} key
	 * @returns {Array}
	 */
	filterTwoArrayByKey(list1, list2, key) {
		if (key) {
			if (list1 && list2) {
				return list1.filter((item1) => {
					return !list2.find((item2) => {
						return item1[key] == item2[key]
					})
				})
			}
		} else {
			return list1.filter((item1) => {
				return !list2.find((item2) => {
					return item1 == item2
				})
			})
		}
		return []
	},

	/**
	 *
	 * @param {Array} target
	 * @param {Array} toMatch
	 * @returns {Boolean}
	 */
	allMatchInArray(target, toMatch) {
		const found = toMatch.every((item) => {
			return target.includes(item)
		})
		return found
	},

	/**
	 *
	 * @param {any} item
	 * @param {Array} array
	 * @returns {Array}
	 */
	removeItem(item, array) {
		const index = array.indexOf(item)
		if (index == -1) {
			console.warn('[ArrayExtra.removeItem] Item not found.')
			return array
		}
		array.splice(index, 1)
		return array
	},

	/**
	 *
	 * @param {string} key
	 * @param {any} value
	 * @param {Array} array
	 * @returns {Array}
	 */
	removeItemByKey(key, value, array) {
		const foundIndex = array.findIndex((item) => {
			return item[key] == value
		})

		if (foundIndex < 0) {
			console.warn('[ArrayExtra.removeItemByKey] Item not found.', key, value)
			return array
		}
		array.splice(foundIndex, 1)
		return array
	},

	/**
	 *
	 * @param {string} id
	 * @param {Array} array
	 * @returns {Array}
	 */
	removeItemById(id, array) {
		return this.removeItemByKey('id', id, array)
	},

	/**
	 * Get an array with shuffle element
	 * @param {Array} array
	 * @param {Number} n
	 * @returns {Array}
	 */
	getRandom(array, n) {
		var result = new Array(n),
			len = array.length,
			taken = new Array(len)
		if (n > len) throw new RangeError('getRandom: more elements taken than available')
		while (n--) {
			var x = Math.floor(Math.random() * len)
			result[n] = array[x in taken ? taken[x] : x]
			taken[x] = --len in taken ? taken[len] : len
		}
		return result
	},

	/**
	 * Get an array with shuffle element
	 * @param {Array} array
	 * @param {Number} n
	 * @returns {Array}
	 */
	getHalfRandom(array, n) {
		var n = Math.ceil(array.length / 2)
		return array.getRandom(n)
	},

	/**
	 * @param {Array} array
	 * @returns {Array}
	 */
	shuffle(array) {
		var i = array.length,
			j,
			temp
		if (i == 0) return array
		while (--i) {
			j = Math.floor(Math.random() * (i + 1))
			temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}
		return array
	},

	/**
	 *
	 * @param {Array} array
	 * @param {Number} oldIndex
	 * @param {Number} newIndex
	 * @returns {Array}
	 */
	moveIndex(array, oldIndex, newIndex) {
		// return Math.floor(Math.random() * array.length);
		if (newIndex >= array.length) {
			var k = newIndex - array.length + 1
			while (k--) {
				array.push(undefined)
			}
		}
		array.splice(newIndex, 0, array.splice(oldIndex, 1)[0])
		return array // for testing
	},

	moveArray(array, oldIndex, newIndex) {
		while (oldIndex < 0) {
			oldIndex += array.length
		}
		while (newIndex < 0) {
			newIndex += array.length
		}
		if (newIndex >= array.length) {
			var k = newIndex - array.length
			while (k-- + 1) {
				array.push(999)
			}
		}
		array.splice(newIndex, 0, array.splice(oldIndex, 1)[0])
		return array
	},

	/**
	 * Split the `items` array into multiple, smaller arrays of the given `size`.
	 *
	 * @param {Array} items
	 * @param {Number} size
	 *
	 * @returns {Array[]}
	 */
	chunk(items, size) {
		const chunks = []
		items = [].concat(...items)

		while (items.length) {
			chunks.push(items.splice(0, size))
		}

		return chunks;
	},
}

export default ArrayExtra
