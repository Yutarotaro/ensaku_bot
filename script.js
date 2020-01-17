var imgg = document.getElementById("image_place");
var rand = 1;
var max = 42;
var min = 1;

// ルーレットを開始
function showSakura() {
  
    var count = 0;
    var inter = 250;
    roulette = setInterval(function() {
    var tmp = rand;
    while(tmp == rand){
        tmp = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    }
    rand = tmp;
    imgg.src = "./img/saku"+rand+".jpeg";
    count+=100;
    if(count >= 1000){
        clearInterval(roulette);
    };
    }, inter);
    

}
 
      
