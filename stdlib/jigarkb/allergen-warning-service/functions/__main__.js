const lib = require('lib')({
    token: 'WMCBib06nneqetWLtPA05NyyVpl2r1vcJOiEeZMYOPGKM3CfrMNLvbhzwxjQ0vhu'
});

const async = require('async');

const vision = require('@google-cloud/vision');

var visionClient = new vision.ImageAnnotatorClient({
    keyFilename: 'allergen-warning-service-4cd47f0a6207.json',
    projectId: 'allergen-warning-service'
});

/**
* Allergen detection function
* @param {array} image_urls
* @returns {any}
*/
module.exports = (image_urls = [], context, callback) => {
    var allergens = ['milk', 'eggs', 'fish', 'crustacean shellfish', 'tree nuts', 'peanuts', 'wheat', 'soybeans', 'soy', 'shell'];
    var i = 0, j = 0;

    let fns = image_urls.map((image_url) => {
        return (cb) => {
            visionClient.textDetection(image_url, function(err, text, apiResponse) {
                if (err) {
                    return cb(err);
                }
                var found_text = text["fullTextAnnotation"]["text"].toLowerCase();
                cb(null, found_text);

            });
        };
    });



    async.parallel(fns, (err, results) => {

        if (err) {
            return callback(err);
        }

        var containing_allergens = {};
        for (var i=0; i < results.length; i++){
            for(var j=0; j < allergens.length; j++){
                if(results[i].indexOf(allergens[j]) > -1){
                    containing_allergens[allergens[j]] = true;
                }
            }
        }


        return callback(null, containing_allergens);
    });

};
