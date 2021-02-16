# Contibuting

To add content, there are just 2 files to update, `public/topics.js` and `public/responses.js`. Each topic and response must have a unique ID, which is used as the key in the `topics` or `responses` object
## Topics
Each topic must have 3 properties:
- title
- details
- responses: an array of response ids (from `responses.js`)

## Responses
Each response must have 2 properties:
- body: The text to show in the response box
- rebuttal: the topic id that you want to link to as a rebuttal (from `topics.js`)

## Styling
If you want to change the style, you can add custom css to `public/style.css`. This project also uses Bootstrap 4, so you can use those classes to style things (it currently uses bootstrap cards for the responses).
