export default function Projects() {
  return (
    <section id="portfolio" className="bx-portfolio-section bx-section portfolio padding-tb-80">
      <div className="container">
        <div className="title" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
          <p className="ligh-title">Portfolio</p>
          <h2>My <span className="primary-clr">Portfolio</span></h2>
        </div>
        <div className="row m-b-minus-24px">
          <div className="col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
            <div className="portfolio-content-items">
              <div className="row">
                
                {/* Project 1: Netflix */}
                <div className="col-lg-4 col-md-6 col-xs-12 mix graphics templates" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                  <div className="hovereffect">
                    <div className="portfolio-img">
                      <img src="/assets/img/portfolio/netflix (1).png" alt="Netflix" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-info">
                        <a className="info" href="https://netflix-clone-tsion.vercel.app/" target="_blank" rel="noreferrer">Netflix website project</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2: Forum */}
                <div className="col-lg-4 col-md-6 col-xs-12 mix design" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="700">
                  <div className="hovereffect">
                    <div className="portfolio-img">
                      <img src="/assets/img/portfolio/forum.png" alt="Forum" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-info">
                        <a className="info" href="https://evangadi-forum-tsion.vercel.app/" target="_blank" rel="noreferrer">Evangadi Forum: Full-Stack Q&A</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3: GPT */}
                <div className="col-lg-4 col-md-6 col-xs-12 mix design" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                  <div className="hovereffect">
                    <div className="portfolio-img">
                      <img src="/assets/img/portfolio/gpt.png" alt="GPT Clone" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-info">
                        <a className="info" href="https://gpt-clone-tsion.vercel.app/" target="_blank" rel="noreferrer">ChatGPT Project</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 4: Elnet Tech */}
                <div className="col-lg-4 col-md-6 col-xs-12 mix development" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
                  <div className="hovereffect">
                    <div className="portfolio-img">
                      <img src="/assets/img/portfolio/eltech.png" alt="Elnet Tech" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-info">
                        <a className="info" href="https://elnetech.com/" target="_blank" rel="noreferrer">Elnet technology Website</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 5: Elnet Events */}
                <div className="col-lg-4 col-md-6 col-xs-12 mix templates design" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
                  <div className="hovereffect">
                    <div className="portfolio-img">
                      <img src="/assets/img/portfolio/event&travel.png" alt="Elnet Events" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-info">
                        <a className="info" href="https://elnet-events-travel.vercel.app/" target="_blank" rel="noreferrer">Elnet events and travel website</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 6: Apple */}
                <div className="col-lg-4 col-md-6 col-xs-12 mix design" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1100">
                  <div className="hovereffect">
                    <div className="portfolio-img">
                      <img src="/assets/img/portfolio/project2 port.png" alt="Apple" />
                    </div>
                    <div className="overlay">
                      <div className="overlay-info">
                        <a className="info" href="https://apple-website-rebuild-seven.vercel.app/" target="_blank" rel="noreferrer">Apple Website</a>
                      </div>
                    </div>
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