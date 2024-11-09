import Image from "next/image";
import "./style.css"; 

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="heading">About Me</h1>
        <div className="about-sections">
          <div className="image-container">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              className="profile-image"
              width={300}
              height={300}
            />
          </div>
          <div className="about-text">
            <p>
              I’m a dedicated learner, passionate about acquiring new skills and
              exploring modern technologies. I recently started my journey into
              front-end development and am eager to create user-friendly
              websites. My goal is to become a Full Stack Developer, and I’m
              currently seeking opportunities to grow and improve my front-end
              development skills.
            </p>
            <div className="info-section">
              <ul className="info-list">
                <li>Email: hassaanharoon03@gmail.com</li>
                <li>Location: Karachi, Pakistan</li>
                <li>Age: 21</li>
              </ul>
              <ul className="info-list">
                <li>Nationality: Pakistan</li>
                <li>Education: Federal Urdu University, Karachi</li>
                <li>Degree: Bachelors in Computer Science</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
