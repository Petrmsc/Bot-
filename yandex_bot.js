// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  
// @author       You
// @match        https://yandex.ru/*
// @icon      
// @grant        none
// ==/UserScript==

let keywords = ["как звучит флейта", "саксофон", "гобой"];

let btn = document.getElementsByClassName('button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];


if(btn !== undefined){
	document.getElementsByClassName('input__control input__input mini-suggest__input')[0].value = keyword;
	document.getElementsByClassName('button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited')[0].click();
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
