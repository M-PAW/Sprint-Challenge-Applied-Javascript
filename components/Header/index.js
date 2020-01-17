// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const entryPoint2 = document.querySelector('.header-container');

function Header() {

    // createElement
    const header = document.createElement('div'),
          date = document.createElement('span'),
          h1 = document.createElement('h1'),
          temp = document.createElement('span');

    // classList
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // textContent
    date.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98°';

    header.append(date);
    header.append(h1);
    header.append(temp);

    return header;

}

entryPoint2.append(Header());
