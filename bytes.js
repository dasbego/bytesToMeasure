const humanSize = (bytes) => {
	if (bytes < 0) return '0 Bytes';
	const measures = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	const maxMeasure = 1000;
	for (let i = 0, value = bytes; i < measures.length; i++, value /= maxMeasure) {
		const toFixed = Math.floor(value * 10) / 10;
		if (value < maxMeasure || i === (measures.length - 1)) {
			return `${toFixed} ${measures[i]}`;
		}
	}
}

// tests

console.log(humanSize(0));
console.log(humanSize(1));
console.log(humanSize(9999));
console.log(humanSize(1000));
console.log(humanSize(1124));
console.log(humanSize(99992929));
console.log(humanSize(22236));
console.log(humanSize(107300000));
console.log(humanSize(-10000));
console.log(humanSize(12392837198273981273900000000));
