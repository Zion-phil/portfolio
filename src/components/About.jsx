export default function About() {
  return (
    <section id="about" className="bx-about-section bx-section padding-b-80">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="sec-img" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
              <img src="/assets/img/about/new photo (3).jpg" alt="Tsion" />
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="detailed-content" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <div className="title">
                <p className="light-txt">About Me</p>
                <h2>
                  A Passionate Junior Full-Stack
                  <span className="primary-clr"> Developer</span>
                </h2>
                <p>
                  My name is Tsion Philipos, a Full-Stack Web Developer with a degree in Computer Science and a certification in AI-Powered Web Development. I specialize in building responsive, end-to-end web applications using JavaScript, React, Node.js, Express, and MySQL.
                  <br /><br />
                  I am passionate about integrating AI into modern web solutions. Recently, I engineered and deployed a multi-session AI Chatbot and a full community forum with real-time WebSockets and semantic search. I love turning complex problems into clean, functional, and user-friendly digital experiences.
                </p>
              </div>
              
              <div className="personal-detail">
                <div className="content">
                  <div className="left">
                    <div className="name pb">
                      <span className="info">Full Name :</span>
                      <span className="detail">Tsion Philipos </span>
                    </div>
                    <div className="age pb">
                      <span className="info">Education :</span>
                      <span className="detail">Computer Science</span>
                    </div>
                  </div>
                  <div className="right">
                    <div className="ph pb">
                      <span className="info">Phone No :</span>
                      <span className="detail">+251 902519287</span>
                    </div>
                    <div className="email pb">
                      <span className="info">Email :</span>
                      <span className="detail">tsionphilipo6@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="mail">
                  <div className="address">
                    <span className="info">Address :</span>
                    <span className="detail">Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}