/**
 * Created by zh on 2018/2/2.
 */
window.onload=function(){
   function gundong(id){
       var odiv = document.getElementById(id);
       var oul = odiv.getElementsByTagName('ul')[0];
       var ali = oul.getElementsByTagName('li');
       var spa = -2;
       oul.innerHTML=oul.innerHTML+oul.innerHTML;
       oul.style.width=ali[0].offsetWidth*ali.length+'px';
       function move(){
           if(oul.offsetLeft<-oul.offsetWidth/2){
               oul.style.left='0';
           }
           if(oul.offsetLeft>0){
               oul.style.left=-oul.offsetWidth/2+'px'
           }
           oul.style.left=oul.offsetLeft+spa+'px';
       }
       var timer = setInterval(move,30);

      /* odiv.onmouseover=function(){clearInterval(timer);};
       odiv.onmouseout=function(){timer = setInterval(move,30)};*/

       /*  document.getElementsByTagName('a')[0].onclick = function(){
        spa=-2;
        };
        document.getElementsByTagName('a')[1].onclick = function(){
        spa=2;
        }*/
   }

    gundong('wufeng1');
    gundong('wufeng2');
};