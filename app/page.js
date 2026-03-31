import Image from "next/image";
import Reveal from "../components/reveal";

const portfolioUrl =
  "https://raw.githubusercontent.com/dori-819/haeju-portfolio/2712b35/public/assets/portfolio.pdf";

const previewCards = [
  {
    title: "AZAR Live",
    subtitle: "Streamer growth system",
    image: "/assets/azar-live-cover-1280.png",
    href: "#work"
  },
  {
    title: "JAMAKE",
    subtitle: "Creator translation platform",
    image: "/assets/jamake-cover-1280.png",
    href: "#work"
  },
  {
    title: "Minglo",
    subtitle: "Translator workflow product",
    image: "/assets/minglo-cover-1280.png",
    href: "#strategy"
  }
];

const workStudies = [
  {
    name: "AZAR Live",
    title: "Improving live experience so streamers stay, keep broadcasting, and understand progress more clearly.",
    description:
      "At Hyperconnect, I worked on streamer-side motivation and retention through tier visibility, contest engagement, and clearer growth feedback loops inside AZAR Live.",
    role: "Product strategy, UX/UI design, interaction design",
    outcome:
      "The work focused on increasing streamer ratio, improving average streaming time, and making progression feel more legible during and after live sessions.",
    image: "/assets/azar-live-engagement-1280.png"
  },
  {
    name: "JAMAKE",
    title: "Redesigning the purchase journey for a YouTuber video translation platform.",
    description:
      "I simplified a multi-step ordering flow into a clearer one-page structure, reduced decision friction, and improved trust in the service setup process.",
    role: "UX/UI design and planning across web and mobile touchpoints",
    outcome:
      "The revised purchase experience was designed to shorten decision time, increase purchase page reach, and make order completion feel less overwhelming.",
    image: "/assets/jamake-cover-1280.png"
  }
];

const leadershipPoints = [
  "Led the majority of product design at Voithru from launch through stabilization and scale-up from Seed to Series B.",
  "Owned design work across live streaming, monetization UX, localization, and design system efforts at Hyperconnect.",
  "Worked end-to-end across planning, flows, interface execution, and design quality in close collaboration with PMs and engineers."
];

const strategyPoints = [
  "Translate broad product problems into clearer flows, motivational mechanics, and measurable experience changes.",
  "Use research insights, workflow mapping, and market adaptation thinking to shape product direction for global audiences.",
  "Define structures that balance business goals, user clarity, and implementation feasibility."
];

const collaborationPoints = [
  "Partner closely with engineering and product to simplify flows, align system behavior, and protect design quality during implementation.",
  "Build reusable patterns and design-system logic so teams can move faster without losing consistency.",
  "Work across startup and large-scale product contexts, switching comfortably between ambiguity, detail work, and launch pressure."
];

export default function HomePage() {
  return (
    <div className="site-frame">
      <header className="topbar">
        <a className="wordmark" href="#top">
          Haeju Yeo
        </a>
        <nav className="topnav">
          <a href="#work">Work</a>
          <a href="#leadership">Leadership</a>
          <a href="#strategy">Strategy</a>
          <a href="#collaboration">Collaboration</a>
        </nav>
      </header>

      <main id="top" className="page">
        <section className="intro">
          <Reveal className="intro-copy">
            <p className="intro-kicker">
              Hi, I&apos;m Haeju Yeo,
              <br />
              Product Designer in Seoul
            </p>
            <h1 className="intro-title">
              Designing live experiences, creator tools, and workflow products with a focus on
              clarity, momentum, and global usability. Most recently at Hyperconnect, I have led
              work across AZAR Live, monetization UX, localization, and scalable design systems.
            </h1>
            <div className="jump-links">
              <a href="#work">Work ↓</a>
              <a href="#leadership">Leadership ↓</a>
              <a href="#strategy">Strategy ↓</a>
              <a href="#collaboration">Collaboration ↓</a>
              <a href="#about">About me ↓</a>
              <a href="#more">There&apos;s more ↓</a>
            </div>
          </Reveal>

          <Reveal className="preview-strip">
            {previewCards.map((card) => (
              <a key={card.title} className="preview-card" href={card.href}>
                <div className="preview-image-wrap">
                  <Image src={card.image} alt={card.title} width={1280} height={720} />
                </div>
                <div className="preview-copy">
                  <h2>{card.title}</h2>
                  <p>{card.subtitle}</p>
                </div>
              </a>
            ))}
          </Reveal>
        </section>

        <section id="work" className="content-section">
          <Reveal className="section-heading">
            <p>work</p>
            <h2>Selected product work across live streaming and creator service platforms.</h2>
          </Reveal>

          <div className="study-list">
            {workStudies.map((study) => (
              <Reveal key={study.name} className="study-row">
                <div className="study-copy">
                  <p className="study-label">{study.name}</p>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <div className="study-meta">
                    <div>
                      <span>Role</span>
                      <strong>{study.role}</strong>
                    </div>
                    <div>
                      <span>Outcome</span>
                      <strong>{study.outcome}</strong>
                    </div>
                  </div>
                </div>
                <div className="study-visual">
                  <Image src={study.image} alt={study.name} width={1280} height={720} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="leadership" className="content-section split-section">
          <Reveal className="section-heading">
            <p>leadership</p>
            <h2>Leading product design through ambiguity, execution, and scale.</h2>
          </Reveal>
          <Reveal className="text-panel">
            <ul className="statement-list">
              {leadershipPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section id="strategy" className="content-section split-section">
          <Reveal className="section-heading">
            <p>strategy</p>
            <h2>Connecting user insight, product priorities, and system thinking.</h2>
          </Reveal>
          <div className="two-column-grid">
            <Reveal className="text-panel">
              <ul className="statement-list">
                {strategyPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="image-panel">
              <Image
                src="/assets/minglo-cover-1280.png"
                alt="Minglo overview"
                width={1280}
                height={720}
              />
            </Reveal>
          </div>
        </section>

        <section id="collaboration" className="content-section split-section">
          <Reveal className="section-heading">
            <p>collaboration</p>
            <h2>Building alignment with PMs, engineers, and operators without losing quality.</h2>
          </Reveal>
          <Reveal className="text-panel">
            <ul className="statement-list">
              {collaborationPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section id="about" className="content-section about-section">
          <Reveal className="section-heading">
            <p>about me</p>
            <h2>
              Designer by practice, systems thinker by habit, and someone who enjoys turning
              complex product problems into interfaces people can actually understand and use.
            </h2>
          </Reveal>
          <Reveal className="about-grid">
            <div>
              <span>Current</span>
              <p>Product Designer at Hyperconnect / Match Group</p>
            </div>
            <div>
              <span>Education</span>
              <p>Dong-A University, Industrial Design (Visual Media Design)</p>
            </div>
            <div>
              <span>Contact</span>
              <p>yhaejoooo@gmail.com</p>
              <p>+82 10 7229 9402</p>
              <p>Seoul, Korea</p>
            </div>
          </Reveal>
        </section>

        <section id="more" className="content-section more-section">
          <Reveal className="section-heading">
            <p>there&apos;s more</p>
            <h2>Original files and deeper materials.</h2>
          </Reveal>
          <Reveal className="more-links">
            <a href="/assets/resume.pdf" target="_blank" rel="noreferrer">
              Resume PDF ↗
            </a>
            <a href={portfolioUrl} target="_blank" rel="noreferrer">
              Portfolio PDF ↗
            </a>
            <a href="https://www.linkedin.com/in/yhaejoooo/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
