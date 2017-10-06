window.onload = rolloverInit;

function rolloverInit() {
    for (var i=0; i<document.links.length; i++) {
        var linkObj =  document.links[i];
        if (linkObj.id) {
            var imgObj = document.getElementById(linkObj.id + "1");
            if (imgObj) {
                setupRollover(linkObj,imgObj);
            }
        }
    }
}

