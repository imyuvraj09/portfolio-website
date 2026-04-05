import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Participant | Gen AI for Gen Z</h4>
                <h5>Intel Unnati</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed an AI Education Tutor for Remote India as part of a Team-based AI Training Program.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Virtual Internship 6.0</h4>
                <h5>Infosys Springboard</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Selected for Internship 6.0 – Batch 3, focusing on emerging tech and AI applications. Gained real-world exposure to enterprise-grade AI tools, data science practices, and software development workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Agent Training Intern</h4>
                <h5>IBM</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed 4-week program: "From Learner to Builder – Become an AI Agent Architect". Learned foundational concepts in Agentic AI, architecture, and automation, including how autonomous agents optimize workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Technical Intern</h4>
                <h5>India Space Labs</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed Summer Internship Technical Training Program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
