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
			path: 'client/src/{{name}}/{{name}}.js',
			templateFile: 'plop-templates/component.hbs'
		},{
			type: 'add',
			path: 'client/src/{{name}}/{{name}}.test.js',
			templateFile: 'plop-templates/component.hbs'
		},
		{
			type: 'add',
			path: 'client/src/{{name}}/index.js',
			templateFile: 'plop-templates/component.hbs'
		}]
	});
};