const stacks = [
  {
    title: "Programming Languages",
    items: ["C++", "Python", "Java", "JavaScript", "Kotlin"],
    icon: "terminal",
  },
  {
    title: "Web Technologies",
    items: ["HTML5", "CSS3", "React.js", "Node.js"],
    icon: "layers",
  },
  {
    title: "Mobile Development",
    items: ["Android", "Jetpack", "Kotlin"],
    icon: "code",
  },
  {
    title: "Databases",
    items: ["MySQL", "Firebase", "MongoDB"],
    icon: "db",
  },
];

const cases = [
  {
    name: "SafePill",
    type: "Healthcare Application",
    timeline: "2024",
    overview:
      "SafePill is a healthcare-focused application designed to improve medication safety and ensure consistent adherence through a reliability-first system.",
    problemStatement:
      "Medication non-adherence is a major issue in healthcare, often leading to ineffective treatments, health complications, and increased medical costs. Many users lack a structured, easy-to-use system to manage medications safely.",
    solutionApproach:
      "Designed a system-driven application that focuses on correctness, scheduling reliability, and local persistence to ensure medication data is always available when needed.",
    technologiesUsed: ["Kotlin", "Jetpack Compose", "Room Database"],
    keyFeatures: [
      "Automated medication scheduling",
      "Adherence tracking",
      "Offline data persistence",
      "Simple and accessible UI",
    ],
    outcomeAndLearnings:
      "Learned how to design reliability-first applications, handle critical user data, and build systems where correctness and trust are essential.",
  },
  {
    name: "Cognify",
    type: "Cognitive and Productivity Application",
    timeline: "2024",
    overview:
      "Cognify is a cognitive support and productivity application aimed at helping users track mental patterns and improve focus through structured data insights.",
    problemStatement:
      "Users often lack consistent tools to understand their cognitive habits, productivity trends, and mental clarity over time.",
    solutionApproach:
      "Built a data-driven system that captures daily inputs, stores them securely, and presents meaningful insights through a clean and minimal interface.",
    technologiesUsed: ["Kotlin", "Jetpack Compose", "Firebase"],
    keyFeatures: [
      "Daily cognitive tracking",
      "Progress visualization",
      "Insight-based data presentation",
      "Minimal distraction-focused UI",
    ],
    outcomeAndLearnings:
      "Improved understanding of user-centric design, long-term engagement strategies, and data handling for productivity applications.",
  },
  {
    name: "Mitr",
    type: "Daily Companion Application",
    timeline: "2023",
    overview:
      "Mitr is a personal companion app designed for daily journaling, memory recording, and sending messages to oneself in the future.",
    problemStatement:
      "Many users struggle to maintain a habit of journaling and preserving personal memories in a structured way.",
    solutionApproach:
      "Developed a simple, habit-forming journaling system with cloud persistence to encourage consistent daily use.",
    technologiesUsed: ["Android Studio", "Firebase", "Firestore"],
    keyFeatures: [
      "Daily diary entries",
      "Memory recording",
      "Messages to future self",
      "Cloud-based data storage",
    ],
    outcomeAndLearnings:
      "Strengthened skills in mobile app architecture, cloud databases, and building habit-forming applications.",
  },
  {
    name: "WordWarriors",
    type: "EdTech and Gamified Learning Platform",
    timeline: "2023",
    overview:
      "WordWarriors is a gamified language-learning platform designed to increase engagement through progression systems and challenges.",
    problemStatement:
      "Traditional language learning platforms often lack motivation, engagement, and consistent progression tracking.",
    solutionApproach:
      "Designed a game-based system with levels, quests, achievements, and leaderboards to motivate continuous learning.",
    technologiesUsed: ["C++", "JavaScript"],
    keyFeatures: [
      "Level-based progression",
      "Quests and challenges",
      "Achievements and leaderboards",
      "AI-based progress tracking",
    ],
    outcomeAndLearnings:
      "Learned how to combine game mechanics with educational goals and manage complex progression logic.",
  },
  {
    name: "Nyayavaani",
    type: "Legal Assistance System",
    timeline: "2023",
    overview:
      "Nyayavaani is a real-time legal assistance system that provides automated suggestions for common legal issues.",
    problemStatement:
      "Access to immediate and understandable legal guidance is limited for many individuals.",
    solutionApproach:
      "Developed an automated workflow to capture legal queries and provide structured guidance using a backend data store.",
    technologiesUsed: ["HTML", "CSS", "MongoDB"],
    keyFeatures: [
      "Real-time legal query handling",
      "Automated legal suggestions",
      "Structured data storage",
      "Simple and accessible interface",
    ],
    outcomeAndLearnings:
      "Gained experience in designing problem-oriented applications and handling real-time user interactions.",
  },
  {
    name: "SansAR",
    type: "Augmented Reality Application",
    timeline: "2022",
    overview:
      "SansAR is an augmented reality application that preserves Indian cultural heritage by visualizing 3D artifacts through AR.",
    problemStatement:
      "Cultural heritage content often lacks engaging digital representation that is accessible to a wide audience.",
    solutionApproach:
      "Built an AR-based visualization system that displays heritage models interactively while managing secure data operations.",
    technologiesUsed: ["Android Studio", "Google OpenCore", "Apple AR"],
    keyFeatures: [
      "AR-based 3D heritage visualization",
      "Interactive user experience",
      "Secure CRUD operations",
      "Database integration",
    ],
    outcomeAndLearnings:
      "Developed hands-on experience with AR workflows, performance considerations, and immersive application design.",
  },
];

const contacts = [
  { label: "Email", value: "balumurivivek2678@gmail.com", icon: "mail" },
  { label: "Phone", value: "+91-7207375489", icon: "phone" },
  { label: "LinkedIn", value: "linkedin.com/in/vivekbalumuri", icon: "link" },
  { label: "GitHub", value: "github.com/Vivekbalumuri", icon: "link" },
];

const navItems = [
  { id: "about", label: "About", icon: "user" },
  { id: "skills", label: "Skills", icon: "terminal" },
  { id: "research", label: "Research", icon: "layers" },
  { id: "projects", label: "Projects", icon: "code" },
  { id: "contact", label: "Contact", icon: "mail" },
];

function Icon({ name }) {
  const icons = {
    user: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-3.3 0-6 1.8-6 4v2h12v-2c0-2.2-2.7-4-6-4z" />
      </svg>
    ),
    terminal: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm2.8 4.4 2.9 2.6-2.9 2.6 1.3 1.4 4.3-4-4.3-4zm5.4 5.6h5v-2h-5z" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.2 16.6 3.6 12l4.6-4.6L6.8 6 1 12l5.8 6zm7.6 0 4.6-4.6-4.6-4.6L17.2 6 23 12l-5.8 6z" />
      </svg>
    ),
    layers: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3 1 9l11 6 11-6zm0 9L3.7 9 12 4.3 20.3 9zM1 15l11 6 11-6-2.2-1.2L12 18.7 3.2 13.8z" />
      </svg>
    ),
    db: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c-4.4 0-8 1.3-8 3v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5c0-1.7-3.6-3-8-3zm0 2c3.9 0 6 .9 6 1s-2.1 1-6 1-6-.9-6-1 2.1-1 6-1zm0 16c-3.9 0-6-.9-6-1v-2c1.4 1 4.1 1.5 6 1.5s4.6-.5 6-1.5v2c0 .1-2.1 1-6 1z" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm9 7L4 8v8h16V8z" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.6 10.8a14.7 14.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.1 11.1 0 0 0 3.5.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1 17 17 0 0 1-17-17 1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.1 11.1 0 0 0 .6 3.5 1 1 0 0 1-.2 1z" />
      </svg>
    ),
    link: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4l-3.5 3.5a1 1 0 0 1-1.4 0zM7 17a4 4 0 0 1 0-5.7l3-3a4 4 0 0 1 5.7 5.7l-1.4 1.4-1.4-1.4 1.4-1.4a2 2 0 0 0-2.9-2.9l-3 3A2 2 0 1 0 9 15.6L10.4 14l1.4 1.4-1.4 1.4A4 4 0 0 1 7 17z" />
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 13a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V20a1 1 0 0 1 1-1zm8-7a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H19a1 1 0 0 1 1 1zM6.5 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1zm9.7-5.7a1 1 0 0 1 1.4 0l1 1a1 1 0 1 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4zM6.4 16.6a1 1 0 0 1 1.4 0l1 1A1 1 0 0 1 7.4 19l-1-1a1 1 0 0 1 0-1.4zm11.2 1.4a1 1 0 0 1-1.4 0l-1-1a1 1 0 1 1 1.4-1.4l1 1a1 1 0 0 1 0 1.4zM7.4 6.4a1 1 0 0 1-1.4 0l-1-1A1 1 0 0 1 6.4 4l1 1a1 1 0 0 1 0 1.4z" />
      </svg>
    ),
    moon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.5 2a9 9 0 1 0 7.5 13.9A8 8 0 0 1 14.5 2z" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function useActiveSection(ids) {
  const [active, setActive] = React.useState(ids[0]);

  React.useEffect(() => {
    const getActiveId = () => {
      const offset = 120;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
          current = id;
        }
      });
      return current;
    };

    const onScroll = () => {
      setActive(getActiveId());
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
}

function useTypewriter(text, speed) {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    let index = 0;
    setValue("");
    const timer = setInterval(() => {
      index += 1;
      setValue(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return value;
}

function App() {
  const active = useActiveSection(navItems.map((item) => item.id));
  const [theme, setTheme] = React.useState(
    document.body.dataset.theme || "dark"
  );
  const [activeCase, setActiveCase] = React.useState(null);
  const [ripple, setRipple] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const handleThemeToggle = (event) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const size = Math.hypot(window.innerWidth, window.innerHeight) * 2;
    setRipple({ x, y, size, nextTheme });
    window.setTimeout(() => {
      setTheme(nextTheme);
      setRipple(null);
    }, 450);
  };

  return (
    <>
      {ripple && (
        <div
          className={`theme-ripple ${ripple.nextTheme}`}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      )}
      <div className="page">
        <div className="topbar">
          <div className="brand">VIVEK.DEV</div>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className="top-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="theme-toggle"
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <section className="section" id="about">
          <div className="kicker">WHO I AM</div>
          <div className="name-badge">BALUMURI VIVEK GOWD</div>
          <h1 className="title typewriter">
            {useTypewriter("Building the Next Dimension.", 70)}
            <span className="caret" />
          </h1>
          <div className="hero-card">
            <p>
              I am a Computer Science Engineering student with a strong interest in building
              reliable, user-focused software systems. My work spans mobile application
              development, web technologies, and system-oriented problem solving. I enjoy
              translating real-world problems into structured digital solutions with a focus on
              clarity, performance, and long-term usability.
              <br />
              <br />
              I have hands-on experience developing Android applications using Kotlin and Jetpack
              Compose, along with web-based solutions using modern frontend technologies. My
              projects range from healthcare and productivity applications to educational and
              augmented reality systems, each emphasizing clean architecture and thoughtful design
              decisions.
              <br />
              <br />
              Alongside development, I am actively involved in research and have authored a
              peer-reviewed paper published in IEEE Xplore, reflecting my interest in applying
              machine learning techniques to real-world healthcare challenges. I value continuous
              learning, disciplined engineering practices, and building software that creates
              meaningful impact.
              <br />
              <br />
              I care deeply about maintainability, documentation, and engineering practices that
              make software reliable over time while keeping the user experience simple and clear.
            </p>
          </div>
          <div className="cta-row">
            <a className="cta" href="./resume_cse.pdf" download>
              <Icon name="terminal" />
              Download Resume
            </a>
            <a className="cta outline" href="./vivek-app.apk" download>
              <Icon name="code" />
              Download APK
            </a>
          </div>

          <div className="section" style={{ marginTop: "26px" }}>
            <div className="kicker">TIMELINE</div>
            <div className="timeline-card">
              <div className="timeline-dot">*</div>
              <div>
                <p className="timeline-title">Chandigarh University</p>
                <div className="timeline-meta">B.E. Computer Science Engineering - 2024 - 2028</div>
              </div>
            </div>
            <div className="timeline-card">
              <div className="timeline-dot">*</div>
              <div>
                <p className="timeline-title">Research Publication</p>
                <div className="timeline-meta">
                  2025 - Research paper published in IEEE Xplore (ICWITE)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="kicker">COMPETENCIES</div>
          <h2 className="title">Tech Stack.</h2>
          <div className="stack-grid">
            {stacks.map((stack) => (
              <div className="stack-card" key={stack.title}>
                <h3>
                  <span className="stack-icon">
                    <Icon name={stack.icon} />
                  </span>
                  {stack.title}
                </h3>
                <div className="chips">
                  {stack.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="research">
          <div className="kicker">RESEARCH</div>
          <h2 className="title">Research & Publications</h2>
          <div className="project-list">
            <div className="project-tile open">
              <button className="project-head" type="button">
                <div className="project-info">
                  <h3 className="case-title">
                    Enhancing Lung Cancer Screening by Analysing Clinically Symptoms Using Machine
                    Learning
                  </h3>
                  <p className="case-desc">
                    2025 IEEE International Conference for Women in Innovation, Technology &
                    Entrepreneurship (ICWITE)
                  </p>
                  <div className="project-chips">
                    <span className="chip">IEEE Xplore</span>
                    <span className="chip">Peer-reviewed Conference Paper</span>
                    <span className="chip">2025</span>
                  </div>
                </div>
              </button>
              <div className="project-body">
                <div className="case-section">
                  <h4>Overview</h4>
                  <p>
                    This paper focuses on improving lung cancer screening by analyzing clinical
                    symptoms using machine learning techniques.
                  </p>
                </div>
                <div className="case-section">
                  <h4>Problem Statement</h4>
                  <p>
                    Early lung cancer detection is challenging due to the limitations of
                    traditional screening methods and variability in symptom presentation.
                  </p>
                </div>
                <div className="case-section">
                  <h4>Solution Approach</h4>
                  <p>
                    Machine learning models were applied to clinical symptom data to improve
                    screening accuracy and support early identification.
                  </p>
                </div>
                <div className="case-section">
                  <h4>Outcome & Impact</h4>
                  <p>
                    The research was peer-reviewed and accepted for publication at an international
                    IEEE conference, demonstrating academic and technical contribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="kicker">CASE STUDIES</div>
          <h2 className="title">Engineering Impact</h2>
          <div className="project-list">
            {cases.map((item) => {
              const open = activeCase === item.name;
              return (
                <div className={`project-tile ${open ? "open" : ""}`} key={item.name}>
                  <button
                    className="project-head"
                    type="button"
                    onClick={() =>
                      setActiveCase((prev) => (prev === item.name ? null : item.name))
                    }
                  >
                    <div className="project-info">
                      <h3 className="case-title">{item.name}</h3>
                      <div className="project-chips">
                        {item.technologiesUsed.map((tech) => (
                          <span className="chip" key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="arrow">{open ? "-" : "+"}</div>
                  </button>
                  {open && (
                    <div className="project-body">
                      <div className="case-section">
                        <h4>Type</h4>
                        <p>{item.type}</p>
                      </div>
                      <div className="case-section">
                        <h4>Overview</h4>
                        <p>{item.overview}</p>
                      </div>
                      <div className="case-section">
                        <h4>Problem Statement</h4>
                        <p>{item.problemStatement}</p>
                      </div>
                      <div className="case-section">
                        <h4>Solution Approach</h4>
                        <p>{item.solutionApproach}</p>
                      </div>
                      <div className="case-section">
                        <h4>Technologies Used</h4>
                        <div className="case-chips">
                          {item.technologiesUsed.map((tag) => (
                            <span className="chip" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="case-section">
                        <h4>Key Features</h4>
                        <ul className="case-list">
                          {item.keyFeatures.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="case-section">
                        <h4>Outcome and Learnings</h4>
                        <p>{item.outcomeAndLearnings}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="kicker">CONNECT</div>
          <h2 className="title">Let's build together.</h2>
          <div className="contact-list">
            {contacts.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-icon">
                  <Icon name={item.icon} />
                </div>
                <div>
                  <div className="kicker" style={{ margin: 0, letterSpacing: "3px" }}>
                    {item.label}
                  </div>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="panel-card" style={{ marginTop: "22px" }}>
            <h3 style={{ marginTop: 0 }}>Direct Message</h3>
            <form className="form">
              <input className="input" placeholder="Name" />
              <input className="input" placeholder="Your Email" />
              <textarea className="input" rows={4} placeholder="Message"></textarea>
              <button className="submit" type="button">
                Send Signal
              </button>
            </form>
          </div>
        </section>
      </div>

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
