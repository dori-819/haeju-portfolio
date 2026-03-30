import Image from "next/image";
import Reveal from "../components/reveal";

const portfolioUrl =
  "https://raw.githubusercontent.com/dori-819/haeju-portfolio/2712b35/public/assets/portfolio.pdf";

const workItems = [
  {
    index: "01",
    name: "AZAR Live",
    title: "Improving live experience so streamers stay, grow, and keep streaming.",
    description:
      "I worked on the structural issues behind streamer supply and activity, then translated that into tier visibility, contest-based motivation, and more legible growth loops inside the product.",
    meta: ["Hyperconnect · Match Group", "Dec 2023 - Aug 2024", "UX/UI design and planning"],
    variant: "dark",
    images: [
      {
        src: "/assets/azar-live-cover-1280.png",
        alt: "AZAR Live case study cover"
      },
      {
        src: "/assets/azar-live-engagement-1280.png",
        alt: "AZAR Live engagement mechanic screens"
      }
    ]
  },
  {
    index: "02",
    name: "JAMAKE",
    title: "A video translation platform for YouTubers.",
    description:
      "I redesigned the purchase journey into a clearer one-page flow, reduced friction in language and output selection, and supported a service experience that felt easier to trust and complete.",
    meta: ["Voithru", "Mar 2020 - Nov 2020", "Web, mobile, UX/UI design and planning"],
    variant: "light",
    images: [
      {
        src: "/assets/jamake-cover-1280.png",
        alt: "JAMAKE overview slide"
      }
    ]
  },
  {
    index: "03",
    name: "Minglo",
    title: "Building a platform for freelance translators.",
    description:
      "I helped define a translation workflow product for operators and translators, focusing on task allocation clarity, dashboard usability, and better day-to-day throughput.",
    meta: ["Voithru", "Mar 2023 - May 2023", "Web, iOS app, UX/UI design"],
    variant: "light",
    images: [
      {
        src: "/assets/minglo-cover-1280.png",
        alt: "Minglo product overview slide"
      }
    ]
  }
];

const craftItems = [
  {
    title: "Growth mechanics",
    body: "Designing motivation loops, participation systems, and visibility structures that sustain activity."
  },
  {
    title: "Global adaptation",
    body: "Localizing flows for multiple markets while preserving clarity, consistency, and product intent."
  },
  {
    title: "Service workflows",
    body: "Reducing coordination overhead in operational products with cleaner task structures and dashboard UX."
  },
  {
    title: "Design systems",
    body: "Building reusable patterns, token logic, and naming rules that help teams move faster with quality."
  }
];

const aboutItems = [
  {
    title: "Current focus",
    body: "At Hyperconnect, I have owned product design across live streamer experiences, monetization UX, localization patterns for global markets, and multi-brand design system work."
  },
  {
    title: "How I work",
    body: "I care about bridging research, product strategy, and visual execution. My sweet spot is moving between system-level clarity and interface-level craft without losing the user story."
  },
  {
    title: "Foundation",
    body: "I studied Industrial Design at Dong-A University, and I use that background to connect spatial, visual, and interaction thinking in digital products."
  }
];

const impactItems = [
  {
    value: "5%",
    label: "streamer ratio improvement called out in AZAR Live work"
  },
  {
    value: "50%",
    label: "product adoption increase highlighted in Minglo results"
  },
  {
    value: "11%",
    label: "daily throughput increase documented in translation workflows"
  }
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-role">Product Designer</span>
          <span className="brand-name">Haeju Yeo</span>
        </a>
        <nav className="site-nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <Reveal className="hero-copy">
            <p className="eyebrow">Seoul-based product designer building global digital products.</p>
            <h1>
              Designing experiences from <span>insight to impact</span> across live streaming, creator
              tools, localization, and service platforms.
            </h1>
            <p className="hero-text">
              I design for clarity, momentum, and measurable behavior change. Most recently at
              Hyperconnect, I have led AZAR Live and new business initiatives across streamer growth,
              engagement mechanics, monetization UX, localization, and design systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See selected work
              </a>
              <a className="button button-secondary" href="/assets/resume.pdf" target="_blank" rel="noreferrer">
                Open resume
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-panel">
            <div className="hero-stat">
              <span className="hero-stat-value">4+</span>
              <span className="hero-stat-label">years shaping product experiences across web, iOS, Android</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">Global</span>
              <span className="hero-stat-label">
                market adaptation, user research, workflow design, systems thinking
              </span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">0 to scale</span>
              <span className="hero-stat-label">startup execution and high-traffic product optimization</span>
            </div>
          </Reveal>
        </section>

        <Reveal as="section" className="marquee section">
          <div className="marquee-track">
            <span>Streamer Growth</span>
            <span>Contest Mechanics</span>
            <span>Localization</span>
            <span>Design Systems</span>
            <span>Creator Platforms</span>
            <span>UX Strategy</span>
            <span>Streamer Growth</span>
            <span>Contest Mechanics</span>
            <span>Localization</span>
            <span>Design Systems</span>
            <span>Creator Platforms</span>
            <span>UX Strategy</span>
          </div>
        </Reveal>

        <section id="work" className="section work">
          <Reveal className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects where product thinking, systems design, and execution met real business outcomes.</h2>
          </Reveal>

          <Reveal className="project-card project-dark">
            <div className="project-copy">
              <p className="project-index">{workItems[0].index}</p>
              <h3>{workItems[0].name}</h3>
              <p className="project-title">{workItems[0].title}</p>
              <p className="project-description">{workItems[0].description}</p>
              <ul className="project-meta">
                {workItems[0].meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="project-visual-stack">
              {workItems[0].images.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={1280}
                  height={720}
                  priority
                />
              ))}
            </div>
          </Reveal>

          <div className="project-grid">
            {workItems.slice(1).map((item) => (
              <Reveal key={item.name} className="project-card project-light">
                <div className="project-copy">
                  <p className="project-index">{item.index}</p>
                  <h3>{item.name}</h3>
                  <p className="project-title">{item.title}</p>
                  <p className="project-description">{item.description}</p>
                  <ul className="project-meta">
                    {item.meta.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-visual-single">
                  <Image src={item.images[0].src} alt={item.images[0].alt} width={1280} height={720} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="impact-strip">
            {impactItems.map((item) => (
              <div key={item.value + item.label}>
                <span className="impact-number">{item.value}</span>
                <span className="impact-label">{item.label}</span>
              </div>
            ))}
          </Reveal>
        </section>

        <section id="about" className="section about">
          <Reveal className="section-heading">
            <p className="eyebrow">About</p>
            <h2>
              I enjoy turning broad product challenges into focused experiences people can actually
              understand, trust, and keep using.
            </h2>
          </Reveal>

          <div className="about-grid">
            {aboutItems.map((item) => (
              <Reveal key={item.title} className="about-panel">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section craft">
          <Reveal className="section-heading">
            <p className="eyebrow">Craft</p>
            <h2>The kind of product problems I tend to make progress on.</h2>
          </Reveal>

          <div className="craft-grid">
            {craftItems.map((item) => (
              <Reveal key={item.title} className="craft-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal as="section" id="resume" className="section resume-panel">
          <div>
            <p className="eyebrow">Resume & Portfolio</p>
            <h2>Download the original documents or continue with the web version above.</h2>
          </div>
          <div className="resume-actions">
            <a className="button button-primary" href="/assets/resume.pdf" target="_blank" rel="noreferrer">
              Resume PDF
            </a>
            <a className="button button-secondary" href={portfolioUrl} target="_blank" rel="noreferrer">
              Portfolio PDF
            </a>
          </div>
        </Reveal>
      </main>

      <Reveal as="footer" id="contact" className="site-footer">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to thoughtful product conversations and design opportunities.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:yhaejoooo@gmail.com">yhaejoooo@gmail.com</a>
          <a href="tel:+821072299402">+82 10 7229 9402</a>
          <a href="https://www.linkedin.com/in/yhaejoooo/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </Reveal>
    </div>
  );
}
