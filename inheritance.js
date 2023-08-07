// inheritance
class Animal
{
  constructor(name,color)
  {
     this.name=name
  this.color=color
  }

run(){
  console.log("running")
}
shout(){
  console.log(this.name  + " is  shouting")
}
  }


class Monkey extends Animal{
  eatbanana(){
  console.log(this.name + " is eating baanana")
}
}
let ani=new Animal("bamboo","pinkk")
let m= new Monkey("jubii","rust")
ani.shout()
m.eatbanana()
