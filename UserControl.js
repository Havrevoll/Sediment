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
    else if (event.key == "g") { //g
        var r1 = new Circle(new Vec2(gEngine.Core.mAllObjects[gObjectNum].mCenter.x,
            gEngine.Core.mAllObjects[gObjectNum].mCenter.y),
            Math.random() * 10 + 20);

    }
    else if (event.key >= "0" && event.key <= "9") { //number
        if (Number(event.key) < gEngine.Core.mAllObjects.length)
            gObjectNum = Number(event.key);
    }
    else if (event.key == "ArrowUp") { //up arrow
        if (gObjectNum > 0)
            gObjectNum--;
    }
    else if (event.key == "ArrowDown") { // down arrow
        if (gObjectNum < gEngine.Core.mAllObjects.length - 1)
            gObjectNum++;
    }

    //Move with WASD keys
    else if (event.key == "w") {
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, -10));
    }
    else if (event.key == "s") {
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, +10));
    }
    else if (event.key == "a") {
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(-10, 0));
    }
    else if (event.key == "d") {
        gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(+10, 0));
    }

    //testing for å endra maskina
    else if (event.key == "i") {
        gEngine.Core.mAllObjects[gObjectNum].mVelocity.y -= 1;
    }
    else if (event.key == "k") {
        gEngine.Core.mAllObjects[gObjectNum].mVelocity.y += 1;
    }
    else if (event.key == "j") {
        gEngine.Core.mAllObjects[gObjectNum].mVelocity.x -= 1;
    }
    else if (event.key == "l") {
        gEngine.Core.mAllObjects[gObjectNum].mVelocity.x += 1;
    }
    else if (event.key == "u") {
        gEngine.Core.mAllObjects[gObjectNum].mAngularVelocity -= 0.1;
    }
    else if (event.key == "o") {
        gEngine.Core.mAllObjects[gObjectNum].mAngularVelocity += 0.1;
    }
    else if (event.key == "z") {
        gEngine.Core.mAllObjects[gObjectNum].updateMass(-1);
    }
    else if (event.key == "x") {
        gEngine.Core.mAllObjects[gObjectNum].updateMass(1);
    }
    else if (event.key == "c") {
        gEngine.Core.mAllObjects[gObjectNum].mFriction -= 0.01;
    }
    else if (event.key == "x") {
        gEngine.Core.mAllObjects[gObjectNum].updateMass(1);
    }



    // rotate with QE keys
    else if (event.key == "q") {
        gEngine.Core.mAllObjects[gObjectNum].rotate(-0.1);
    }
    else if (event.key == "e") {
        gEngine.Core.mAllObjects[gObjectNum].rotate(0.1);
    }

    // Toggle gravity with the H key
    else if (event.key == "h") {
        if (gEngine.Core.mAllObjects[gObjectNum].mFix == 0)
            gEngine.Core.mAllObjects[gObjectNum].mFix = 1;
        else gEngine.Core.mAllObjects[gObjectNum].mFix = 0;
    }

    // reset scene
    else if (event.key == "r") {
        gEngine.Core.mAllObjects.splice(5, gEngine.Core.mAllObjects.length);
        gObjectNum = 0;
    }
});
