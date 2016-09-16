// Data.js
var Data = [];
var dataStr = "1、西昌邛海<br>\
<br>\
描述信息<br>\
<br>\
<br>\
2、西昌邛海<br>\
<br>\
描述信息<br>\
<br>\
<br>\
3、西昌邛海<br>\
<br>\
描述信息<br>\
<br>\
<br>\
4、西昌邛海<br>\
<br>\
描述信息<br>\
<br>\
<br>\
5、西昌邛海<br>\
<br>\
描述信息<br>\
<br>\
<br>\
";

var d = dataStr.split('<br><br><br>');
for(var i = 0;i < d.length-1;i++){
	var c = d[i].split('<br><br>');
	Data.push({
		// img: c[0].substr(0) + '.jpg',
		index: c[0].split('、')[0],
		img: c[0].split('、')[0] + '.jpg',
		// img: c[0].replace('、',' ') + '.jpg',
		caption: c[0].split('、')[1],
		desc :c[1]
	})
}