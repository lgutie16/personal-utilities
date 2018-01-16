module.exports = function (plop) {
	// component generator
	plop.setGenerator('component', {
		description: 'application component logic',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'component name please'
		}],
		actions: [{
			type: 'add',
			path: 'client/src/{{ properCase name}}/{{ properCase name}}.js',
			templateFile: 'plop-templates/component.hbs'
		},{
			type: 'add',
			path: 'client/src/{{ properCase name}}/{{ properCase name}}.test.js',
			templateFile: 'plop-templates/test.hbs'
		},
		{
			type: 'add',
			path: 'client/src/{{ properCase name}}/index.js',
			templateFile: 'plop-templates/index.hbs'
		},
		{
			type: 'modify',
			path: 'client/src/{{ properCase name}}/index.js',
			pattern: /\bname/g,
			template: '{{ properCase name}}'
		},
		{
			type: 'modify',
			path: 'client/src/{{ properCase name}}/{{ properCase name}}.js',
			pattern: /\bname/g,
			template: '{{ properCase name}}'
		}
		]
	});
};