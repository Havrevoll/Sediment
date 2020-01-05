function RigidShape(center, mass, friction, restitution) {
    this.mCenter = center;
    this.mInertia = 0;
    if (mass !== undefined)
        this.mInvMass = mass;
    else
        this.mInvMass = 1;

    if (friction !== undefined)
        this.mFriction = friction;
    else
        this.mFriction = 0.8;

    if (restitution !== undefined)
        this.mRestitution = restitution;
    else
        this.mRestitution = 0.2;

    this.mVelocity = new Vec2(0, 0);

    if (this.mInvMass !== 0) {
        this.mInvMass = 1 / this.mInvMass;
        this.mAcceleration = gEngine.Core.mGravity;

    } else {

        this.mAcceleration = new Vec2(0, 0);
    }

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