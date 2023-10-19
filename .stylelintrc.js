/** @type {import('stylelint').Config} */
module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
	rules: {
		'selector-id-pattern': null,
		'selector-class-pattern': null,
		'value-keyword-case': [
			'lower',
			{
				camelCaseSvgKeywords: true,
			},
		],
	},
};
