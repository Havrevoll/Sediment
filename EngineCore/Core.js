var gEngine = gEngine || {};
gEngine.Core = (function () { //Må gjerast om til ein skikkeleg konstruktor?!
    var mCanvas, mContext, mWidth = 800, mHeight = 450;
    mCanvas = document.getElementById('canvas');
    mContext = mCanvas.getContext('2d');
    mCanvas.height = mHeight;
    mCanvas.width = mWidth;

    var mAllObjects = [];

    var mPublic = {
        mWidth: mWidth,
        mHeight: mHeight,
        mContext: mContext,
        mAllObjects: mAllObjects
    };

    return mPublic;
}());