// JavaScript Document
	var sites=['http://www.sfspithorst.me/V1.1/var0/index.html',
	'http://www.sfspithorst.me/V1.1/var1/index.html',
	'http://www.sfspithorst.me/V1.1/var2/index.html'
	];

function openUrl(){
    var i = Math.round(Math.random()*(sites.length-1));
    window.location.href=sites[i];
    return false;
}