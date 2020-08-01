window.onscroll = function() {
    var pos = window.pageYOffset;
    if (pos != 0) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-58px";
    }
} 

function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}
if (detectMob()) {
    document.getElementById("big-text").classList.add("display-4");
}