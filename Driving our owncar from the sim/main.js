const canvas=document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const road=new Road(canvas.width/2,canvas.width*0.9);//0.9 brings the road line more inwards
const car = new Car(road.getLaneCenter(1),100,30,50,"KEYS");
const traffic=[
    new  Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2)
];

animate();

function animate(){
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.borders,[]);
    }
    car.update(road.borders,traffic);
    
    canvas.height=window.innerHeight;
    
    ctx.save();// to make it look like the car is being followedby an overhead camera(road moving backwards)
    ctx.translate(0,-car.y+canvas.height*0.8);

    road.draw(ctx)
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(ctx,"red");
    }
    car.draw(ctx,"blue");

    ctx.restore();
    requestAnimationFrame(animate);
}

1//to refer to the document myCanvas on style.css
3//prev 3 lines was for shaping the background
6//x,y,width,height in pixels
11//update where car is before animating it
15//calls animate again and again, giving illusion of animationwith movement