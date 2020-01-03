function RigidShape(center) {
    this.mCenter = center;
    this.mVelocity = new Vec2(0, 0);
    this.mAcceleration = gEngine.Core.mGravity;

    //angle
    this.mAngle = 0;
    //negative-- clockwise
    //positive-- counterclockwise
    this.mAngularVelocity = 0;

    this.mAngularAcceleration = 0;

    this.mBoundRadius = 0;
    gEngine.Core.mAllObjects.push(this);
}

RigidShape.prototype.update = function () {
    if (gEngine.Core.mMovement) {
        var dt = gEngine.Core.mUpdateIntervalInSeconds;
        //v += a*t
        this.mVelocity = this.mVelocity.add(this.mAcceleration.scale(dt));
        //s += v*t
        this.move(this.mVelocity.scale(dt));

        this.mAngularVelocity += this.mAngularAcceleration * dt;
        this.rotate(this.mAngularVelocity * dt);
    }
};

RigidShape.prototype.boundTest = function (otherShape) {
    var vFrom1to2 = otherShape.mCenter.subtract(this.mCenter);
    var rSum = this.mBoundRadius + otherShape.mBoundRadius;
    var dist = vFrom1to2.length();
    if (dist > rSum) {
        return false; // not overlapping
    }
    return true;
};