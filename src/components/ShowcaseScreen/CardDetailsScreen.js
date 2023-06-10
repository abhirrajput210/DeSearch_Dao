// import React from 'react';
// // import { useParams } from 'react-router-dom';
// function CardDetailsScreen({ match, cardData }) {
//     const researchId = parseInt(match.params.id);
//     const research = cardData.find((card) => card.id === researchId);  
//   return (
//     <div>
//       <h2>{research.title}</h2>
//       <img src={research.img} alt='img' style={{ width: '100%', height: '380px', objectFit: 'contain' }} />
//       <p>{research.description}</p>
//     </div>
//   );
// }
// export default CardDetailsScreen;


import React from 'react';

function CardDetailsScreen({ match, cardData }) {
  const researchId = parseInt(match.params.id);
  const research = cardData.find((card) => card.id === researchId);

  return (
    <div>
      <h2>{research.title}</h2>
      <img src={research.img} alt='img' style={{ width: '100%', height: '380px', objectFit: 'contain' }} />
      <p>{research.description}</p>
    </div>
  );
}

export default CardDetailsScreen;
