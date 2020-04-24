//
// get the position of nullObject0 into patches V85 promises style
//

const Patches = require('Patches');
const Reactive = require('Reactive');
const Scene = require('Scene');

Promise.all([
	Scene.root.findFirst('nullObject0'),
   ]).then(function(results){
	const nullObject0 = results[0];
	Patches.inputs.setPoint("nullObject0_position", nullObject0.transform.position);
	// to get world position, thx https://rbkavin.in/
	// Patches.inputs.setPoint("nullObject0_worldPosition", nullObject0.worldTransform.position);
})

//
// short version
// Scene seems to be built in, it works without assigning it to a const...?
//
//const P = require('Patches');
//Promise.all([Scene.root.findFirst('nullObject0'),]).then(function(results){const nullObject0 = results[0];P.inputs.setPoint("nullObject0_position", nullObject0.transform.position);})
