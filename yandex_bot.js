let keywords = ["как звучит флейта", "саксофон", "габон"];

let btnK = document.getElementsByClassName('mini-suggest__button')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];


if(btnK !== undefined){
	document.getElementsByName('text')[0].value = keyword;
	document.getElementsByClassName('mini-suggest__button')[0].click();
}else{
	for(let i=0; i<links.length; i++) {
		if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1) {
			let link = links[i];
            link.removeAttribute('target');
			link.click();
			break;
		}
	}
}

function getRandom(min,max) {
return Math.floor(Math.random()*(max-min)+min);
}