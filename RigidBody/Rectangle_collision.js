Rectangle.prototype.collisionTest = function (otherShape,
    collisionInfo) {
    var status = false;
    if (otherShape.mType === "Circle")
        status = false;
    else
        status = this.collidedRectRect(this, otherShape, collisionInfo);
    return status;
};

var SupportStruct = function () {
    this.mSupportPoint = null;
    this.mSupportPointDist = 0;
};
var tmpSupport = new SupportStruct();

Rectangle.prototype.findSupportPoint = function (dir, ptOnEdge) {
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

Rectangle.prototype.findAxisLeastPenetration = function (otherRect, collisionInfo) {
    var n;
    var supportPoint;
    var bestDistance = 999999;
    var bestIndex = null;
    var hasSupport = true;
    var i = 0;
    while ((hasSupport) && (i < this.mFaceNormal.length)) {
        // Retrieve a face normal from A
        n = this.mFaceNormal[i];
        // use -n as direction and
        // the vertex on edge i as point on edge
        var dir = n.scale(-1);
        var ptOnEdge = this.mVertex[i];
        // find the support on B
        // the point has longest distance with edge i
        otherRect.findSupportPoint(dir, ptOnEdge);
        hasSupport = (tmpSupport.mSupportPoint !== null);
        // get the shortest support point depth
        if ((hasSupport) && (tmpSupport.mSupportPointDist < bestDistance)) {
            bestDistance = tmpSupport.mSupportPointDist;
            bestIndex = i;
            supportPoint = tmpSupport.mSupportPoint;
        }
        i = i + 1;
    }
    if (hasSupport) {
        // all four directions have support point
        var bestVec = this.mFaceNormal[bestIndex].scale(bestDistance);
        collisionInfo.setInfo(bestDistance, this.mFaceNormal[bestIndex], supportPoint.add(bestVec));
    }
    return hasSupport;
};

var collisionInfoR1 = new CollisionInfo();
var collisionInfoR2 = new CollisionInfo();

Rectangle.prototype.collidedRectRect = function (r1, r2, collisionInfo) {
    var status1 = false;
    var status2 = false;
    // find Axis of Separation for both rectangle
    status1 = r1.findAxisLeastPenetration(r2, collisionInfoR1);
    if (status1) {
        status2 = r2.findAxisLeastPenetration(r1, collisionInfoR2);
        if (status2) {
            // choose the shorter normal as the normal
            if (collisionInfoR1.getDepth() < collisionInfoR2.getDepth()) {
                var depthVec = collisionInfoR1.getNormal().scale(collisionInfoR1.getDepth());
                collisionInfo.setInfo(collisionInfoR1.getDepth(),
                    collisionInfoR1.getNormal(), collisionInfoR1.mStart.subtract(depthVec));
            } else {
                collisionInfo.setInfo(collisionInfoR2.getDepth(),
                    collisionInfoR2.getNormal().scale(-1),
                    collisionInfoR2.mStart);
            }
        }
    }
    return status1 && status2;
};

