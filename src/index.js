module.exports = function check(str, cfg) {
	let mask = [];
	let line = str;
		if (str.length % 2) {
			return false;
		} else {
			let indx = 0;
			mask = cfg.map((elm) => elm.join(''));
			recicle();
			function recicle() {
				for (let val of mask) {
					for (let i = 0; i < str.length; i += 2) {
						if (line.includes(val)) {
							line = line.replace(val, '');
						} else {
							break;
						};
					};
				};
				indx = indx + 1;
				if (indx <= (mask.length) && line.length > 0) {
					recicle();
				};
			};
			return line.length === 0;
		};
};
