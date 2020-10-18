
class Food{
    constructor(){
/*this.sprite = createSprite(x,y,w,h);

this.x=x;
this.y=y;
this.w=w;
this.h=h;*/

this.image = loadImage("Milk.png");
    }
    getStock(){
    var foodStockRef=database.ref("Food");
    foodStockRef.on("value",function(data){
        foodStock=data.val();
    })
    }
    updateStock(Stock){
        database.ref('/').update({
            "Food":Stock
        })
    }
    deductStock(x){
        if(x>0){ 
            x=x-1;
        }
       
        database.ref('/').set({
            "Food":x
        })
    }
    display(){
        imageMode(CENTER);
     
        if(foodStock!=undefined){
            var ref = 100 +foodStock*40;
            if(ref>500){
                ref = 500;
            }
            for(var a=100;a<ref;a=a+40){ 
            image(this.image,a,100,100,100);
          }
          
      if(foodStock>10){
          var refer = 100+(foodStock-10)*40;
          for(var y=100;y<refer;y=y+40){
              image(this.image,y,200,100,100);
          }}
  
   
}
} 
display2(){
    imageMode(CENTER);
    image(this.image,500,400,100,100);
}
}
