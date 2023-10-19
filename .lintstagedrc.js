const path = require('path');

const buildEslintCommand = (filenames) => {
	return `eslint --max-warnings=0 --fix ${filenames.map((f) =>
		path.relative(process.cwd(), f),
	)}`;
};

module.exports = {
	'src/**/*.{ts,tsx}': [
		() => 'tsc --incremental false --noEmit',
		buildEslintCommand,
		() => 'npm run format',
	],
	'src/**/*.{css,scss}': [() => 'npm run slint --fix'],
};
