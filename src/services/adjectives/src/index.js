const {
	flow
} = require('lodash');

const {
	floor,
	random
} = Math;

module.exports = {
	getAdjective: flow(
		() => require('./adjs.json'),
		(adjs) => [adjs, adjs.length],
		([adjs, length]) => adjs[floor(random() * length)]
	)
}