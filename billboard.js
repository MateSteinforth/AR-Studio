//
// billboard.js
//

const Reactive = require('Reactive');
const DeviceMotion = require('DeviceMotion');
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Time = require('Time');

const fd = Scene.root.child('Device').child('Camera').child('Focal Distance');

// EXAMPLE: Bind a scene object's transform properties to the face's.
var boundPlane = Scene.root.find('plane0');

function bindPlaneToFace() {
	var face = FaceTracking.face(0);
	boundPlane.transform.x = face.cameraTransform.x.neg();
	boundPlane.transform.y = face.cameraTransform.y;
}

// These calls are needed because if the effect starts with a face
// in the scene, the monitor() call below will not fire an event
// until the face count changes.
bindPlaneToFace();