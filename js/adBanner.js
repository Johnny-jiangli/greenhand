window.onload=fanzhuan;
var cishu=0;
function fanzhuan() {
    var array1=new Array("images/button102.jpg","images/im.jpg","images/button5_on.png","images/button10.jpg","images/button32.png","images/20140830145513_45587.jpg");
    cishu++;
    if(cishu==array1.length){
        cishu=0;
    }
    document.getElementById("a").src=array1[cishu];
    setTimeout(fanzhuan,3*1000);
}