 /* Carousel */
 const adelante=document.getElementById("adelante");
 const atras=document.getElementById("atras");
 const carouselPhoto=document.getElementsByClassName("carousel__photo");
 let largo=0;
 adelante.addEventListener("click", function(){
  
     largo++;
     for(let i=0;i<carouselPhoto.length;i++){
         const card=carouselPhoto[i];
         if(largo==1){card.style.left ="-1370px"}
         if(largo==2){card.style.left ="-2740px"}
         if(largo==3){card.style.left ="-4110px"}
         if(largo>3){
             largo=3;
         }
      }
 });
 atras.addEventListener("click", function(){
  largo--;
  for(let i=0;i<carouselPhoto.length;i++){
      const card=carouselPhoto[i];
      if(largo==0){card.style.left ="0px"}
      if(largo==1){card.style.left ="-1370px"}
      if(largo==2){card.style.left ="-2740px"}
      if(largo<0){
          largo=0;
      }
   }
});