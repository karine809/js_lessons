let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

//Draw Rectengl
//context.fillStyle = "red";//ete guyn chenq nshum default sev e linum
//context.fillRect(10, 10, 150, 130);//x,y, width, height, mej@ guyn lcrac//
// style-i ev Rect-i hertakanutyun@ karevor e
// context.strokeStyle = "blue";
// context.strokeRect(50, 50, 100, 100);//x, t, chaper, ezradcvac

const circle = () => {
    context.lineWidth = 5;//shrjanagci hastutyun@
    context.strokeStyle = "grey";//ezragcvac moxraguyn, mej@ datark
    context.beginPath();//skselu uxin
    context.arc(150, 150, 50, 0, Math.PI * 2, false);//x,y, radius, starti ankyun@, endAngle, jamslaqi uxxutyamb kam hakarak@
    context.stroke();//katarel
}; 
//circle();

//Window.setTimeout() //katarvum e mi angam
// const foo = () => {
//     console.log("Hello, i am foo function");
// };
// const bar = () => console.log("Hello, i am bar function");
//    foo();
//    bar();
// setTimeout(foo, 2000);//function-i kanch@ ushacnum e
    
//setTimeout(circle, 2000);

//Window.setInterval()
//setInterval(foo, 1000);amen 100mlvrkyan@ mek kanchum e nshvac function@
    
let position = 0;
setInterval(function(){
    context.fillStyle = "red";
    context.fillRect(position, 0, 150, 130);
    position ++;
    if (position > 200){
        position = 0;
    }
}, 100)


  


