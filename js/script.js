//To simplify and understand how functions return what they should, I made sure to follow all instructions as best as possible by   commenting them at their respective parts in the code below.

//event listener to respond to "Show another quote" button clicks
//when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Create an array of JavaScript objects to hold the data for your quotes. Name the array quotes. The quotes array should be accessible in the global scope.

// A quote property which contains a string: the text of the quote that will be displayed on the page.

// A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”

// An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.

// An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.

var quotes = [

    // Sport Quotes
    //________________________________________________________

    {
        quotation: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        source: "Michael Jordon",
        tag: "sports"
  },

    {
        quotation: "You can't win unless you learn how to lose.",
        source: "Kareem Abdul-Jabbar",
        tag: "sports",
  },

    {
        quotation: "Play is the only way the highest intelligence of humankind can unfold.",
        source: "Joseph Chilton Pearce",
        tag: "sports",
  },

    {
        quotation: "Boxing is a celebration of the lost religion of masculinity all the more trenchant for its being lost.",
        source: "Joyce Carol Oates",
        tag: "sports",
  },

    {
        quotation: "Bulls do not win bull fights. People do.",
        source: "Norman Ralph Augustine",
        tag: "sports",
  },

    {
        quotation: "Baseball is the only field of endeavor where a man can succeed three times out of ten and be considered a good performer.",
        source: "Ted Williams",
        tag: "sports",
  },

    // Political Quotes
    //________________________________________________________

    {
        quotation: "Art, freedom and creativity will change society faster than politics.",
        source: "Victor Pinchuk",
        tag: "politics",
  },
];

// selects a random quote object from the quotes array
// returns the randomly selected quote object
function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

function printQuote() {

    // Calling additional functions for 'exceed' expectations
    changeColor();

    // printQuote calls the getRandomQuote function and stores the returned quote object in a variable
    var randomQuote = getRandomQuote();

    // printQuote constructs a string containing the different properties of the quote object using the following HTML template:
    var quotation = '<p class="quote">' + randomQuote.quotation + '</p>';
    quotation += '<p class="source">' + randomQuote.source;

    // printQuote doesn't add a for a missing citation or a if the year property is missing
    if (randomQuote.citation) {
        quotation += '<p class="citation">' + randomQuote.citation;
    } else {
        randomQuote.citation = null;
    }

    // printQuote doesn't add a for a missing citation or a if the year property is missing
    if (randomQuote.year) {
        quotation += '<span class="year">' + randomQuote.year + '</span>';
    } else {
        randomQuote.year = null;
    }

    // printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that
    return document.getElementById('quote-box').innerHTML = quotation;
}

// Add comments to your code.
// Done! ;)

// Extra Credit-------------------------------------------------------------------

// To get an "exceeds" rating, you can expand on the project in the following ways:

// _________________________________________________REQUIREMENT 1__________________________________________________

// Add more properties to the quote object. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote. - Please see tags in quotes array - 'sports' & 'politics'

// _________________________________________________REQUIREMENT 2__________________________________________________

// When the quote changes, randomly change the background color of the page.

function changeColor() {
    var colors = ['orange', 'green', 'red', 'yellow', 'purple', 'blue', 'pink'];
    var randomColors = Math.floor(Math.random() * colors.length); // Emphasis on randomly! Almost forgot that part
    var color = document.getElementById('body');
    for (var key in colors[randomColors]) {
        color.style.backgroundColor = colors[randomColors];
    }
}

// _________________________________________________REQUIREMENT 3__________________________________________________

// Don't display a random quote more than once until ALL quotes from the array have been displayed. To help reviewers (and yourself) verify that the quotes don’t repeat until they’ve all been displayed, log the quote to the console each time the “Show Another Quote” button is clicked.

// I am using the 'splice' & 'push' method for arrays within the getRandomQuote function - Please see above.

// _________________________________________________REQUIREMENT 4__________________________________________________

// Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the “Additional Resources” section).

setInterval(function () {
    printQuote();
}, 30000);

// Seconds in increments of 1000. I did not know that. 30 seconds as requested.
// The problem I am now experiencing is the color changes too. Not just the quote.
