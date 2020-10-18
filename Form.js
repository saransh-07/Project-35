class Form{
    constructor(){
        this.title = createElement("h1");
        this.button = createButton();
        this.input = createInput("Your Pet's name here");
    }
  display(){
      this.title.html("Virtual Pet");
      this.title.position(300,100);
      this.button.html("Continue");
      this.button.position(325,450);
      
      this.input.position(280,300);
      
     
  }
  
}