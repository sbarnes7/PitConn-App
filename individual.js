window.onload = function(){
        var scheight = screen.height;
console.log(scheight);
if(scheight > 1000){
    console.log("here");
    var tabs = document.getElementsByClassName('tabContent');
    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.height = "400px";
        tabs[i].style.overflow = "auto";
    }
    var fix = document.getElementsByClassName('fix');
    for (var i = 0; i < fix.length; i++) { 
        fix[i].style.bottom = '0px';
    }
}
else{
    var tabs = document.getElementsByClassName('tabContent');
    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.paddingBottom = "40px";
    }

}
}