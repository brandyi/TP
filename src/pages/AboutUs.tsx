import PersonCard from '../components/PersonCard';
import './AboutUs.css';

const AboutUs = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const teamMembers = [
    {
      name: "Tomáš Pavúk",
      description: "Tomáš Pavúk študuje na Fakulte elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave, odbor aplikovaná informatika. Pracuje ako AI/Web Developer v startupe AiCarpus/WristPlanner, kde sa podieľa aj na návrhu a tvorbe produktových riešení. V rámci tohoto startupu pracuje na projektoch využívajúcich umelú inteligenciu a LLM agentov, vrátane inteligentných nástrojov pre Microsoft Teams a riešení pre smart hodinky, kde navrhuje architektúru a ML pipeline na detekciu pracovných aktivít a bezpečnostných aspektov. Okrem toho pôsobí aj v ďalšom startupe. Má skúsenosti s vývojom AI riešení, webových aplikácií a návrhom systémovej architektúry.",
      photo: `${baseUrl}photos/tomas.jpg`
    },
    {
      name: "Marcel Brand",
      description: "Marcel Brand študuje na Fakulte elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave, odbor aplikovaná informatika so zameraním na kybernetickú bezpečnosť. Zaujíma sa o umelú inteligenciu, strojové učenie a spracovanie prirodzeného jazyka (NLP), ako aj o vývoj webových aplikácií a odporúčacie systémy. Má skúsenosti s programovaním v Pythone a JavaScripte (React, Node.js) a s prácou s databázami PostgreSQL.",
      photo: `${baseUrl}photos/marcel.jpg`
    },
    {
      name: "Matúš Bartík",
      description: "Matúš Bartík študuje na Fakulte elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave, odbor aplikovaná informatika so zameraním na kybernetickú bezpečnosť. Pracuje ako Test Automation Engineer, kde sa venuje automatizácii testovania softvérových riešení. Zaujíma sa o webový vývoj, umelú inteligenciu a kybernetickú bezpečnosť. Má skúsenosti s programovaním v Pythone a JavaScripte, s vývojom webových aplikácií v Reacte a prácou s databázami MySQL.",
      photo: `${baseUrl}photos/matus.jpg`
    },
    {
      name: "Dávid Babka",
      description: "Dávid Babka je študentom Fakulty elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave, kde sa venuje odboru aplikovanej informatiky so špecializáciou na kybernetickú bezpečnosť. Zaujíma sa o vývoj webových aplikácií. Najviac skúseností má s programovaním v jazyku JavaScript, vývojom webových aplikácií a prácou s rôznymi databázovými systémami.",
      photo: `${baseUrl}photos/david.jpg`
    },
    {
      name: "Peter Macko",
      description: "Peťo vyštudoval bakalára z informatiky na Žilinskej Univerzite na Fakulte Riadenia a Informatiky a rozhodol sa prestúpiť na inžiniersky stupeň na STU FEI v Bratislave. Zaujíma sa o kybernetickú bezpečnosť. Skúsenosti: Java, PHP, relačné databázy.",
      photo: `${baseUrl}photos/peto.jpg`
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

