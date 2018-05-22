//
// change color programatically
// from the forum https://www.facebook.com/groups/289750598103656/permalink/389601898118525/?comment_id=389736974771684&reply_comment_id=400354447043270&comment_tracking=%7B%22tn%22%3A%22R1%22%7D
// by Sergey Anpilov https://www.facebook.com/anpilov?fref=gs&dti=289750598103656&hc_location=group_dialog
// 
// defaultMaterial0 is a standard material
// defaultMaterial1 is a Blended Material
//

var Materials = require('Materials');
var Reactive = require('Reactive');
var Animation = require('Animation');

var driver = Animation.timeDriver({durationMilliseconds: 2000});
var sampler = Animation.samplers.linear(0, 1);
var hue = Animation.animate(driver, sampler);
var color = Reactive.HSVA(hue, 1, 1, 1);
var colorTexture = Materials.get('defaultMaterial1').diffuse;
Materials.get('defaultMaterial0').diffuse = colorTexture;
colorTexture.color = color;
driver.start();
