# Allergen Warnings
A chrome extension which works seamlessly on major grocery shopping site to display food warnings prominently.

## Inspiration
Eight major food allergens – milk, egg, peanut, tree nuts, wheat, soy, fish and crustacean shellfish – are responsible for most of the serious food allergy reactions in the United States. How serious? Let's take a look! 
 - 15,000,000+ Americans have food allergies
 - 1 in 13 Children suffers
 - 30 % Children allergic to more than one food
 - 50 % Increased prevalance between 1997 and 2011
 - 200,000 people require emergency medical care for allergic reactions to food every year

Is there a Cure? No. Food allergies are managed by avoiding the problem food(s) and learning to recognize and treat reactions symptoms. To help Americans avoid the health risks posed by food allergens, FDA enforces the Food Allergen Labeling and Consumer Protection Act of 2004 (the Act). The Act applies to the labeling of foods regulated by FDA which includes all foods except poultry, most meats, certain egg products, and most alcoholic beverages which are regulated by other Federal agencies.

What's the challenge? Online grocery shopping is gaining traction but most grocery sites don't explicitly specify allergen warnings. Making life harder for buyer to search for allergen warnings in product images.

## What it does
This chrome extension runs on major grocery shopping site like Amazon Prime Now and detects product page and scans all images for text to figure out warnings and allergen contents in a product. It presents a "warning" label or "safe" label according to the product specification.

## How I built it
Chrome extension detects supported site, scrape for product images on product page using javascript and sends link to "stdlib" function and return appropriate results. Stdlib function uses Google's Vision API to detect text in each image and match it against allergen database to find potential allergen warnings. Finally, the extension shows a prominent marking on product page for users ti see.

## Challenges I ran into
I have been making web applications for long time but this was my first time developing chrome extension, serverless function on stdlib, google's vision api and node.js. I ran into challenges in all three areas. 

Technically speaking, parsing html for images was easy task but all images except first image on product page shown were low resolution. I had to figure out high resolution images urls for those to send it to backend.

## Accomplishments that I'm proud of
This was my first time developing chrome extension, using serverless function on stdlib, google's vision api and node.js. I am proud I made a full working project which is now available on chrome webstore!

## What I learned
Creating microservices using serverless architecture is amazing and very useful for small independent application like this.

## What's next for Allergen Warnings
Supporting more sites apart from amazon prime now.
