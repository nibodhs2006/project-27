class Chain {
    constructor(bA,bB){
     var options={
         bodyA:bA,
         pointB:bB,
         stiffness:1.5,
       length:60
     
         }
         this.pointB=bB
         this.Chain=Constraint.create(options)
         World.add(world,this.slingshot)
 
    }
 fly(){
 this.Chain.bodyA=null
 }
  display(){
  if(this.slingshot.bodyA){
 
 
  
     line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
     
  }
  }
 
 
 
 }