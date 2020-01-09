var width = gEngine.Core.mWidth;
var height = gEngine.Core.mHeight;
var context = gEngine.Core.mContext;
var gObjectNum = 0;

window.addEventListener("keydown", function (event) {
   /* if (event.defaultPrevented) {
        return; // Do nothing if event already handled
    }*/

    // Eg har henta event-handlinga frå https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code 
    // der det står forklart for eit dataspel. Det verkar fornuftig å bruka switch i staden for alle dei if-setningane i denne situasjonen.
    // Dette oppsettet kan handsama fleire treff samstundes på ein ryddig måte òg.
    switch (event.code) {


        case "Digit0":
        case "Digit1":
        case "Digit2":
        case "Digit3":
        case "Digit4":
        case "Digit5":
        case "Digit6":
        case "Digit7":
        case "Digit8":
        case "Digit9":
        case "Numpad0":
        case "Numpad1":
        case "Numpad2":
        case "Numpad3":
        case "Numpad4":
        case "Numpad5":
        case "Numpad6":
        case "Numpad7":
        case "Numpad8":
        case "Numpad9":
            if (Number(event.key) < gEngine.Core.mAllObjects.length)
                gObjectNum = Number(event.key);
            break;

        case "ArrowUp":
            if (gObjectNum > 0)
                gObjectNum--;
            break;

        case "ArrowDown":
            if (gObjectNum < gEngine.Core.mAllObjects.length - 1)
                gObjectNum++;
            break;






        //Move with WASD keys
        case "KeyW":
            gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, -10));
            break;

        case "KeyS":
            gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, +10));
            break;
        case "KeyA":
            gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(-10, 0));
            break;

        case "KeyD":
            gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(+10, 0));
            break;


        //testing for å endra maskina
        case "KeyI":
            gEngine.Core.mAllObjects[gObjectNum].mVelocity.y -= 1;
            break;

        case "KeyK":
            gEngine.Core.mAllObjects[gObjectNum].mVelocity.y += 1;
            break;

        case "KeyJ":
            gEngine.Core.mAllObjects[gObjectNum].mVelocity.x -= 1;
            break;

        case "KeyL":
            gEngine.Core.mAllObjects[gObjectNum].mVelocity.x += 1;
            break;

        case "KeyU":
            gEngine.Core.mAllObjects[gObjectNum].mAngularVelocity -= 0.1;
            break;

        case "KeyO":
            gEngine.Core.mAllObjects[gObjectNum].mAngularVelocity += 0.1;
            break;

        case "KeyZ":
            gEngine.Core.mAllObjects[gObjectNum].updateMass(-1);
            break;

        case "KeyX":
            gEngine.Core.mAllObjects[gObjectNum].updateMass(1);
            break;

        case "KeyC":
            gEngine.Core.mAllObjects[gObjectNum].mFriction -= 0.01;
            break;

        case "KeyV":
            gEngine.Core.mAllObjects[gObjectNum].mFriction += 0.01;
            break;

        case "KeyB":
            gEngine.Core.mAllObjects[gObjectNum].mRestitution -= 0.01;
            break;

        case "KeyN":
            gEngine.Core.mAllObjects[gObjectNum].mRestitution += 0.01;
            break;

        case "Backslash":
            gEngine.Core.mMovement = !gEngine.Core.mMovement;
            break;

        

        case "KeyF":
            var r1 = new Rectangle(new Vec2(gEngine.Core.mAllObjects[gObjectNum].mCenter.x,
                gEngine.Core.mAllObjects[gObjectNum].mCenter.y),
                Math.random() * 30 + 10, Math.random() * 30 + 10,
                Math.random() * 30, Math.random(), Math.random());
            break;

        case "KeyG":
            var r1 = new Circle(new Vec2(gEngine.Core.mAllObjects[gObjectNum].mCenter.x,
                gEngine.Core.mAllObjects[gObjectNum].mCenter.y),
                Math.random() * 10 + 20, Math.random() * 30,
                Math.random(), Math.random());
            break;

        // rotate with QE keys
        case "KeyQ":
            gEngine.Core.mAllObjects[gObjectNum].rotate(-0.1);
            break;

        case "KeyE":
            gEngine.Core.mAllObjects[gObjectNum].rotate(0.1);
            break;


        // Toggle gravity with the H key
        case "KeyH":
            var i;
            for (i = 0; i < gEngine.Core.mAllObjects.length; i++) {
                if (gEngine.Core.mAllObjects[i].mInvMass !== 0)
                    gEngine.Core.mAllObjects[i].mVelocity =
                        new Vec2(Math.random() * 20 - 10, Math.random() * 20 - 10);
            }

            break;

        // reset scene
        case "keyR":
            gEngine.Core.mAllObjects.splice(5, gEngine.Core.mAllObjects.length);
            gObjectNum = 0;
            break;

    }

    // Consume the event so it doesn't get handled twice
    //event.preventDefault();
}, true);
