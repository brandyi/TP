import PersonCard from '../components/PersonCard';
import './AboutUs.css';

const AboutUs = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const teamMembers = [
    {
      name: "Tomáš Pavúk",
      description: "",
      photo: "https://via.placeholder.com/150/00d4ff/ffffff?text=TP"
    },
    {
      name: "Marcel Brand",
      description: "Marcel Brand študuje na Fakulte elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave, odbor aplikovaná informatika so zameraním na kybernetickú bezpečnosť. Zaujíma sa o umelú inteligenciu, strojové učenie a spracovanie prirodzeného jazyka (NLP), ako aj o vývoj webových aplikácií a odporúčacie systémy. Má skúsenosti s programovaním v Pythone a JavaScripte (React, Node.js) a s prácou s databázami PostgreSQL.",
      photo: `${baseUrl}photos/marcel.jpg`
    },
    {
      name: "Matúš Bartík",
      description: "",
      photo: "https://via.placeholder.com/150/0099cc/ffffff?text=MB"
    },
    {
      name: "Dávid Babka",
      description: "",
      photo: "https://via.placeholder.com/150/00d4ff/ffffff?text=DB"
    },
    {
      name: "Peter Macko",
      description: "",
      photo: "https://via.placeholder.com/150/00d4ff/ffffff?text=PM"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">O nás</h1>
        <p className="about-subtitle">
          Poznajte talentovanú tímovú skupinu za týmto projektom
        </p>
      </div>

      <section className="team-section-about">
        <div className="content-wrapper">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <PersonCard
                key={index}
                name={member.name}
                description={member.description}
                photo={member.photo}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

