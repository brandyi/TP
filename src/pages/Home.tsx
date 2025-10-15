import './Home.css';

const Home = () => {
  // Replace these with your actual project data
  const projectInfo = {
    name: "Lokálne veľké jazykové modely",
    description: "Cieľom projektu je preskúmať a vyhodnotiť dostupné otvorené jazykové a vizuálno-jazykové modely (LLM a VLM), ktoré je možné nasadiť a prevádzkovať lokálne bez potreby pripojenia na externé cloudové služby. Projekt sa zameriava na analýzu ich hardvérových a softvérových požiadaviek, s cieľom identifikovať modely vhodné pre použitie v prostredí Univerzitného inštitútu matematiky (UIM), konkrétne v oblasti výskumu klasických šifier. V rámci projektu bude navrhnutý systematický benchmark, ktorý umožní objektívne porovnať výkonnosť a vhodnosť jednotlivých modelov pri riešení úloh spojených s kryptografickou analýzou a spracovaním textu. Vybrané modely budú následne nainštalované a otestované podľa definovaných metrík, pričom výsledky testovania poslúžia na výber najvhodnejšieho modelu. Najlepšie vyhodnotený model bude ďalej pripravený na praktické použitie – súčasťou výstupu bude používateľská dokumentácia, ako aj návrh administratívneho rozhrania, ktoré umožní jednoduchú správu a integráciu modelu do výskumného prostredia."
  };

  const leaders = [
    {
      name: "prof. Ing. Pavol Zajac, PhD."
    },
    {
      name: "Ing. Eugen Antal, PhD."
    },
  ];

  return (
    <div className="home-container">
      {/* Project Header */}
      <section className="project-header">
        <div className="content-wrapper">
          <h1 className="project-title">{projectInfo.name}</h1>
          <p className="project-description">{projectInfo.description}</p>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="team-section">
        <div className="content-wrapper">
          <h2 className="section-title">Zadávateľia</h2>
          <div className="team-grid">
            {leaders.map((leader, index) => (
              <div key={index} className="leader-card">
                <h3 className="leader-name">{leader.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

