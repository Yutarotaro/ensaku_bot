var imgg = document.getElementById("image_place");
var rand = 1;
var max = 42;
var min = 1;
var inter = 250;
//var img[max];
var img = new Array(max);
var saku_pictures = [ 
                         ['https://na.cx/i/8FN9Gzy.jpg',0],
                         ['https://66.media.tumblr.com/358970dd2d22752ff9ce418275d94256/36a5728f7da3e122-ba/s1280x1920/8e43cdcca73984410243c6551a7828830ce9121d.jpg',0],
                         ['https://asattenoakari.com/wp-content/uploads/2019/10/endo-style-16.jpg',0],
                         ['https://idolevery.com/wp-content/uploads/2019/09/endosakura3-900x720.jpg',0],
                         ['https://img.jj-jj.net/wp-content/uploads/2019/11/20100738/DMA-09140762-683x1024.jpg',0],
                         ['http://48ers.info/file/parts/I0000657/d338e260116050d1ab69e2504772858d.jpg',0],
                         ['https://img.jj-jj.net/wp-content/uploads/2019/07/22133854/DMA-222p2398-1024x705.jpg',0],
                         ['http://スマホ壁紙無料.com/wp-content/uploads/2019/04/endousakura-10-a.jpg',0],
                         ['https://livedoor.sp.blogimg.jp/nogizaka46bunno1/imgs/1/a/1a3dbf85.jpg',0],
                         ['https://livedoor.blogimg.jp/nogizaka46bunno1/imgs/4/3/43b0a108-s.png',0],
                         ['https://news.mynavi.jp/article/20191206-934121/images/001.jpg',0],
                         ['https://realsound.jp/wp-content/uploads/2019/10/20191011-nogiobiendo-821x633.jpeg',0],
                         ['https://blog-imgs-134.fc2.com/n/o/g/nogicap/llh0055.jpg',0],
                         ['https://img.cmnow.jp/wp-content/uploads/2019/08/28171939/DSCF8248_web.jpg',0],
                         ['https://livedoor.blogimg.jp/nogizaka46bunno1/imgs/e/0/e09627f8-s.jpg',0],
                         ['https://pbs.twimg.com/media/EMob2dvUwAAynfZ?format=jpg&name=medium',0],
                         ['https://pbs.twimg.com/media/EMOvLkLUwAAL5Ap?format=jpg&name=large',0]
];

// ルーレットを開始
function showSakura() {
    alert('ただ今メンテナンス中です');
    roulette = setInterval(function() {
	var tmp = rand;
      while(tmp == rand){
        tmp = Math.floor( Math.random() * (max) );
      }
      rand = tmp;
      imgg.src = img[rand];
      //document.getElementById("button_div").innerHTML(saku_pictures[rand][1]);
      count+=1;
      if(count >= 10){
        clearInterval(roulette);
      };
      }, inter);
}

//load pictures
function loadPictures() {
    console.log("hello world!");
	//var img[max];
	for(var i = 0;i < max;i++){
		img[i] = document.createElement(saku_pictures[i][0]);
	}
}
 
      
