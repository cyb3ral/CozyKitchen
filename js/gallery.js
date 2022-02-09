$(document).ready(function () {
    var imgCount = 6
    var fileExt = ".jpg";
    var teamcardparent = $('.team-card').first().parent().parent()

    $('.team-card').remove();
    for (let step = 0; step < imgCount; step++) {
        $(teamcardparent).append(CreateImage('./img/Gallery/' + step + fileExt))
    }

    function CreateImage(src) {
        var md = $(document.createElement('div')).addClass('col-md-4')
        var teamcard = $(document.createElement('div')).addClass('team-card mb-5')
        var img = $(document.createElement('img')).addClass('img-fluid').addClass('galleryimg').attr('src', src)

        $(teamcard).append(img)
        $(md).append(teamcard)

        return md

    }

});