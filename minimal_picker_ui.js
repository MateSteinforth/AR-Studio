// minimal Picker UI
const Scene = require('Scene');
const NUI = require('NativeUI');
const Textures = require('Textures');
const D = require('Diagnostics');
const Time = require('Time');

(async function () { 

  let iconsArray = [];
  iconsArray[0] = { image_texture: await Textures.findFirst('icon1') };
  iconsArray[1] = { image_texture: await Textures.findFirst('icon2') };
  iconsArray[2] = { image_texture: await Textures.findFirst('icon3') };

  NUI.picker.configure({ selectedIndex: 0, items: iconsArray });
  NUI.picker.visible = true;

  iconsArray[1] = { image_texture: await Textures.findFirst('icon5') };

  Time.setTimeout(function(){ 
    NUI.picker.configure({ selectedIndex: 2, items: iconsArray }); 
  }, 130);

})(); 
