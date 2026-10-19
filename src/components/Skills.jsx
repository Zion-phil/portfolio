export default function Skills() {
  return (
    <section id="service" className="bx-service-section bx-section padding-tb-80 body-bg">
      <div className="container">
        <div className="row">
          
          <div className="title" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <p className="light-txt">Skills & Technologies</p>
            <h2>My<span className="primary-clr"> Skills</span></h2>
          </div>
          
          <div className="col-lg-4 col-md-12">
            <div className="section-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <div className="sr-no">
                <h6>01</h6>
              </div>
              <div className="card-description">
                <img src="/assets/img/service/icon-dark-1.png" alt="Frontend" />
                <div className="detailed-txt">
                  <h5>Frontend Development & React (Responsive UI)</h5>
                  <p>
                    Building responsive and user-friendly web interfaces using
                    HTML, CSS, Bootstrap, and React. Experienced in creating
                    layouts, navigation systems, sections, and forms with a
                    strong focus on mobile responsiveness and clean UI design.
                    Skilled in React component-based architecture, reusable UI
                    patterns, and managing state to build interactive
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="section-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
              <div className="sr-no">
                <h6>02</h6>
              </div>
              <div className="card-description">
                <img src="/assets/img/service/icon-2.png" alt="Backend" />
                <div className="detailed-txt">
                  <h5>Backend Development (Node.js & MySQL)</h5>
                  <p>
                    Developing server-side applications using Node.js and
                    managing data with MySQL. Familiar with building REST APIs,
                    handling CRUD operations, and connecting frontend
                    applications with backend services to create full-stack web
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="section-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <div className="sr-no">
                <h6>03</h6>
              </div>
              <div className="card-description">
                <img src="/assets/img/service/icon-dark-1.png" alt="AI" />
                <div className="detailed-txt">
                  <h5>AI-Powered Web Applications</h5>
                  <p>
                    Exploring and integrating AI tools into web applications to
                    enhance functionality and user experience. Interested in
                    building intelligent features using AI APIs to create
                    smarter, more interactive web solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-bottom"></div>
        </div>
      </div>
    </section>
  );
}