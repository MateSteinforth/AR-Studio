//
// get the normal vector of an object
//
// How to convert Euler angles to directional vector?
// https://stackoverflow.com/questions/1568568/how-to-convert-euler-angles-to-directional-vector
//
// Rotation in Radians = 0 to pi (3.14)
// Pitch = Up/Down
// Yaw = left/right
// Roll = tilt head side/side
//
var Scene = require('Scene');
var Reactive = require('Reactive');
var Diagnostics = require('Diagnostics');

//
// eg get the normal of plane0
//
var plane = Scene.root.find('plane0'); 

var Pitch = plane.transform.rotationX;
var Yaw = plane.transform.rotationY;
var Roll = plane.transform.rotationZ;

var hv_x = Reactive.cos(Pitch).mul(Reactive.cos(Roll)).mul(Reactive.sin(Yaw)).add(Reactive.sin(Pitch).mul(Reactive.sin(Roll)));
var hv_y = Reactive.cos(Roll).neg().mul(Reactive.sin(Pitch)).add(Reactive.cos(Pitch).mul(Reactive.sin(Yaw)).mul(Reactive.sin(Roll)));
var hv_z = Reactive.cos(Pitch).mul(Reactive.cos(Yaw));

var normal = Reactive.vector(hv_x, hv_y, hv_z);

Diagnostics.log(normal);
