export default function Hero() {
  return (
    <section id="home" className="bx-home home-section bx-section padding-tb-80 bg-shape-hero">
      {/* BACKGROUND SHAPES */}
      <img id="shape1" className="parallax" src="/assets/img/bg/shape-1.png" alt="shape" />
      <img id="shape2" className="parallax top" src="/assets/img/bg/shape-2.png" alt="shape" />
      <img id="shape3" className="parallax left top" src="/assets/img/bg/shape-3.png" alt="shape" />
      <img id="shape4" className="parallax left" src="/assets/img/bg/shape-4.png" alt="shape" />
      <img id="shape5" className="parallax bottom" src="/assets/img/bg/shape-5.png" alt="shape" />

      <div className="container p-0">
        <div className="row">
          <div className="col-md-6">
            <div className="basic-details" data-aos="fade-up" data-aos-duration="2000">
              <div className="info">
                <span className="primary-color">Hello, I am</span>
                <h1>Tsion Philipos</h1>
                <h2>Junior Full-Stack Web Developer</h2>
                <p>
                  I enjoy turning ideas into interactive and user-friendly web applications using React, Node.js, Express, and MySQL, with a growing focus on integrating AI features into modern web experiences.
                </p>
                <div className="buttons">
                  <a className="custom-btn bx-btn" href="#contact">Hire Me</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* Changed to fade-up to match the rest */}
            <div className="profile-img" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
              <div className="profile-detail">
                <img src="/assets/img/bg/edited-photo.png" alt="Tsion" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}