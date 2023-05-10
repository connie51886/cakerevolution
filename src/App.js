import './App.css';
import React, { useState } from 'react';

import { isMobile } from 'react-device-detect';
import MobileComponent from './MobileComponent';

function App() {
  const items = [
    { name: 'cupcake1', category: 'cupcake',  img: './images/cupcake2.png' },
    { name: 'cheesecake1', category: 'cheesecake', img: './images/cheesecake2.png'},
    { name: 'birthdaycake1', category: 'birthday cake', img: './images/birthday2.png'},
    { name: 'Hungry', category: 'none', img: './images/hungry2.png'},
  ];

  const [menuItems, setMenuItems] = useState(
    items.filter(item => item.category === 'none')
  );
  
  const [category, setCategory] = useState('none');

  function filterItems(category) {
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
    setCategory(category);
  }

  const DesktopComponent = () => {
    return (
      <div>

        <div class="marquee-container" >
            <span class="marquee-text" >
             <a href="https://www.youtube.com/watch?v=9Et-chfMdXA&ab_channel=BingeSociety" target="blank"> Qu'ils mangent de la brioche ⚜️ </a>
             <a href="https://www.youtube.com/watch?v=9Et-chfMdXA&ab_channel=BingeSociety" target="blank"> Qu'ils mangent de la brioche ⚜️ </a>
             <a href="https://www.youtube.com/watch?v=9Et-chfMdXA&ab_channel=BingeSociety" target="blank"> Qu'ils mangent de la brioche ⚜️ </a>
             <a href="https://www.youtube.com/watch?v=9Et-chfMdXA&ab_channel=BingeSociety" target="blank"> Qu'ils mangent de la brioche ⚜️ </a>
             <a href="https://www.youtube.com/watch?v=9Et-chfMdXA&ab_channel=BingeSociety" target="blank"> Qu'ils mangent de la brioche ⚜️ </a>
             <a href="https://www.youtube.com/watch?v=9Et-chfMdXA&ab_channel=BingeSociety" target="blank"> Qu'ils mangent de la brioche ⚜️ </a>
            </span>
        </div>
      

      <section class="mainContent">
        <section class="chooseHere">
            <h1>"Let them eat cake!"</h1>

        <button class="border-button" onClick={() => filterItems('cupcake')}>I want cupcake</button>
        <button class="border-button" onClick={() => filterItems('cheesecake')}>I want cheesecake</button>
        <button class="border-button" onClick={() => filterItems('birthday cake')}>I want birthday cake</button>
        </section>
      
        <ul>
          {menuItems.map((item, index) => (
          <img key={index} src={item.img} alt={item.name}/>
          ))}
        </ul>
      </section>


      </div>
    );
  };


let componentToRender;

if (isMobile) {
  componentToRender = <MobileComponent />;
} else {
  componentToRender = <DesktopComponent />;
}


  return (
    <div>
       {componentToRender}

    </div>
  );
}


export default App;
