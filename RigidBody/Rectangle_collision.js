Rectangle.prototype.collisionTest = function (otherShape,
    collisionInfo) {
    var status = false;
    if (otherShape.mType === "Circle")
        status = false;
    else
        status = false;
    return status;
};

Rectangle.prototype.findSupportPoint = function(dir, ptOnEdge) {
    // The longest project length
    var vToEdge;
    var projection;
    // initialize the computed results
    tmpSupport.mSupportPointDist = -9999999;
    tmpSupport.mSupportPoint = null;
    // check each vector of other object
    for (var i = 0; i < this.mVertex.length; i++) {
        vToEdge = this.mVertex[i].subtract(ptOnEdge);
        projection = vToEdge.dot(dir);
        // find the longest distance with certain edge
        // dir is -n direction, so the distance should be positive
        if ((projection > 0) && 
        (projection > tmpSupport.mSupportPointDist)) {
            tmpSupport.mSupportPoint = this.mVertex[i];
            tmpSupport.mSupportPointDist = projection;
        }
    }
};

