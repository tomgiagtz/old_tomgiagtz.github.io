// convert path to file name as a string
//based off the webpack results, with structure `../file1/file2/file-name.wpId.ext`
export function pathToName(p) {
	let path = p.toString()
	let clean = path.split('.')
	let files = clean[0].split('/')
	let filename = files[files.length-1]
	return filename
}
//combines images and descriptions to create object for Lightbox
export function createSrcSet(imArr, descArr) {
	return imArr.map((image, i) => {
		let {name, description, width, height } = descArr[i]
		return {
			src: image,
			caption: name + ' (' + description + ')',
			alt: name,
			width,
			height
		};
	});
};

//imports all files from a directory
export function importAll(r) {
	return r.keys().map(r);
};