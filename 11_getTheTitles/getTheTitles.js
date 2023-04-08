const getTheTitles = function (books) {
    const getBook = books.map(book => book.title) // the map() method is the hero here as it iterates through arrays 
    return getBook
};

// Do not edit below this line
module.exports = getTheTitles;
