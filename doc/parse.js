var docdown = require('docdown')
var fs = require('fs')
var packageFile = require('../package.json')

fs.writeFileSync('../README.md', docdown({
	path: '../' + packageFile.main,
	url: packageFile.repository.url,
	toc: 'categories',
	sort: false,
	title: packageFile.name,
	description: (
		packageFile.description + '\n\n' +
		'In addition to [much](#dantil-illFormedOpts) [original](#dantil-redirectOutputToFile) [functionality](#dantil-getModuleCallerPathAndLineNumber), includes [many](#dantil-log) [improved](#dantil-time) [alternatives](#dantil-tryCatchWrapper) [to](#dantil-assertEqual) native functions.\n' +
		'#### Usage\n' +
		'```javascript\n' +
		'var dantil = require(\'dantil\')\n' +
		'```'
	)
}))