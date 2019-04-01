// convert path to file name as a string
//based off the webpack results, with structure `../file1/file2/file-name.wpId.ext`
export function pathToName(p) {
	let path = p.toString()
	let clean = path.split('.')
	let files = clean[0].split('/')
	let filename = files[files.length-1]
	return filename
}