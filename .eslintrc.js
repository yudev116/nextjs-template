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
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['import', '@typescript-eslint'],
	root: true,
}
