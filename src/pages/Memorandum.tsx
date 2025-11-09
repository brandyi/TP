import './Memorandum.css';

const Memorandum = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const meetings = [
    {
      date: "9 októbra 2025",
      title: "Stretnutie 0",
      pdfUrl: `${baseUrl}memorandum/Zápisnica 0.pdf`
    },
    {
      date: "16 októbra 2025",
      title: "Stretnutie 1",
      pdfUrl: `${baseUrl}memorandum/Zápisnica 1.pdf`
    },
    {
      date: "23 októbra 2025",
      title: "Stretnutie 2",
      pdfUrl: `${baseUrl}memorandum/Zápisnica 2.pdf`
    }
  ];

  return (
    <div className="memorandum-container">
      <div className="memorandum-header">
        <h1 className="memorandum-title">Zápisnice</h1>
        <p className="memorandum-subtitle">
          Zápisnice všetkých tímových stretnutí a diskusií
        </p>
      </div>

      <div className="content-wrapper">
        <div className="meetings-list">
          {meetings.map((meeting, index) => (
            <div key={index} className="meeting-card">
              <div className="meeting-info">
                <div className="meeting-date">{meeting.date}</div>
                <h3 className="meeting-title">{meeting.title}</h3>
              </div>
              <div className="meeting-actions">
                <a 
                  href={meeting.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  Zobraziť PDF
                </a>
                <a 
                  href={meeting.pdfUrl} 
                  download
                  className="download-btn"
                >
                  Stiahnuť PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memorandum;

