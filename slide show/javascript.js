var pictures=["images/slide1.jpg","images/slide2.jpg","images/slide3.jpg","images/slide4.jpg","images/slide5.jpg"]
function slide(){
    document.getElementById('slidediv').getElementsByTagName("img")[0].src=pictures[0];
    document.getElementsByTagName("img")[0].className = "fade1";
    document.getElementById("slidetext1").style.display = "block";
    changepic(0);
}
function changepic(n){
    document.getElementById('slidediv').getElementsByTagName("img")[0].src=pictures[n%pictures.length];
    switch(n%pictures.length) {
        case 0:
        document.getElementsByTagName("img")[0].className = "fade1";
        document.getElementById("slidetext1").style.display = "block";
        document.getElementById("slidetext2").style.display = "none";
        document.getElementById("slidetext3").style.display = "none";
        document.getElementById("slidetext4").style.display = "none";
        document.getElementById("slidetext5").style.display = "none";
            break;
        case 1:
        document.getElementsByTagName("img")[0].className = "fade2";
        document.getElementById("slidetext1").style.display = "none";
        document.getElementById("slidetext2").style.display = "block";
        document.getElementById("slidetext3").style.display = "none";
        document.getElementById("slidetext4").style.display = "none";
        document.getElementById("slidetext5").style.display = "none";
            break;
        case 2:
        document.getElementsByTagName("img")[0].className = "fade3";
        document.getElementById("slidetext1").style.display = "none";
        document.getElementById("slidetext2").style.display = "none";
        document.getElementById("slidetext3").style.display = "block";
        document.getElementById("slidetext4").style.display = "none";
        document.getElementById("slidetext5").style.display = "none";
        break;
        case 3:
        document.getElementsByTagName("img")[0].className = "fade4";
        document.getElementById("slidetext1").style.display = "none";
        document.getElementById("slidetext2").style.display = "none";
        document.getElementById("slidetext3").style.display = "none";
        document.getElementById("slidetext4").style.display = "block";
        document.getElementById("slidetext5").style.display = "none";
        break;
        case 4:
        document.getElementsByTagName("img")[0].className = "fade5";
        document.getElementById("slidetext1").style.display = "none";
        document.getElementById("slidetext2").style.display = "none";
        document.getElementById("slidetext3").style.display = "none";
        document.getElementById("slidetext4").style.display = "none";
        document.getElementById("slidetext5").style.display = "block";
        break;
        default:
        break;
    }
    setTimeout(function(){changepic(n+1);},3000);
}