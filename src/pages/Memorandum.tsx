import './Memorandum.css';

const Memorandum = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const meetings = [
    {
      date: "9 októbra 2025",
      title: "Stretnutie 1",
      pdfUrl: `${baseUrl}memorandum/Zápisnica 1.pdf`
    },
    {
      date: "16 októbra 2025",
      title: "Stretnutie 2",
      pdfUrl: `${baseUrl}memorandum/Zápisnica 2.pdf`
    },
    {
      date: "23 októbra 2025",
      title: "Stretnutie 3",
      pdfUrl: `${baseUrl}memorandum/Zápisnica 3.pdf`
    },
    {
      date: "6 novembra 2025",
      title: "Stretnutie 4",
      pdfUrl: `${baseUrl}memorandum/Zápisnica 4.pdf`
    },
    {
      date: "13 novembra 2025",
      title: "Stretnutie 5",
      pdfUrl: `${baseUrl}memorandum/Zápisnica 5.pdf`
    },
    {
      date: "20 novembra 2025",
      title: "Stretnutie 6",
      pdfUrl: `${baseUrl}memorandum/Zápisnica 6.pdf`
    },
    {
      date: "5 decembra 2025",
      title: "Stretnutie 7",
      pdfUrl: `${baseUrl}memorandum/Zápisnica7.pdf`
    },
    {
      date: "24 februára 2026",
      title: "Stretnutie 8",
      pdfUrl: `${baseUrl}memorandum/Zápisnica8.pdf`
    },
    {
      date: "17 marca 2026",
      title: "Stretnutie 9",
      pdfUrl: `${baseUrl}memorandum/Zápisnica9.pdf`
    },
    {
      date: "31 marca 2026",
      title: "Stretnutie 10",
      pdfUrl: `${baseUrl}memorandum/Zápisnica10.pdf`
    },
    {
      date: "7 apríla 2026",
      title: "Stretnutie 11",
      pdfUrl: `${baseUrl}memorandum/Zápisnica11.pdf`
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

