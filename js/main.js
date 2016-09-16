// main.js
// 通用函数
function g(selector){
	var method = selector.substr(0,1) == '.' ? 'getElementsByClassName' : 'getElementById';
	return document[method](selector.substr(1));
}

// 随机数生成函数
function random(range){
	var max = Math.max(range[0],range[1]);
	var min = Math.min(range[0],range[1]);

	var diff = max - min;
	var num = Math.ceil(Math.random()*diff + min);
	return num;
}

// 计算左右分区的范围
function range(){
	var range = {
		left: {
			x: [],
			y: []
		},
		right: {
			x: [],
			y: []
		},
	}

	var wrap = {
		w: g('#wrap').clientWidth,
		h: g('#wrap').clientHeight
	}
	var photo = {
		w: g('.photo')[0].clientWidth,
		h: g('.photo')[0].clientHeight
	}
	range.wrap = wrap;
	range.photo = photo;

	range.left.x = [photo.w/2,wrap.w/2 - photo.w];
	range.left.y = [photo.h/2,wrap.h - photo.h/2];
	range.right.x = [wrap.w/2 + photo.w,wrap.w - photo.w/2];
	range.right.y = [photo.h/2,wrap.h - photo.h/2];

	return range;
}

// 输出所有海报
function addPhotos(){
	var data = Data;
	var template = g('#wrap').innerHTML;
	console.log(template);
	var html = [];
	var nav = [];

	//输出控制按钮		

	for(var s = 0;s < data.length;s++){
		var _html = template
						.replace('{{index}}',data[s].index)
						.replace('{{img}}',data[s].img)
						.replace('{{caption}}',data[s].caption)
						.replace('{{desc}}',data[s].desc);
		html.push(_html);

		nav.push('<span id="nav_' + s + '" onclick="turn( g(\'#photo_' + (s + 1) + '\'))" class="i heart-2" data-icon="&#xe60f;">&nbsp;</span>');
	}

	html.push('<div class="nav">' + nav.join('') + '</div>');
	g('#wrap').innerHTML = html.join('');
	resort(5);
}

//排序海报
function resort(n){

	var _photo = g('.photo');
	var photos = [];

	for(var s = 0;s < _photo.length;s++){
		_photo[s].className = _photo[s].className.replace(/photo_center/,'');
		_photo[s].className = _photo[s].className.replace(/photo_back/,'photo_front');

		_photo[s].style.left = '';
		_photo[s].style.right = '';
		_photo[s].style.top = '';
		_photo[s].style.transform = 'rotate(0deg)';

		g('#nav_' + s).dataset.icon = '\ue60e';

		photos.push(_photo[s]);
	}


	var photo_center = photos.splice(n-1,1)[0];

	g('#nav_' + (n - 1)).dataset.icon = '\ue60f';

	photo_center.className += ' photo_center';

	photo_center.style.left = '50%';
	photo_center.style.top = '50%';
	photo_center.style.transform = 'rotate(0deg)';	
	console.log(photo_center);
	

	var photos_left = photos.splice(0,Math.ceil(photos.length/2));
	var photos_right = photos;

	var ranges = range();

	for(var l = 0;l < photos_left.length;l++){
		photos_left[l].style.left = random([ranges.left.x[0],ranges.left.x[1]]) + 'px';
		photos_left[l].style.top = random([ranges.left.y[0],ranges.left.y[1]]) + 'px';
		photos_left[l].style.transform = 'rotate(' + random([-45,45]) + 'deg)';
	}
	for(var r = 0;r < photos_right.length;r++){
		photos_right[r].style.left = random([ranges.right.x[0],ranges.right.x[1]]) + 'px';
		photos_right[r].style.top = random([ranges.right.y[0],ranges.right.y[1]]) + 'px';
		photos_right[r].style.transform = 'rotate(' + random([-45,45]) + 'deg)';
	}
}

//翻面控制
function turn(elem){
	var cls = elem.className;
	var idNum = elem.id;

	if(/photo_center/.test(cls)){
		if(/photo_front/.test(cls)){
			cls = cls.replace(/photo_front/,'photo_back');
		}else{
			cls = cls.replace(/photo_back/,'photo_front');
		}
		elem.className = cls;
	}else{
		var _n = Number(idNum.split('_')[1]);

		console.log(_n);				
		resort(_n);
	}
	console.log(elem.className);
}


// 函数执行
window.onload = function(){
	addPhotos();
};
