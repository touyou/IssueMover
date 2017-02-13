$(document).ready( function() {
    var parent = $('.gh-header-actions').parent();
    var url = window.location.href;
    var content = url.split("/").slice(3);
    var num = Number(content[content.length - 1]);
    var pNum = num - 1;
    var nNum = num + 1;
    var prevUrl = "https://github.com/" + content[0] + "/" + content[1] + "/issues/" + pNum.toString();
    var nextUrl = "https://github.com/" + content[0] + "/" + content[1] + "/issues/" + nNum.toString();
    console.log(prevUrl);
    console.log(nextUrl);
    parent.append($(`<a href="${prevUrl}">←</a>`));
    parent.append($(`<a href="${nextUrl}">→</a>`));
});
