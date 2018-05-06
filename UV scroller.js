//
// UV Scroller > R36
//

var Scene = require('Scene');
var Materials = require('Materials');
var Animation = require('Animation');

var UVDriver = Animation.timeDriver({durationMilliseconds: 1500, loopCount: Infinity});
var UVSampler = Animation.samplers.linear(0, 1);

var mymat = Materials.get("defaultMaterial0");

mymat.diffuseTextureTransform.offsetV = Animation.animate(UVDriver, UVSampler);
UVDriver.start();
