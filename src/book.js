
function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns){
    var character = {
      name: name,
      age: age,
      pronouns: pronouns
    };
    return character;
};




function saveReview(newReview, reviews) {
  //new review is guaranteed to be unique since reviews array is empty
  if (reviews.length === 0){
    reviews.push(newReview)
    return reviews;
  }
  for (var i = 0; i < (reviews.length); i++) {
    //early out if match is found
    if (reviews[i] === newReview)
      return reviews;
    }
    //if no match found, safe to push. This method checks the entire array first then says ok its safe to push
    reviews.push(newReview);
};

function calculatePageCount (title) {
    var pageCount = title.length * 20;
    return pageCount;
};

function writeBook (title, mainCharacter, genre){
    var book = {
      title: title,
      mainCharacter: mainCharacter,
      pageCount: calculatePageCount(title),
      genre: genre
    }
    return book;
};


function editBook (book){

book.pageCount = book.pageCount * .75;
return book;

}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
