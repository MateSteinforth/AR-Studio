//
// get the normal vector of an object
//
var Scene = require('Scene');
var Reactive = require('Reactive');
var Diagnostics = require('Diagnostics');

//
// eg get the normal of plane0
//
var plane = Scene.root.find('plane0'); 
plane.normal = getNormal(plane);
Diagnostics.watch("mynormal.x", plane.normal.x);
Diagnostics.watch("mynormal.y", plane.normal.y);
Diagnostics.watch("mynormal.z", plane.normal.z);


//
// How to convert Euler angles to directional vector?
// https://stackoverflow.com/questions/1568568/how-to-convert-euler-angles-to-directional-vector
//
// Rotation in Radians = 0 to pi (3.14)
// Pitch = Up/Down
// Yaw = left/right
// Roll = tilt head side/side
//
function getNormal(object) {
	var Pitch = object.transform.rotationX;
	var Yaw = object.transform.rotationY;
	var Roll = object.transform.rotationZ;
    
	var hv_x = Reactive.cos(Pitch).mul(Reactive.cos(Roll)).mul(Reactive.sin(Yaw)).add(Reactive.sin(Pitch).mul(Reactive.sin(Roll)));
	var hv_y = Reactive.cos(Roll).neg().mul(Reactive.sin(Pitch)).add(Reactive.cos(Pitch).mul(Reactive.sin(Yaw)).mul(Reactive.sin(Roll)));
	var hv_z = Reactive.cos(Pitch).mul(Reactive.cos(Yaw));

  return Reactive.vector(hv_x, hv_y, hv_z);
}
