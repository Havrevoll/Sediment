var gEngine = gEngine || {};
gEngine.Core = (function () { //Må gjerast om til ein skikkeleg konstruktor?!
    var mCanvas, mContext, mWidth = 800, mHeight = 450;
    mCanvas = document.getElementById('canvas');
    mContext = mCanvas.getContext('2d');
    mCanvas.height = mHeight;
    mCanvas.width = mWidth;

    var mAllObjects = [];


    var mCurrentTime, mElapsedTime, mPreviousTime = Date.now(), mLagTime = 0;
    var kFPS = 60; // Frames per second
    var kFrameTime = 1 / kFPS;
    var mUpdateIntervalInSeconds = kFrameTime;
    var kMPF = 1000 * kFrameTime; // Milliseconds per frame.



    var updateUIEcho = function () {
        document.getElementById("uiEchoString").innerHTML =
            // ... identical to previous project
            mAllObjects[gObjectNum].mCenter.y.toPrecision(3) + "</li>" +
            "<li>Angle: " + mAllObjects[gObjectNum].mAngle.
                toPrecision(3) + "</li>" +
            "</ul> <hr>" +
            "<p><b>Control</b>: of selected object</p>" +
            "<ul style=\"margin:-10px\">" +
            "<li><b>Num</b> or <b>Up/Down Arrow</b>: SelectObject</li > " +
            "<li><b>WASD</b> + <b>QE</b>: Position [Move + Rotate]</li > " +
            "</ul> <hr>" +
            "<b>F/G</b>: Spawn [Rectangle/Circle] at selected object" +
            "<p><b>H</b>: Fix object</p>" +
            "<p><b>R</b>: Reset System</p>" +
            "<hr>";
    };

    /* 
var updateUIEcho = function () {
    document.getElementById("uiEchoString").innerHTML =
        "<p><b>Selected Object:</b>:</p>" +
        "<ul style=\"margin:-10px\">" +
        "<li>Id: " + gObjectNum + "</li>" +
        "<li>Center: " + mAllObjects[gObjectNum].mCenter.x.
            toPrecision(3) + "," +
        gEngine.Core.mAllObjects[gObjectNum].mCenter.y.toPrecision(3) + "</li>" +
        "</ul> <hr>" + "<p><b>Control</b>: of selected object</p>" +
        "<ul style=\"margin:-10px\">" +
        "<li><b>Num</b> or <b>Up/Down Arrow</b>: SelectObject</li>" +
        "</ul> <hr>" +
        "<b>F/G</b>: Spawn [Rectangle/Circle] at random location" + "<hr>";
}; */

    var draw = function () {

        mContext.clearRect(0, 0, mWidth, mHeight);
        var i;
        for (i = 0; i < mAllObjects.length; i++) {
            mContext.strokeStyle = 'blue';
            if (i === gObjectNum)
                mContext.strokeStyle = 'red';
            mAllObjects[i].draw(mContext);
        }
    };


    var tullto = function () {
        console.log("Inni tullto:")
        console.log(this);
    };



    var update = function () {
        var i;
        for (i = 0; i < mAllObjects.length; i++) {
            mAllObjects[i].update(mContext);
        }
    };


    var runGameLoop = function () {
        requestAnimationFrame(function () {
            runGameLoop();
        });
        //compute how much time has elapsed since the last RunLoop
        mCurrentTime = Date.now();
        mElapsedTime = mCurrentTime - mPreviousTime;
        mPreviousTime = mCurrentTime;
        mLagTime += mElapsedTime;
        //Update the game the appropriate number of times.
        //Update only every Milliseconds per frame.
        //If lag larger then update frames, update until caught up.
        while (mLagTime >= kMPF) {
            mLagTime -= kMPF;
            update();
        }
        updateUIEcho();
        draw();
    };

    var initializeEngineCore = function () {
        console.log("Hei")
        runGameLoop();
    };

    var initializeEngineCore2 = function () {
        console.log("Inni initializeEngineCore2: ");
        console.log(this);
        tullto();
    };

    var mPublic = {
        initializeEngineCore2: initializeEngineCore2,
        initializeEngineCore: initializeEngineCore,
        mAllObjects: mAllObjects,
        mWidth: mWidth,
        mHeight: mHeight,
        mContext: mContext
    };


    return mPublic;
}());
