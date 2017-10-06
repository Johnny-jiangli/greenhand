window.onload = rolloverInit;

function rolloverInit() {
    //扫描网页中的图片
    for (var i = 0; i < document.images.length; i++) {
        //检查的方法是查看对象的值是否为A。
        // 第一部分document.images[i]是当前的图像
        // 它的parentNode属性是包围它的容器标签，
        // 而tagName提供容器标签的名称。
        // 所以，圆括号中代码的意思是“对于这个特定的图像，包围它的标签是A吗
        if (document.images[i].parentNode.tagName == "A") {
            setupRollover(document.images[i]);
        }
    }
}
/*
首先是window.onload窗口加载时调用此rolloverInit，而后他又调用下面的方法
参数：thisImage被document.images[i]当前图片入值，然后new Image（）实例化 对象=新图片？？别怪我，我也是借鉴--！
注意！请及时更新注释...
*/

function setupRollover(thisImage) {
    thisImage.outImage = new Image();
    thisImage.outImage.src = thisImage.src;
    //当鼠标离开图片对象时 显示原有的SRC
    thisImage.onmouseout = function() {
        this.src = this.outImage.src;//自定义outImage动态事件，在onmouseout发生时调用方法？？？？
    }
//当鼠标离开图片时，
    thisImage.overImage = new Image();
    thisImage.overImage.src = "images/" + thisImage.id + "1.jpg";
    thisImage.onmouseover = function() {
        this.src = this.overImage.src;
    }
//当鼠标点击图片时
    thisImage.Mclick=new Image();
    thisImage.Mclick.src="images/"+thisImage.id+"2.jpg";
    thisImage.onclick=function () {
        thisImage.src=thisImage.Mclick.src;
    }
}
