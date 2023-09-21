var generate = document.getElementById("g");
var imgs = document.getElementsByTagName("input");

var imgSrc ;
function cardMk(){
var newPage = window.open("newPage.html", "","width=700px , height=500px" );

var text = document.getElementsByTagName('textarea')[0].value;
console.log(text);
for(var i=0 ; i<imgs.length;i++){
    if(imgs[i].checked) {
        imgSrc=imgs[i].value;
        console.log(imgSrc);
    }
};
newPage.onload=()=>{

var newImg = newPage.document.getElementsByTagName("img")[0];
var para =  newPage.document.getElementsByTagName("p")[0];
newImg.src=imgSrc;
para.textContent=text;

var closeBtn =  newPage.document.getElementsByTagName("button")[0];
closeBtn.onclick=()=>{
    newPage.close();
}

}

};
