class rope{
    constructor(body1,pointB,offsetX,offsetY,){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA:body1,
            pointB:pointB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB
        
    this.rope=Constraint.create(options);
    World.add(world,this.rope)
    
    
    

    }
    
    fly(){
    
        this.rope.body1=null
    }

    
    display(){
    if (this.rope.body1){

    stroke("black")
    var point1=this.rope.bodyA.position
    var pointB = this.pointB
     line(point1.x,point1.y,pointB.x,pointB.y)
    }
    
    
    }
    
    
    
    
    }
    
    
    
    
    
    