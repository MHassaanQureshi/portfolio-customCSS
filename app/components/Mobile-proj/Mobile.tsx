import Image from 'next/image';
import './mobilestyle.css'; 

interface mobileProps {
  img: string;
  name: string;
  about: string;
  link: string;
}

const Mobile: React.FC<mobileProps> = ({ img, name, about, link }) => {
  return (
    <div className="mobile-card">
      
      <div className="image-section">
        <Image 
          src={img} 
          alt={name} 
          width={400} 
          height={250} 
        />
      </div>

      
      <div className="text-section">
        <h2>{name}</h2>
        <p>{about}</p>
        <div className="button-container">
          <button className="button">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
