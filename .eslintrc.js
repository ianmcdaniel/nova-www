module.exports = {
	"env": {
		"browser": true,
		"es6": true,
	},
	"plugins": [
		"react",
		'import',
	],
	"globals": {
		"graphql": false,
	},
	"parserOptions": {
		"sourceType": "module",
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true,
		},
	},
	rules: {
		'import/no-unresolved': 2,
	},
}
