#target photoshop

main();

function main(){

if(!documents.length) return;

try{

    var Path = decodeURI(activeDocument.path);

    }catch(e){alert(e); return;}   //Let the user know about the problem

if(!Folder(Path).exists){

    alert(Path + " Does not exist!");

    return;

    }

var Name = decodeURI(app.activeDocument.name).replace(/\.[^\.]+$/, '');

var saveFile = File(Path + "/" + Name + ".png");

sfwPNG24(saveFile);

//Uncomment the line below if you want to close the document.

//app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

}

function sfwPNG24(saveFile){

var pngOpts = new PNGSaveOptions;

pngOpts.compression = 9;

pngOpts.interlaced = false;

activeDocument.saveAs(saveFile, pngOpts, true, Extension.LOWERCASE);

}