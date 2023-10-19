/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'next',
		'next/core-web-vitals',
		'prettier',
	],
	rules: {
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'@next/next/no-img-element': 'off',
	},
	parserOptions: {
		project: './tsconfig.json',
	},
	root: true,
};
