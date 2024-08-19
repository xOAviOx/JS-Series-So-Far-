

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//1.1
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

//1.2
// const [, , thirdBook] = books;
// console.log(thirdBook);

//1.3
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// const [ [, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

/*
//2.1
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

//2.2
const { keywords: tags } = books[0];
console.log(tags);

//2.3

const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

//2.4

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

//2.5

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

//2.6

function printBookInfo({title, author, year = 'undefined'}) {
  console.log(`${title} by ${author}, ${year}`);
}
printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});
*/

/*
//3.1
const booksAuthors = [...books[0].author, ...books[1].author];
console.log(booksAuthors);

//3.2

function spellWord(str){
  console.log(...str);
}
console.log(spellWord('Javascript'));
*/

/*
//4.1
const [mainKeyword, ...rest] = books[0].keywords
console.log(mainKeyword,rest);

//4.2

const {publisher:bookpublisher, ...restOfthebook} = books[1]
console.log(bookpublisher,);

//4.3

function printBookAuthorsCount(title, ...authors){
  console.log(`The book ${title} has ${authors.length} authors`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
*/
/*
//5.1
function hasExamplesInJava(book){
  console.log(book.programmingLanguage === "Java"|| 'no data avaialable'); 
}

console.log( hasExamplesInJava(books[0]));

//5.2

for(let i = 0; i< books.length;i++){
  books[i].onlineContent && console.log(`${books[i].title} provides online content`);
}
  */

//6.1
// for(let i = 0; i< books.length;i++){
//   books[i].onlineContent ?? console.log(`${books[i].title} provides no data about its online content`);
// }

// //7.1
// for(let i = 0; i< books.length;i++){
//   books[i].edition ||= 1
// };
 
// //7.2

// for(let i = 0; i< books.length;i++){
//   books[i].thirdParty.goodreads.rating < 4.2 &&= books[i].highlighted
// };
/*
//Coding challenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

  /*
  //1.
  const [players1, players2] = game.players

  console.log(players1, players2);
 //2.
 const [gk , ...fieldPlayers] = players1
 console.log(gk,fieldPlayers);

//3.

const allplayers = [...players1, ...players2]
console.log(allplayers);

//4
const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic' ]
console.log(players1Final);

//5
const {odds:{team1:team1, x:draw, team2:team2}} = game
console.log(team1,draw,team2);

//6
function printGoals(...playerNum){
  
  console.log(`${playerNum.length} goals were scored`);
  
}
printGoals('Lewandowski', 'Gnarby','Lewandowski','Hummels');

//7

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 1 is more likely to win");
*/

/*
//8.1

let pageSum = 0;
for(let book of books){
  pageSum+=book.pages
}
console.log(pageSum);

//8.2

let allAuthors = [];
for(let book of books){
  if(typeof book.author === 'string'){
    allAuthors.push(book.author)
  }else{
    for (const author of book.author) {
      allAuthors.push(author);
  } 
  
}
}
console.log(allAuthors);

//8.3
for (let [i, auth] of allAuthors.entries()){
  console.log(`${i+1}: ${auth}`);
}
  */
/*
//9.1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1]
  
};
console.log(newBook);

//9.2
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
}
console.log(newBook2.pages); 
*/

/*
//10.1
function getFirstKeyword(book){
   return books.keywords?.[0]
}
console.log(getFirstKeyword(books[0]));
console.log(getFirstKeyword(newBook2)) // from previous tasks);
*/

//11.1
//   


//   const goalScored = Object.values(game.scored);
//   for(const [i,pl] of game.scored.entries()){
//     console.log(`Goal ${i+1}: ${pl}`);
//   }

//  for(const  [s, {a,b,c}] of game.odds.entries()){
    
//  }
/*
//11.1

const entries = [];
for(let key of Object.keys(books[0].thirdParty.goodreads)){
  entries.push([key])
}
console.log(entries);

//11.2

for (let [i,val] of Object.values(books[0].thirdParty.goodreads).entries()){
  entries[i].push(val)
}
console.log(entries);

//11.3

const entries2 = Object.entries(books[0].thirdParty.goodreads);

console.log(entries2);

//11.4
console.log(entries,entries2);

*/
/*
//Coding challenge number 2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

  /*
  // 1
  for(let [i,player] of game.scored.entries()){
    console.log(`Goal ${i + 1}: ${player}`);
  }

  // 2

  let avgOdd = 0
  count = 0
  for(let value of Object.values(game.odds)){
    avgOdd+= value
    count++ 
  }
  const sum = avgOdd/count
  console.log(sum);

  // 3
 
  for(let [key ,pl] of Object.entries(game.odds)){
    const team = key ==='x'?'draw': `victory ${game[key]}`
    console.log(`Odd of victory ${team} ${pl} `);    
  }*/
  
  
/*
// 12.1

const allKeywords = [];
for(let i = 0; i< books.length ; i++){
  allKeywords.push(...books[i].keywords)
}
console.log(allKeywords);

//12.2

const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

//12.3

uniqueKeywords.add('coding');
uniqueKeywords.add( 'science');

//12.4

uniqueKeywords.delete( 'business' );

const uniqueKeywordsArr = [...uniqueKeywords]
console.log(uniqueKeywordsArr);

uniqueKeywords.clear()
console.log(uniqueKeywords);
*/

/*
//13.1

const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
console.log(bookMap);

//13.2

bookMap.set('pages', 464)

//13.3

console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`)

//13.4

console.log(bookMap.size);

//13.5

if(bookMap.has('author')){
  console.log('The author of teh book is known');
}
*/;

//14.1

/*
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

//14.2
for(const [key, values] of firstBookMap){
  if(typeof values ==='number'){
    console.log(key);
  }
}
  */

//CODING CHALLENEGE 3
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);

  //1
  const events = [...new Set(gameEvents.values())];
  console.log(events);

  //2
  gameEvents.delete(64)
  console.log(gameEvents);
  
  //3
 let size = gameEvents.size
 console.log(`An event happened, on average, every ${90/size} minutes`)

 //4
 for(const [key, value] of gameEvents){
  if(key<45){
    console.log(`[FIRST HALF]${key}:${value}`);
  }
 }
*/
/*
//15.1
console.log(books[0].ISBN[6])
console.log(books[0].ISBN[4])
console.log(books[0].ISBN[9])
console.log(books[0].ISBN[8])

//15.2

const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';

console.log(quote.indexOf('chess'))

console.log(quote.slice(quote.lastIndexOf(' ')+1));

//15.3

function isContributor(Contributor){
  const c = Contributor.slice(Contributor.lastIndexOf(' ') + 1)
  if(c==="(Contributor)"){
    console.log(true);
  }else{
    console.log(false);
  }
}
isContributor('Julie Sussman (Contributor)');
*/
// //17.1
// const logBookcategories = function(str){
//   const newstr = str.split(';')
//   for(strs of newstr){
//     console.log(strs);
//   }
// }
// // console.log(logBookcategories('science;computing;computer science;algorithms;business;operating systems;networking;electronics'
// // ));

// //17.2

// function getKeywordsAsString(keywords){
//   const uniqueKeywords = [...new Set(keywords)].join(';')
//   console.log(uniqueKeywords);
// }
// getKeywordsAsString([
//   'computer science',
//   'programming',
//   'algorithms',
//   'data structures',
//   'java',
//   'math',
//   'software',
//   'engineering',
// ]);