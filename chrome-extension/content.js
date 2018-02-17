var my_function_script = '<script>' +
    'function myFunction() { ' +
    '   var popup = document.getElementById("myPopup"); ' +
    '   popup.classList.toggle("show");' +
    '}' +
    // '$(\'div#my_popup\').bind(\'click\', function (event) {\n' +
    // '    $(\'#popup\').css(\'left\',event.pageX);      // <<< use pageX and pageY\n' +
    // '    $(\'#popup\').css(\'top\',event.pageY);\n' +
    // '    $(\'#popup\').css(\'display\',\'inline\');     \n' +
    // '    $("#popup").css("position", "absolute");  // <<< also make it absolute!\n' +
    // '    });'+
    '</script>';

var exclamation_mark_png = chrome.extension.getURL('exclamation-mark.png');
var price_feature_div = $('#price_feature_div');

var inject_html = '<div style="width: 7%" id="my_popup" class="popup" onclick="myFunction()">' +
    '<img width="100%" src="' + exclamation_mark_png + '">' +
    '<span class="popuptext" id="myPopup">...</span>' +
    '</div>';


var thumbnail_images = $('.a-list-item img');
var image_urls = [];
thumbnail_images.each(function(i, obj) {
    var img_url = $(obj).attr('src');
    var re = /(.*)(\._S)/g;
    var match = re.exec(img_url);
    if(match){
        var full_size_img_url = match[1]+'.jpg';
        image_urls.push(full_size_img_url);
    }
});

console.log(image_urls);

if(image_urls.length > 0){
    $.ajax({
        url: "http://localhost:8170/jigarkb/allergen-warning-service/",
        data: {"image_urls": JSON.stringify(image_urls)},
        success: function(result){
            price_feature_div.append(inject_html+my_function_script);
            var popup_html = "It's highly likely that this product contains these allergens: ";
            for (var key in result) {
                popup_html += key + ", ";
            }
            $("#myPopup").html(popup_html);

        }});
}
