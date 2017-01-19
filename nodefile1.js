var fs = require("fs");
var path = require("path");
var util = require("util");

var format = "YYYYMMMDD";

var initial = "/Users/matthewwilson/Documents/ameliaiphonepix20161222/"

fs.readdir(initial, function( err, files) {
    if(err) {
        console.error("Could not read files", err);
        process.exit(1);
    }

    files.forEach( function(file,index){
        //are the tags the same for each image type?
        if (path.extname(file.toLowerCase()) == ".jpg" || path.extname(file.toLowerCase()) == ".png") {
        console.log(file);
        var stats = fs.statSync(initial + file.toString());
        var mtime = new Date(util.inspect(stats.mtime));
        var formattedDate =mtime.getFullYear() + ("0"+(mtime.getMonth()+1)).slice(-2) + ("0" + mtime.getDate()).slice(-2);

        //console.log(mtime);
        console.log(formattedDate);

        //next steps
        //check for folder existence
        //copy file from one folder to backup folder
        //add folder to copied collection
        //in the end, loop through the copied collection and verify existence before deleting
        
      }
    })
})
