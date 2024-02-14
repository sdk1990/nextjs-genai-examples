module.exports = {
	plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
	semi: true,
	trailingComma: 'es5',
	printWidth: 120,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	jsxSingleQuote: true,
	bracketSameLine: true,
	importOrder: ['<BUILTIN_MODULES>', '', '<THIRD_PARTY_MODULES>', '', '^@/(.*)$', '', '^[./]'],
};
