// app/sync_read_file.js
const fs = require('fs')
let content
try {
	content = fs.readFileSync('./app/text.txt','utf-8')
}
catch(ex){
	console.log(ex)
}

console.log(content)