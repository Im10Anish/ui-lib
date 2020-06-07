module.exports = {
	rules: {
		'body-leading-blank': [1, 'always'],
		'footer-leading-blank': [1, 'always'],
		'header-max-length': [2, 'always', 72],
		'scope-enum': [
			2,
			'always',
			['build', 'arch', 'design', 'core', 'sales', 'client', 'server'],
		],
		'scope-case': [2, 'always', 'lowerCase'],
		'subject-empty': [2, 'never'],
		'type-case': [2, 'always', 'lowerCase'],
		'type-empty': [2, 'never'],
		'type-enum': [2, 'always', ['major', 'minor', 'patch']],
	},
}
