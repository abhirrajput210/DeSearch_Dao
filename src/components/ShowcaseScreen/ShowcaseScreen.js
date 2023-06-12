// import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import CardDetailsScreen from './CardDetailsScreen';
// import "../../styles/showcaseScreen/ShowcaseScreen.css";
// import abc from "../../Assets/sicentist using 1_1686046712622.png";
// import logo from "../../Assets/Logo.png";

// function ShowcaseScreen() {
//   const cardData = [
//     {
//       id: 1,
//       title: 'Card Title 1',
//       img: abc,
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//     },
//     {
//       id: 2,
//       title: 'Card Title 2',
//       img: logo,
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//     },
//     {
//       id: 3,
//       title: 'Card Title 3',
//       img: logo,
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry..',
//     },
//     {
//       id: 4,
//       title: 'Card Title 4',
//       img: abc,
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//     },
//   ];

//   return (
//     <div>
//       <div className='title-container'>
//         <h2 className='title'>Research Forum</h2>
//       </div>
//       <div className='main'>
//         {cardData.map((card) => (
//           <div className='card-container' key={card.id}>
//             <div className='image-container'>
//               <img src={card.img} alt='img' style={{ width: '100%', height: '380px', objectFit: 'contain' }} />
//             </div>
//             <div className='card-content'>
//               <div className='card-title'>
//                 <h3>{card.title}</h3>
//               </div>
//               <div className='card-body'>
//                 <p>{card.description}</p>
//               </div>
//             </div>
//             <div className='card-btn pb-3 rounded-pill'>
//               <Link to={`/details/${card.id}`} className='rounded-pill px-3'>
//                 View More
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Route configuration for displaying research details */}
//       <Routes>
//         <Route path="/details/:id" element={<CardDetailsScreen cardData={cardData} />} />
//       </Routes>
//     </div>
//   );
// }

// export default ShowcaseScreen;



import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import CardDetailsScreen from './CardDetailsScreen';
import "../../styles/showcaseScreen/ShowcaseScreen.css";
import abc from "../../Assets/sicentist using 1_1686046712622.png";
import logo from "../../Assets/Logo.png";

function ShowcaseScreen() {
  const cardData = [
    {
      id: 1,
      title: 'Card Title 1',
      img: abc,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      title: 'Card Title 2',
      img: logo,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'Card Title 3',
      img: logo,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry..',
    },
    {
      id: 4,
      title: 'Card Title 4',
      img: abc,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return (
    <div>
      <div className='title-container'>
        <h2 className='title'>Research Forum</h2>
      </div>
      <div className='main'>
        {cardData.map((card) => (
          <div className='card-container' key={card.id}>
            <div className='image-container'>
              <img src={card.img} alt='img' style={{ width: '100%', height: '380px', objectFit: 'contain' }} />
            </div>
            <div className='card-content'>
              <div className='card-title'>
                <h3>{card.title}</h3>
              </div>
              <div className='card-body'>
                <p>{card.description}</p>
              </div>
            </div>
            <div className='card-btn pb-3 rounded-pill'>
              <Link to={`/details/${card.id}`} className='rounded-pill px-3'>
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Route configuration for displaying research details */}
      <Routes>
        <Route path="/details/:id" element={<CardDetailsScreen cardData={cardData} />} />
      </Routes>
    </div>
  );
}

export default ShowcaseScreen;
