import { IconsData } from '../data/IconsData';
import '../styles/Icons.css'

const Icons = () => {
  return (
    <div className='text-icons'>
      {IconsData.map((item) => {
        const { id, icon, title, description } = item; 
        return (
          <div key={id} className='icon-container'>
            <div className='icons'>{icon}</div>
           <div className='title-description'>
           <h4>{title}</h4>
            <p className='h-description'>{description}</p>
           </div> 
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
