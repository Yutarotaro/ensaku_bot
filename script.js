var imgg = document.getElementById("image_place");
var rand = 1;
var max = 42;
var min = 1;

// ルーレットを開始
function showSakura() {
    var inter = 250;
    var count = 0;
    roulette = setInterval(function() {
    var tmp = rand;
    while(tmp == rand){
        tmp = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    }
    rand = tmp;
    imgg.src = "./saku"+rand+".jpeg";
    count+=100;
    inter += 50;
    if(count >= 1000){
        clearInterval(roulette);
        return;
    }
    }, inter);
    

}
 
      
