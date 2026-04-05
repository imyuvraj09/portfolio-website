import "./styles/Career.css"; // Reuse the layout and styling from Career section

const Education = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering (AI and ML)</h4>
                <h5>MCKV INSTITUTE OF ENGINEERING, WEST BENGAL</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>CGPA-9.87</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th in PCM (Higher Secondary - CBSE)</h4>
                <h5>DELHI PUBLIC SCHOOL, SEC-4, Bokaro Steel City, JHARKHAND</h5>
              </div>
              <h3>XII</h3>
            </div>
            <p>Percentage - 70 %</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th (Secondary - Jharkhand Academic Council)</h4>
                <h5>SARASWATI SHISHU VIDYA MANDIR, Bokaro Steel City, JHARKHAND</h5>
              </div>
              <h3>X</h3>
            </div>
            <p>Percentage - 92 %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
