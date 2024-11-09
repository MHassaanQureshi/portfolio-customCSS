import Image from 'next/image';
import './Skillsstyle.css';  

interface SkillProps {
  img: string;
  name: string;
  about: string;
}

const Skill: React.FC<SkillProps> = ({ img, name, about }) => {
  return (
    <div className="skill-cards">
      
      <div className="image-container">
        <Image 
          src={img} 
          alt={name} 
          width={50} 
          height={50} 
          priority 
        />
      </div>

      
      <div className="text-container">
        <h2>{name}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default Skill;
