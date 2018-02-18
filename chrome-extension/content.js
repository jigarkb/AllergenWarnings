var exclamation_mark_png = chrome.extension.getURL('exclamation-mark.png');
var checked_mark_png = chrome.extension.getURL('checked-mark.png');

var price_feature_div = $('#price_feature_div');

var inject_html = '<a id="my_popup" href="#" data-toggle="popover" data-trigger="hover"  title="Allergens Warning" data-html="true" ' +
    'data-content="<p style=\'color: green\'>This product is probably safe from allergens. See label!</p>">' +
    '<img id="warning_img" width="7%" src="'+ checked_mark_png +'">' +
    '</a>';

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

if(image_urls.length > 0){
    $.ajax({
        url: "http://localhost:8170/jigarkb/allergen-warning-service/",
        data: {"image_urls": JSON.stringify(image_urls)},
        success: function(result){
            var some_key = false;
            var popup_html = "It's likely that this product contains these allergens: ";
            for (var key in result) {
                some_key = true;
                popup_html += key + ", ";
            }
            popup_html = popup_html.replace(/,\s*$/, "");
            price_feature_div.append(inject_html);
            if(some_key){
                $("#my_popup").attr('data-content', "<p style='color: red'>"+popup_html+"</p>").html(
                    '<img id="warning_img" width="7%" src="'+ exclamation_mark_png +'">'
                );
            }
            $('[data-toggle="popover"]').popover();
        }});
}
