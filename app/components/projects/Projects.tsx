import Image from 'next/image';
import './style.css';  

interface ProjProps {
  img: string;
  name: string;
  about: string;
  link: string;
}

const Projects: React.FC<ProjProps> = ({ img, name, about, link }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <Image src={img} alt={name} width={400} height={250} className="object-cover w-full h-full" />
      </div>
      <div className="mb-2">
        <h2 className="project-name">{name}</h2>
      </div>
      <div>
        <p className="project-description">{about}</p>
      </div>
      <div className="mt-4">
        <button className="project-button">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
            Visit
          </a>
        </button>
      </div>
    </div>
  );
};

export default Projects;
