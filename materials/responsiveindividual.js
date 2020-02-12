window.onload = function(){
    console.log(screen.height);
 if(screen.height > 1000){
    var tabContents = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabContents.length; i++) { 
        tabContents[i].style.overflow = 'auto';
    }
    document.getElementById('openarrow').style.width = "55px";
}
 else{
     this.document.getElementById('logoimg').style.paddingLeft = "100px";
     document.getElementById('openarrow').style.width = "35px";
 
 } 
 }