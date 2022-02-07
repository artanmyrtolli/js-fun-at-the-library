// var fantasyShelfTitles = [];
// var fictionShelfTitles = [];
// var nonFictionShelfTitles = [];

function createLibrary (name, shelves) {

  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
  return library;
}

// function addBook (library, book) {
//   if (book.genre === 'fantasy') {
//     library.shelves.fantasy.push(book);
//     fantasyShelfTitles.push(book.title);
//
//   } else if (book.genre === 'fiction') {
//     library.shelves.fiction.push(book);
//     fictionShelfTitles.push(book.title);
//
//   } else if (book.genre === 'nonFiction'){
//     library.shelves.nonFiction.push(book);
//     nonFictionShelfTitles.push(book.title);
//   }
//   }long convoluted way

function addBook (library, book) {
  library.shelves[book.genre].push(book);
} //short elegant way




function checkoutBook (library, book, shelf) {
  for (var i = 0; i < library.shelves[shelf].length; i++) {
    if (book === library.shelves[shelf][i].title) {
        library.shelves[shelf].splice(i ,1);
        return `You have now checked out ${book} from the ${library.name}`
    }
} return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}
// function checkoutBook (library, book, genre) {
//
// var indexFantasy =  fantasyShelfTitles.indexOf(book);
// var indexFiction = fictionShelfTitles.indexOf(book) ;
// var indexNonFiction = nonFictionShelfTitles.indexOf(book);
//
//   if (genre === 'fantasy' && indexFantasy >= 0) {
//     library.shelves.fantasy.slice(indexFantasy, 1);
//     return `You have now checked out ${book} from the ${library.name}`;
//   } else if (genre === 'fiction' && indexFiction >=0) {
//     library.shelves.fiction.pop(book);
//     return `You have now checked out ${book} from the ${library.name}`;
//   } else if (genre === 'nonFiction' && indexNonFiction >=0){
//     library.shelves.nonFiction.pop(book);
//     return `You have now checked out ${book} from the ${library.name}`;
//   } else {
//     return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
//   }
// } long convoluted way



module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
