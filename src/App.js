import "./styles.css";
import RegistrationForm from "./RegistrationForm";
import WaiverPage from "./WaiverPage";
import PoliciesPage from "./PoliciesPage";
import AboutPage from "./AboutPage";
import CampDetailsPage from "./CampDetailsPage";

export default function App() {
  if (window.location.pathname === "/registration-form") {
    return <RegistrationForm />;
  }
  if (window.location.pathname === "/waiver-photo-release") {
    return <WaiverPage />;
  }
  if (window.location.pathname === "/camp-policies") {
    return <PoliciesPage />;
  }
  if (window.location.pathname === "/about") {
    return <AboutPage />;
  }
  if (window.location.pathname === "/camp-details") {
    return <CampDetailsPage />;
  }

  const infoBarItems = [
    "July 20–24, 2026",
    "Monday–Friday · 9:30AM–3:00PM",
    "Limited to 45 Players",
    "Rising 3rd–5th Graders · All Genders Welcome",
    "Franklin High School Area · Southeast Portland",
  ];

  const values = [
    {
      title: "Positive Coaching",
      text: "Instruction rooted in encouragement, effort, sportsmanship, and confidence-building.",
    },
    {
      title: "Real Skill Development",
      text: "Players work on fundamentals, technical skills, form shooting, free throws, and game application every day.",
    },
    {
      title: "Community Connection",
      text: "Built for families in the Franklin district and designed to help young players feel connected to the local basketball community.",
    },
  ];

  const dailyPlan = [
    "Fundamentals and movement preparation",
    "Fitness and conditioning drills",
    "Skill stations and technical teaching",
    "Competitive drills and form shooting",
    "Daily gameplay and scrimmages",
  ];

  const included = [
    "One full week of camp",
    "Reversible camp jersey",
    "Age and skill-based groupings",
    "Final-day tournament",
    "Achievement awards for every player",
  ];

  const pricing = [
    { label: "Standard Registration", value: "$275" },
    { label: "Early Registration", value: "$250" },
    { label: "Sibling Discount", value: "$20 off per sibling" },
  ];

  return (
    <div className="page">
      <header className="site-nav">
        <div className="container nav-inner">
          <a href="/" className="nav-brand" aria-label="Rivertown Hoops Camp home">
            <picture className="nav-logo-picture">
              <source media="(max-width: 768px)" srcSet="/assets/rhc-mark.png" />
              <img
                src="/assets/rhc-lockup.png"
                alt="Rivertown Hoops Camp"
                className="nav-logo nav-logo-rhc"
              />
            </picture>
          </a>
      
          <nav className="nav-links" aria-label="Main navigation">
            <div className="nav-item">
              <a href="/about">About</a>
            </div>
      
            <div className="nav-item">
              <a href="/camp-details">Camp Details</a>
            </div>
      
            <div className="nav-item">
              <a href="/registration-form">Register</a>
              <div className="dropdown">
                <a href="/registration-form">Registration Form</a>
                <a href="/waiver-photo-release">Waiver & Photo Release</a>
                <a href="/camp-policies">Camp Policies</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
      
        <img
          src="/assets/Dribbler.png"
          alt=""
          className="hero-silhouette silhouette-left"
        />
        <img
          src="/assets/Shooter.png"
          alt=""
          className="hero-silhouette silhouette-right"
        />
      
        <div className="container hero-centered">
          <img
            src="/assets/rhc-crest-primary.png"
            alt="Rivertown Hoops Camp crest logo"
            className="hero-logo hero-logo-rhc"
          />
      
          <h1 className="hero-title">Rivertown Hoops Camp</h1>
      
          <h2 className="hero-subtitle">
            Fun, focused basketball skills development for young players.
          </h2>
      
          <p className="hero-text hero-text-centered">
            Rivertown Hoops Camp is an elementary-aged, high-energy youth basketball
            camp offering an engaging experience rooted in having fun through
            competition and sport, positive coaching, skill building, and community
            values.
          </p>
      
          <p className="hero-text hero-text-centered hero-text-secondary">
            Designed by coaches and parents for local families and young players in
            Southeast Portland, RHC creates an organized, welcoming, energetic, and
            deeply connected space for kids and families in the Franklin High School
            area communities.
          </p>
      
          <div className="button-row button-row-centered">
            <a href="/registration-form" className="btn btn-primary">
              Register Now
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
      
          <div className="info-bar">
            {infoBarItems.map((item) => (
              <div key={item} className="info-bar-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section section-about">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Why Families Choose SEBA</div>
            <h2 className="section-title">
              A camp experience built around growth, confidence, and community.
            </h2>
            <p className="section-text">
              SEBA is designed for elementary-aged players who are ready to
              learn, compete, and enjoy the game. Our goal is to create a camp
              that feels organized, instructional, and energetic while staying
              grounded in positive encouragement and strong community values.
            </p>
          </div>

          <div className="card-grid three-up">
            {values.map((item) => (
              <div key={item.title} className="card value-card">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="section section-crimson">
        <div className="container schedule-intro">
          <img
            src="/SEBA basketball alt.png"
            alt="SEBA badge"
            className="section-logo-badge"
          />
          <div className="schedule-intro-copy">
            <div className="section-eyebrow section-eyebrow-light">
              Camp Schedule + Inclusions
            </div>
            <h2 className="section-title section-title-light">
              A full week of basketball, structure, competition, and fun.
            </h2>
          </div>
        </div>

        <div className="container two-column-section">
          <div className="card large-card card-contrast">
            <div className="section-eyebrow">Daily Structure</div>
            <h2 className="section-title small-margin">
              What a camp day looks like
            </h2>

            <div className="stack-list">
              {dailyPlan.map((item, index) => (
                <div key={item} className="number-row">
                  <div className="number-badge">{index + 1}</div>
                  <div className="number-text">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card large-card card-contrast">
            <div className="section-eyebrow">What’s Included</div>
            <h2 className="section-title small-margin">
              Camp registration includes
            </h2>

            <div className="included-list">
              {included.map((item) => (
                <div key={item} className="included-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="section section-register">
        <div className="container">
          <div className="trust-strip">
            <div className="trust-strip-item">
              All camp coaches complete background checks and orientation
            </div>
            <div className="trust-strip-item">
              Organized and hosted by local coaches and parents for SE Portland
              families and the Franklin community
            </div>
            <div className="trust-strip-item">
              All SEBA camp operations are insured and first aid kits are always
              available
            </div>
          </div>
        </div>

        <div className="container register-stack">
          <div className="register-header">
            <img
              src="/SEBA basketball.png"
              alt="SEBA logo"
              className="register-logo"
            />
            <div>
              <div className="section-eyebrow">Registration</div>
              <h2 className="section-title small-margin">
                Simple pricing for families
              </h2>
              <p className="section-text">
                Full payment is collected at registration. Early registration
                pricing is available during the first two weeks, and sibling
                discounts help make camp more accessible for families
                registering more than one player.
              </p>
            </div>
          </div>

          <div className="pricing-panel pricing-panel-full">
            <div className="pricing-list">
              {pricing.map((item) => (
                <div key={item.label} className="price-row">
                  <div className="price-label">{item.label}</div>
                  <div className="price-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card large-card">
            <div className="section-eyebrow">Registration Details</div>
            <h2 className="section-title small-margin">
              Reserve your player’s spot
            </h2>
            <p className="section-text">
              Registration will collect player and family information, including
              basketball experience and emergency contact details. The waiver
              and photo release will follow after the registration form.
            </p>

            <div className="mini-grid">
              <div className="mini-card">
                <div className="mini-label">Who It’s For</div>
                <div className="mini-value">Rising 3rd–5th graders</div>
              </div>
              <div className="mini-card">
                <div className="mini-label">Camp Size</div>
                <div className="mini-value">45-player maximum</div>
              </div>
              <div className="mini-card">
                <div className="mini-label">Coaching Support</div>
                <div className="mini-value">
                  Parent coaches + Franklin player volunteers
                </div>
              </div>
              <div className="mini-card">
                <div className="mini-label">Final Day</div>
                <div className="mini-value">Tournament + awards</div>
              </div>
            </div>

            <div className="cta-box cta-buttons-only">
              <a href="/registration-form" className="btn btn-primary">
                Begin Registration!
              </a>
              <a href="/contact" className="btn btn-secondary">
                Have a question? We're here to help!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
