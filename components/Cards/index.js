// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    console.log(response);
    // response.forEach(value => { 
    //     entryPoint1.append(createArticle(value))
    // });
    Object.values(response.data.articles).forEach(item => {
        item.forEach(value => {
            entryPoint1.append(createArticle(value))
        })
    })
        //   
})
.catch(err => {
    console.log('cards/index.js has an error. ',err);
});


const entryPoint1 = document.querySelector('.cards-container');

function createArticle(artObj){

    console.log("Function", artObj)

    // createElement
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          img = document.createElement('img'),
          span = document.createElement('span');

    // classList
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // Append
    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    author.append(span);
    imgContainer.append(img);

    // textContent
    console.log('textContent: ', artObj)
    headline.textContent = artObj.headline;
    img.src = artObj.authorPhoto;
    span.textContent = artObj.authorName;
    console.log('End Function')



    return card;

}