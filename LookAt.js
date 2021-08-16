/**
 * easy look At
 */

const Scene = require('Scene');

(async function () {  
  const parent = await Scene.root.findFirst("parent"); // The parent object of the object you want to rotate
  const target = await Scene.root.findFirst("target"); // The object in the scene you want to face
  const plane = await Scene.root.findFirst("plane0"); //The object that you want to rotate towards the target
  plane.transform.rotation = parent.transform.lookAt(target.transform.position).rotation;
})();
