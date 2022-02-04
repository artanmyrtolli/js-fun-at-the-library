
var fantasyShelfTitles = [];
var fictionShelfTitles = [];
var nonFictionShelfTitles = [];

function createLibrary (name, shelves) {
  var fantasy = [];
  var fiction = [];
  var nonFiction = [];

  var library = {
    name: name,
    shelves: {
      fantasy: fantasy,
      fiction: fiction,
      nonFiction: nonFiction
    },
  }
  return library;
}

function addBook (library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book);
    fantasyShelfTitles.push(book.title);

  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book);
    fictionShelfTitles.push(book.title);

  } else if (book.genre === 'nonFiction'){
    library.shelves.nonFiction.push(book);
    nonFictionShelfTitles.push(book.title);
  }
  }


function checkoutBook (library, book, genre) {
//argument book is string, so first needed to go back to addBook() and
//get the titles of the books put on the shelf and put into a seperate
//variable, declared at the top. The below variables look through those
//titles to check if book is there.

var indexFantasy =  fantasyShelfTitles.indexOf(book);
var indexFiction = fictionShelfTitles.indexOf(book) ;
var indexNonFiction = nonFictionShelfTitles.indexOf(book);

  if (genre === 'fantasy' && indexFantasy >= 0) {
    library.shelves.fantasy.slice(indexFantasy, 1);
    return `You have now checked out ${book} from the ${library.name}`;
  } else if (genre === 'fiction' && indexFiction >=0) {
    library.shelves.fiction.pop(book);
    return `You have now checked out ${book} from the ${library.name}`;
  } else if (genre === 'nonFiction' && indexNonFiction >=0){
    library.shelves.nonFiction.pop(book);
    return `You have now checked out ${book} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
