import React from 'react';
import { IconMail } from '@tabler/icons-react';
import { IconBook2 } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import HoverLabel from '../Components/HoverLabel/HoverLabel';

const Homepage = () => {
  return (
    <main className="homepage">
      <section className="homepage-hero">
        <div className="homepage-container homepage-hero-content">
          <div className="homepage-profile">
            <img
              src="/images/profile.jpg"
              alt="Kevin Richard"
            />
          </div>

          <div className="homepage-introduction">
            <h1>Kevin Richard</h1>

            <p className="homepage-degree">
              M.S. Computer Science Student
            </p>

            <p className="homepage-intro">
My research focuses on multimodal AI and embodied intelligence. I am interested in developing foundation models that can understand and interact with the world across different modalities and environments.
            </p>

            <nav
              className="homepage-links"
              aria-label="Professional links"
            >
              <HoverLabel label="Email">
                <a
                  href="mailto:krich103@charlotte.edu"
                  aria-label="Email"
                  className="homepage-link"
                >
                  <IconMail stroke={1.5} />
                </a>
              </HoverLabel>

              <HoverLabel label="Google Scholar">
                <a
                  href="https://scholar.google.com/citations?hl=en&user=FZel4xUAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Scholar"
                  className="homepage-link"
                >
                  <IconBook2 stroke={1.5} />
                </a>
              </HoverLabel>

              <HoverLabel label="GitHub">
                <a
                  href="https://github.com/kevinRichard1/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="homepage-link"
                >
                  <IconBrandGithub stroke={1.5} />
                </a>
              </HoverLabel>

              <HoverLabel label="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/kevin-richard-cs/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="homepage-link"
                >
                  <IconBrandLinkedin stroke={1.5} />
                </a>
              </HoverLabel>
            </nav>
          </div>
        </div>
      </section>

      <div className="homepage-container">
        <div className="homepage-rule" />

        <section
          id="research"
          className="homepage-section homepage-research"
        >
          <div className="homepage-section-label">
            <span>01</span>
            <span>Research</span>
          </div>

          <div className="homepage-section-content">
            <h2>Research &amp; Publications</h2>

            <article className="paper">
              <p className="paper-venue">
                DriveX @ CVPR · 2026
              </p>

              <h3>D2-V2X: Depth-Driven Cooperative V2X Reasoning for Autonomous Driving</h3>

              <p className="paper-authors">
                <strong>Kevin Richard</strong>, Alphin Varghese, Colin Pham, David Oh, Srijan Das
              </p>

              <p className="paper-description">
		We introduce D2-V2X, a spatially-aware benchmark and baseline for cooperative autonomous driving. By integrating V2X LiDAR with Chain-of-Thought rationales, we enable VLMs to reason about occluded hazards.
              </p>

              <div className="paper-links">
                <a
                  href="https://arxiv.org/abs/2605.24098"
                  target="_blank"
                  rel="noreferrer"
                >
                  Paper
                </a>

                <a
                  href="https://github.com/KevinRichard1/D2-V2X"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>

        <div className="homepage-rule" />

        <section
          id="education"
          className="homepage-section homepage-education"
        >
          <div className="homepage-section-label">
            <span>02</span>
            <span>Education</span>
          </div>

          <div className="homepage-section-content">
            <h2>Education</h2>

            <div className="education-list">
		<article className="education-item">
		  <div>
		    <h3>M.S. in Computer Science</h3>
		    <p>University of North Carolina at Charlotte</p>
		  </div>

		  <span>2026–Present <em>Expected May 2027</em></span>
		</article>

		<article className="education-item">
		  <div>
		    <h3>B.S. in Computer Science, Honors</h3>
		    <p>University of North Carolina at Charlotte</p>
		  </div>

		  <span>2024-2026</span>
		</article>
            </div>
          </div>
        </section>

        <div className="homepage-rule" />

      </div>
    </main>
  );
};

export default Homepage;