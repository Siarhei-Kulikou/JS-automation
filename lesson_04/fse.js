const fse = require('fs-extra')


fse.mkdirpSync('./newDir');
fse.ensureFileSync('./newDir/newFile.txt');
fse.mkdirpSync('./newDirOne');
fse.moveSync('./newDir/newFile.txt', './newDirOne/newFile.txt');
fse.mkdirpSync('./newDirTwo');
fse.copyFileSync('./newDirOne/newFile.txt', './newDirTwo/newFile.txt');
fse.emptyDirSync('./newDirOne');
fse.emptyDirSync('./newDirTwo');
fse.removeSync('./newDir');
fse.removeSync('./newDirOne');
fse.removeSync('./newDirTwo');
