// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  
// @author       You
// @match        https://yandex.ru/
// @icon      
// @grant        none
// ==/UserScript==

let keywords = ["как звучит флейта", "саксофон", "гобой"];

let btn = document.getElementsByClassName('mini-suggest__button')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];


if(btn != undefined){
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
