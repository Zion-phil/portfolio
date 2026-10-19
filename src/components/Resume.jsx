export default function Resume() {
  return (
    <section id="experience" className="bx-experience-section bx-section padding-tb-80">
      <div className="container">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="row mb-m-30">
          <div className="title" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <p className="light-txt">qualification</p>
            <h2>My<span className="primary-clr"> RESUME</span></h2>
          </div>
          
          {/* EDUCATION COLUMN */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div 
              className="education bx-box" 
              data-aos="fade-up" 
              data-aos-duration="2000" 
              data-aos-delay="300"
            >
              <h4>Education</h4>
              <ul className="timeline">
                <li className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5 className="timeline-title">Bachelor in Computer Science</h5>
                    <p>Completed undergraduate studies in Computer Science at Hawassa University.</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5 className="timeline-title">ALX Backend Development Program</h5>
                    <p>Completed a 7-month backend development program at ALX Africa, including 3 months of Professional Foundations and 4 months of Backend Development training.</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5 className="timeline-title">AI-Powered Full-Stack Web Development</h5>
                    <p>Certified by Evangadi Tech. Mastered modern web development (React, Node.js, Express, MySQL) integrated with cutting-edge AI technologies (Google Gemini API). Successfully engineered and deployed production-ready applications, including a real-time community forum and an AI-driven chatbot.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* EXPERIENCE COLUMN */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div 
              className="experience bx-box" 
              data-aos="fade-up" 
              data-aos-duration="2000" 
              data-aos-delay="400"
            >
              <h4>experience</h4>
              <ul className="timeline">
                <li className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5 className="timeline-title">iCog Acc<span className="sub"> - Intern (Operational & Technical Role)</span></h5>
                    <p>Completed a one-year internship at iCog Acc, where I was exposed to both operational processes and technical workflows within the company. I collaborated closely with UI/UX designers, contributing to design tasks using Figma and gaining practical experience in user interface design and product development workflows.</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h5 className="timeline-title">Elnet Technologies<span className="sub"> - IT Support</span></h5>
                    <p>Worked for 1 year providing in-person IT support at Elnet Technologies. Assisted users with technical problems, and helped ensure smooth day-to-day system operations.</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <a className="custom-btn bx-btn" href="https://drive.google.com/file/d/1ot7Jg_jZvZGJk6TIrtbfY2TLBP5cdpZ6/view?usp=sharing" download="Tsion's_CV_2026.pdf">
                    <i className="fas fa-download"></i> my CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}