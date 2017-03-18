var fs = require("fs");
var path = require("path");
var util = require("util");

var format = "YYYYMMMDD";

var initial = "/Users/matthewwilson/Documents/ameliaiphonepix20161222/"
var targetRoot = "/Users/matthewwilson/Documents/photos/"

var copiedFiles = [];

fs.readdir(initial, function( err, files) {
    if(err) {
        console.error("Could not read files", err);
        process.exit(1);
    }

    files.forEach( function(file,index){
        //are the tags the same for each image type?
        if (path.extname(file.toLowerCase()) == ".jpg" || path.extname(file.toLowerCase()) == ".png" || path.extname(file.toLowerCase()) == ".mov") {
        console.log(file);
        var stats = fs.statSync(initial + file.toString());
        var mtime = new Date(util.inspect(stats.mtime));
        var formattedDate =mtime.getFullYear() + ("0"+(mtime.getMonth()+1)).slice(-2) + ("0" + mtime.getDate()).slice(-2);

        //console.log(mtime);
        //console.log(formattedDate);

        //next steps
        //check for folder existence
        if (!fs.existsSync(targetRoot + formattedDate)){
          fs.mkdirSync(targetRoot + formattedDate);
        }

        //copy file from one folder to backup folder
        newFileName = path.join(targetRoot + formattedDate + '/' + path.basename(file));
        //this isn't working, files are being copied as zero bytes
        fs.createReadStream(file).pipe(fs.createWriteStream(newFileName));
        console.log(newFileName);
        //add file to copied collection
        //copiedFiles.add(newFileName);
        //in the end, loop through the copied collection and verify existence before deleting

      }
    })
})
