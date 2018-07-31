//
// get a bunch of objects in an array
// 

var Scene = require('Scene');

var myobjects = [];
for(var i = 0; i < 3; i++) {
	myobjects.push(Scene.root.find('nullObject'+i));
}