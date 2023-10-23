module.exports = {
	'src/**/*.{ts,tsx}': [
		() => 'tsc --incremental false --noEmit',
		() => 'eslint --max-warnings=0 --fix "**/*.{ts,tsx}"',
		() => 'npm run format',
	],
	'src/**/*.{css,scss}': [() => 'npm run slint --fix'],
};
