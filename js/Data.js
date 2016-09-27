// Data.js
var Data = [];
var dataStr = "1、锦里灯会<br>\
<br>\
一场三国的盛宴，书读少了三国的人物没认出来几个<br>\
<br>\
<br>\
2、星空<br>\
<br>\
星空很美，你也很美，也很可爱<br>\
<br>\
<br>\
3、貂蝉吕布<br>\
<br>\
你总是能够把我逗笑，我也想成为大英雄。生活中的确很墨迹<br>\
<br>\
<br>\
4、银杏<br>\
<br>\
第一次抓到娃娃，银杏美，你也美<br>\
<br>\
<br>\
5、抢镜<br>\
<br>\
抢镜<br>\
<br>\
<br>\
6、亚拉雪山<br>\
<br>\
很喜欢这张，多亏了你的照顾，没有执行力，说的回来锻炼身体，可是却还是没有去<br>\
<br>\
<br>\
7、西昌邛海<br>\
<br>\
最经典的一张<br>\
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