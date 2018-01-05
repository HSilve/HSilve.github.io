import React from 'react';

const Projects = () => {
        const prefixes = ['vm', 'is', 'dm'];
        let indexes = [0, 0, 0];
        prefixes.forEach((proj, idx) => {
          const images = document.getElementsByClassName(`carousel-image ${proj}`);
          setInterval(() => {
            if (images.length > 0) {
            images[indexes[idx]].classList.add('hidden');
            indexes[idx]++;
              if (indexes[idx] === images.length) {indexes[idx] = 0;}
            images[indexes[idx]].classList.remove('hidden');
            }

          }, 3500);

        })

          return (
          <div>
            <div className="contained">
            <div className="center"><h5>Projects</h5></div>
                  <div className="card med">
                  <div id="carousel" className="card-image waves-effect waves-block waves-light">
                        <img className="carousel-image is activator" src="client/components/images/ideastormlogo.png" />
                        <img className="carousel-image is activator hidden" src="client/components/images/ideaStormRoom.png" />
                        <img className="carousel-image is activator hidden" src="client/components/images/ideaStormHome.png" />
                      </div>

                  <div className="card-content">
                    <span className="project-title activator">
                    <b>IdeaStorm</b>
                    <p>A virtual brainstorming tool for teams.</p>
                    <i className="material-icons right">more_vert</i></span>

                    <p><a href="http://idea-storm.herokuapp.com/">site </a>
                    <a href="https://github.com/EHenry92/meeb">code</a></p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title">IdeaStorm<i className="material-icons right">close</i></span>
                    <p>A virtual collaboration tool for teams to share, discuss and connect ideas.</p>
                    {/* <ul>Contributors:
                        <li>Erica Chai</li>
                        <li>Maria Betances</li>
                        <li>Blanca Sanchez</li>
                      </ul> */}
                    <a>Built with: React, Redux, AWS, D3.js, React-Redux, Sequelize.js</a>
                  </div>
              </div>
                  <div className="card med">
                  {/* <div className="card-image waves-effect waves-block waves-light"> */}
                    {/* <img className="activator" src="client/components/images/VocabuMemory.png" /> */}
                    <div id="carousel" className="card-image waves-effect waves-block waves-light">
                        <img className="carousel-image dm activator" src="client/components/images/VocabuMemory.png" />
                        <img className="carousel-image dm activator hidden" src="client/components/images/vocabuMemoryGame.png" />
                      </div>

                  {/* </div> */}
                  <div className="card-content">
                    <span className="project-title activator">
                      <b>VocabuMemory</b>
                      <p>A memory matching card game.</p>
                    <i className="material-icons right">more_vert</i></span>
                    <p><a href="http://vocabumemory.herokuapp.com/">site </a>
                    <a href="https://github.com/EHenry92/VocabuMemory">code</a></p>

                  </div>
                  <div className="card-reveal">
                    <span className="card-title">VocabuMemory<i className="material-icons right">close</i></span>
                    <p>A matching card game in which successful matches are found by pairing a word with its definition.</p>
                    <a>Built with: React, Redux, React-Redux, Sequelize</a>
                  </div>
              </div>
                  <div className="card med">
                    <div id="carousel" className="card-image waves-effect waves-block waves-light">
                        <img className="carousel-image vm activator" src="client/components/images/dunderMifflin.png" />
                        <img className="carousel-image vm activator hidden" src="client/components/images/dunderMifflincart.png" />
                      </div>
                    <div className="card-content">
                      <span className="project-title activator">
                        <b>Dunder Mifflin Inc.</b>
                        <p>An e-commerce website  for a paper company.</p>
                      <i className="material-icons right">more_vert</i></span>

                      <p><a href="https://dundermifflininc.herokuapp.com/">site </a>
                      <a />
                      <a href="https://github.com/EHenry92/dunder_mifflin">code</a></p>

                    </div>
                    <div className="card-reveal">
                      <span className="card-title">Dunder Mifflin Inc.<i className="material-icons right">close</i></span>
                      <p>An e-commerce site  for the a paper company.</p>
                      {/* <ul>Contributors:
                        <li>Layla Hedges</li>
                        <li>Emily Jordan</li>
                        <li>April Rueb</li>
                      </ul> */}
                      <a>Built with: React, Redux, React-Redux, Materalize, Material-UI, Sequelize</a>
                    </div>
                  </div>
              </div>
        </div>

          )
      }

export default Projects;
