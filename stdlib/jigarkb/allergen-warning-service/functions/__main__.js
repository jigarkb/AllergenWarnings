const ejs = require('ejs');
const templatePath = __dirname + '/../templates/index.ejs';

/**
* Allergen Warnings Landing Page
* @returns {buffer}
*/
module.exports = (context, callback) => {
    return ejs.renderFile(
        templatePath,
        {
            templateVar: 0
        },
        {},
        (err, response) => callback(err, new Buffer(response || ''), {'Content-Type': 'text/html'})
);

};
