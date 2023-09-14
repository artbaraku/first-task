import { CardsData } from '../data/CardsData';
import '../styles/Cards.css';


const Cards = () => { 
  return (
    <div className='card-container'>
     {CardsData.map((item) => {
      const { id, date, buttonColor, buttonText, image, name, description, buttonText2} = item;
      return (
       <div key={id} className='block'>
          <p className='dt'>{date}</p>
        
          <div className="name-photo">
          <button style={{backgroundColor: buttonColor}} className='btn-1'>{buttonText}</button>
            <img className='image' src={image}/>
            <p className='name-kevin'>{name}</p>
          </div>
          
          <p className='description'>{description}</p>

          <button className='btn-2'>{buttonText2}</button>
        
        
       </div> 
        );
     })}
    </div> 
  );
};
 
export default Cards;

