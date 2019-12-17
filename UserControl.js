var width = gEngine.Core.mWidth;
var height = gEngine.Core.mHeight;
var context = gEngine.Core.mContext;
var gObjectNum = 0;

window.addEventListener("keydown", event => {
    if (event.key == "f") { //f
        var r1 = new Rectangle(new Vec2(gEngine.Core.mAllObjects[gObjectNum].mCenter.x,
            gEngine.Core.mAllObjects[gObjectNum].mCenter.y),
            Math.random() * 30 + 10,
            Math.random() * 30 + 10);
    }
    if (event.key == "g") { //g
        var r1 = new Circle(new Vec2(gEngine.Core.mAllObjects[gObjectNum].mCenter.x,
            gEngine.Core.mAllObjects[gObjectNum].mCenter.y),
            Math.random() * 10 + 20);

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
        if (gObjectNum < gEngine.Core.mAllObjects.length - 1)
            gObjectNum++;
    }

    //Move with WASD keys
    if (event.key == "w") {
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, -10));
    }
    if (event.key == "s") {
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, +10));
    }
    if (event.key == "a") {
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(-10, 0));
    }
    if (event.key == "d") {
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(+10, 0));
    }

    // rotate with QE keys
    if (event.key == "q") {
        gEngine.Core.mAllObjects[gObjectNum].rotate(-0.1);
    }
    if (event.key == "e") {
        gEngine.Core.mAllObjects[gObjectNum].rotate(0.1);
    }

    // Toggle gravity with the H key
    if (event.key == "h") {
        if (gEngine.Core.mAllObjects[gObjectNum].mFix == 0)
            gEngine.Core.mAllObjects[gObjectNum].mFix = 1;
        else gEngine.Core.mAllObjects[gObjectNum].mFix = 0;
    }

    // reset scene
    if (event.key == "r") {
        gEngine.Core.mAllObjects.splice(5, gEngine.Core.mAllObjects.length);
        gObjectNum = 0;
    }
});
