const path = require('path');

const buildEslintCommand = (filenames) =>
	`eslint --max-warnings=0 ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

module.exports = {
	'src/**/*.{ts,tsx}': [
		() => 'tsc --incremental false --noEmit',
		buildEslintCommand,
		'prettier --write',
	],
	'src/**/*.{css,scss}': [() => 'npm run slint --fix'],
};
