//
// debug something with default 2D text
//
const Patches = require('Patches');
const Reactive = require('Reactive');
const Scene = require('Scene');

Promise.all([
    Scene.root.findFirst('2dText0'),
    Patches.outputs.getScalar('myString'),
]).then(function (results) {
    results[0].text = results[1].toString();
})
