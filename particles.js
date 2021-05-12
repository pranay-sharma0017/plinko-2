
class Particle {
    constructor(x, y,radius) {

        var options ={
            restitution:0.4
        }
        this.radius=radius;
      
        this.body = Bodies.circle(x, y, this.radius,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

      

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius,this.radius);
        pop();
if(pos.x>320&&pos.x<400&&pos.y>500&&pos.y<508){
 score=score+100;
 particle=null;

                 }
 if(pos.x>400&&pos.x<480&&pos.y>500&&pos.y<508){
 score=score+100;
 particle=null;
       
     }
if(pos.x>240&&pos.x<320&&pos.y>500&&pos.y<508){
  score=score+200;
  particle=null;
             }
     if(pos.x>480&&pos.x<560&&pos.y>500&&pos.y<508){
    score=score+200;
      particle=null;
                       
          }
          if(pos.x>160&&pos.x<240&&pos.y>500&&pos.y<508){
            score=score+300;
            particle=null;

                }
                if(pos.x>560&&pos.x<640&&pos.y>500&&pos.y<508){
                    score=score+300;
                    particle=null;
       
                        }
                        if(pos.x>80&&pos.x<160&&pos.y>500&&pos.y<508){
                            score=score+400;
                            particle=null;
               
                                }
                                if(pos.x>640&&pos.x<720&&pos.y>500&&pos.y<508){
                                    score=score+400;
                                    particle=null;
                       
                                        }
                                        if(pos.x>0&&pos.x<80&&pos.y>500&&pos.y<508){
                                            score=score+500;
                                            particle=null;
                               
                                                }

                                         if(pos.x>720&&pos.x<800&&pos.y>500&&pos.y<508){
       score=score+500;
     particle=null;
                                                                       
          }

            
    }

}