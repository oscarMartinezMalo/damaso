$(document).ready(function () {
    loadImages();
    readMultipleFiles();
});

function loadImages() {
    var dir = "icons/";
    var fileextension = ".png";

    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //Lsit all png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var filename = this.href.replace(window.location.host, "").replace("http:///", "");
                $("body").append($("<img src=" + dir + filename + "></img>"));
            });
        }
    });
}

function readMultipleFiles(evt) {
    //Retrieve all the files from the FileList object
    var files = evt.target.files;

    if (files) {
        for (var i = 0, f; f = files[i]; i++) {
            var r = new FileReader();
            r.onload = (function (f) {
                return function (e) {
                    var contents = e.target.result;
                    alert("Got the file.n"
                          + "name: " + f.name + "n"
                          + "type: " + f.type + "n"
                          + "size: " + f.size + " bytesn"
                          + "starts with: " + contents.substr(1, contents.indexOf("n"))
                    );
                };
            })(f);

            r.readAsText(f);
        }
    } else {
        alert("Failed to load files");
    }
}