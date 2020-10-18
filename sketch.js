var dog, happyDog,database,dogS,foodStock;
var feedme, buyFood, foodObj,hTime ,lastFed,fedTime;
var appState,form,petName;
function preload(){
dog = loadImage("dogImg.png");
happyDog = loadImage("dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(800, 500);
  form=new Form();
  dogS = createSprite(600,400,10,10);
  dogS.addImage(dog);
  dogS.scale =0.15
  foodObj = new Food();
 feedMe = createButton();
 buyFood = createButton();

 
 feedMe.position(150,20);
 buyFood.html("Buy More Food");
 buyFood.position(300,20);
 fedTime = database.ref("Hour");
 fedTime.on("value",function(data){
   lastFed = data.val();
 })
 hTime=0;
appState = 0;
}


function draw() {  
  if(appState===1){
    background(46,139,87);
  foodObj.getStock();

feedMe.show();
buyFood.show();
foodObj.display();
 
 
feedMe.mousePressed(function (){
  if(foodStock>0){
    foodObj.deductStock(foodStock);
    foodObj.updateStock(foodStock);
    dogS.addImage(happyDog);
    
    hTime = 6000;
    
  }
 
},hTime=hTime-20,getTime());
if(foodStock!=undefined){
  fill ("black");
  textSize(20);
  text("Food Remaining:"+foodStock,420,35);
 }
 if(foodStock===0){
  text("You have run out of food",200,200);
}
if(hTime>0){
foodObj.display2();
}
if(hTime<=0){
  dogS.addImage(dog);
  text(petName+"'s hungry",100,400);

}

drawSprites();
buyFood.mousePressed(function (){
  database.ref('/').set({
    "Food":20
  });
  
});
  }
  
displayForm();
}
function getTime(){
  lastFed = hour();
  console.log(lastFed);
  database.ref('/').update({
    "Hour":lastFed
  })
  if(lastFed<12){textSize(20);
    fill("black");
    text("Last Fed:"+lastFed+"AM",10,35);
  }
    if(lastFed>12){
      textSize(20);
      fill("black");
      text("Last Fed:"+(lastFed-12)+"PM",10,35);
    }
}
function displayForm(){
  if(appState===0){
    form.button.mousePressed(function(){
      appState=1;
      
      form.input.hide();
      form.button.hide();
      form.title.hide();
  })
    buyFood.hide();
    feedMe.hide();
    background(255);
    form.display();
    petName = form.input.value();
    feedMe.html("Feed "+petName);
  }

}
