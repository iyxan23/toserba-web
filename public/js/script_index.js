window.onscroll = function() {
    var pos = window.pageYOffset;
    if (pos != 0) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-58px";
    }
} 