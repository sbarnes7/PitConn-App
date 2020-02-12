window.onload = function(){
   console.log(screen.height);
if(screen.height > 1000){
    document.getElementById('vids').style.overflow = "auto";
    var fix = document.getElementsByClassName('fix');
    for (var i = 0; i < fix.length; i++) { 
        fix[i].style.bottom = '0px';
    }}
else{
        document.getElementById('bgside').style.height = document.getElementById('sidebuttons').clientHeight + 200;
        document.getElementById('vids').style.paddingBottom = "200px";

} 
}
