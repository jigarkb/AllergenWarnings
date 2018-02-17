var my_function_script = '<script>' +
    'function myFunction() { ' +
    '   var popup = document.getElementById("myPopup"); ' +
    '   popup.classList.toggle("show");' +
    '}' +
    '</script>';

var exclamation_mark_png = chrome.extension.getURL('exclamation-mark.png');
var price_feature_div = $("#price_feature_div");

var inject_html = '<div id="my_popup" class="popup" onclick="myFunction()">' +
    '<img src="' + exclamation_mark_png + '">' +
    '<span class="popuptext" id="myPopup">Popup text...</span>' +
    '</div>';


var thumbnail_images = $('.a-list-item img');

thumbnail_images.each(function(i, obj) {
    var img_url = $(obj).attr('src');
    var re = /(.*)(\._S)/g;
    var match = re.exec(img_url);
    var full_size_img_url = match[1]+'.jpg';

    var random_int = Math.random() * Math.floor(2);
    if (random_int){
        price_feature_div.prepend(my_function_script+inject_html);
        return false;
    }

});
console.log();