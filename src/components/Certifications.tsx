import "./styles/Career.css";

const Certifications = () => {
  const certs = [
    { title: "Google Cybersecurity Professional", issuer: "Google", date: "June 2025" },
    { title: "Introduction to Generative AI", issuer: "Google", date: "June 2025" },
    { title: "Intro to AI and ML with Python", issuer: "IBM", date: "June 2025" },
    { title: "Intro to Natural Language Processing", issuer: "Infosys Springboard", date: "May 2025" },
    { title: "Intro to Deep Learning and Prompt Engineering", issuer: "Infosys Springboard", date: "May 2025" },
    { title: "Python / JAVA Course Basic", issuer: "HackerRank", date: "June 2025" },
    { title: "Soft Skills Course", issuer: "GeeksforGeeks", date: "June 2025" },
    { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "2025" },
    { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", date: "2025" },
    { title: "Oracle AI Vector Search 2025 Certified Professional", issuer: "Oracle", date: "2025" },
    { title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", issuer: "Oracle", date: "2025" },
  ];

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Courses <span>&</span>
          <br /> Certifications
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "25px", marginTop: "40px", paddingBottom: "20px" }}>
          {certs.map((cert, index) => (
            <div key={index} className="cert-card" style={{ background: "rgba(255,255,255,0.05)", padding: "24px", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-4px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "600", margin: "0 0 10px 0", color: "#fff", lineHeight: "1.4", fontFamily: 'sans-serif' }}>{cert.title}</h4>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h5 style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", margin: "0", fontWeight: "400", letterSpacing: "0.5px" }}>{cert.issuer} • {cert.date}</h5>
                <a href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "0.85rem", background: "rgba(255,255,255,0.1)", padding: "6px 15px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.2)", transition: "all 0.3s ease", cursor: "pointer", whiteSpace: "nowrap" }} onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }} onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}>
                  View ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
