/* function userControl(event) {
    var keycode;
}


if (window.event) { // IE
    keycode = event.keyCode;
}
else if (event.which) { // Netscape/Firefox/Opera
    keycode = event.which;
} */

var width = gEngine.Core.mWidth;
var height = gEngine.Core.mHeight;
var context = gEngine.Core.mContext;
var gObjectNum = 0;

window.addEventListener("keydown", event => {
    if (event.key == "f") { //f
        var r1 = new Rectangle(new Vec2(Math.random() * width * 0.8,
            Math.random() * height * 0.8),
            Math.random() * 30 + 10,
            Math.random() * 30 + 10);

        /*      //create new Rectangle at random position
             context.strokeRect(Math.random() * width * 0.8,
                 // x position of center
                 Math.random() * height * 0.8,
                 // y position of center
                 Math.random() * 30 + 10, Math.random() * 30 + 10);
             // width and height location
              */
    }
    if (event.key == "g") { //g
        var r1 = new Circle(new Vec2(Math.random() * width * 0.8,
            Math.random() * height * 0.8),
            Math.random() * 10 + 20);

        /*   //create new Circle at random position
          context.beginPath();
          //draw a circle
          context.arc(Math.random() * width * 0.8,
              // x position of center
              Math.random() * height * 0.8,
              // y position of center
              Math.random() * 30 + 10, 0, Math.PI * 2, true);
          // radius
          context.closePath();
          context.stroke(); */
    }
    if (event.key >= "0" && event.key <= "9") { //number
        if (Number(event.key) < gEngine.Core.mAllObjects.length)
        gObjectNum = Number(event.key);
        }
        if (event.key == "ArrowUp") { //up arrow
        if (gObjectNum > 0)
        gObjectNum--;
        }
        if (event.key == "ArrowDown") { // down arrow
        if (gObjectNum < gEngine.Core.mAllObjects.length-1)
        gObjectNum++;
        }
});
