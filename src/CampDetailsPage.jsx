import "./styles.css";

export default function CampDetailsPage() {
  return (
    <div className="page registration-page camp-details-page">
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

      <main className="section section-register">
        <div className="container register-stack">
          <div className="register-header">
            <img
              src="/assets/rhc-crest-primary.png"
              alt="Rivertown Hoops Camp logo"
              className="register-logo"
            />
            <div>
              <div className="section-eyebrow">Camp Details</div>
              <h1 className="section-title small-margin">
                What families can expect from RHC
              </h1>
              <p className="section-text">
                Rivertown Hoops Camp is designed as a full-week,
                high-energy youth basketball camp built around skill
                development, positive coaching, competition, and community.
              </p>
            </div>
          </div>

          <div className="registration-form">
            <div className="camp-overview-grid">
              <div className="form-section">
                <h3>Camp Overview</h3>
                <ul className="policy-list">
                  <li>
                    <strong>Dates:</strong> July 20–24, 2026
                  </li>
                  <li>
                    <strong>Time:</strong> Monday–Friday, 9:30AM–3:00PM
                  </li>
                  <li>
                    <strong>Who:</strong> Rising 3rd–5th graders, all genders
                    welcome
                  </li>
                  <li>
                    <strong>Location:</strong> Franklin High School Main Gym,
                    5405 SE Woodward St, Portland, OR 97206
                  </li>
                  <li>
                    <strong>Capacity:</strong> Limited to 45 players
                  </li>
                </ul>
              </div>

              <div className="form-section location-map-card">
                <h3>Gym Location</h3>
                <img
                  src="/assets/Gym Location.png"
                  alt="Franklin High School gym entrance and parking map"
                  className="location-map-image"
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Coaching + Support</h3>
              <p className="form-text">
                RHC is led by Coach Nate Forster with support from parent
                coaches and volunteer counselors connected to the Franklin
                Basketball Program. The camp is independently operated and is
                designed to give young players a positive, local basketball
                experience connected to the broader Franklin-area community.
              </p>
            </div>

            <div className="form-section">
              <h3>Daily Structure</h3>
              <p className="form-text">
                Parents and players can expect the same overarching structure to
                camp activities each day focusing on warmup and readiness,
                shooting form and fundamentals repetition and movement, various
                drills promoting fitness and conditioning, skill stations
                delivering technical instruction, and competitive gameplay
                drills and scenarios including scrimmaging.
              </p>

              <h4 className="form-subheading">Example Camp Day Schedule</h4>

              <ul className="policy-list schedule-list">
                <li>
                  <strong>9:30 am to 9:45 am:</strong> Check-in and free
                  shoot-around
                </li>
                <li>
                  <strong>9:45 am to 10:00 am:</strong> Group stretching and
                  light bodyweight exercise
                </li>
                <li>
                  <strong>10:00 am to 10:30 am:</strong> High intensity body
                  movements (running, footwork, jumping) immediately followed by
                  free-throw practice
                </li>
                <li>
                  <strong>WATER</strong>
                </li>
                <li>
                  <strong>10:35 am to 11:05 am:</strong> Dribble gather and form
                  shooting drills
                </li>
                <li>
                  <strong>WATER</strong>
                </li>
                <li>
                  <strong>11:10 am to 11:30 am:</strong> Defensive drills
                </li>
                <li>
                  <strong>WATER</strong>
                </li>
                <li>
                  <strong>11:35 am to 12:00 pm:</strong> 3v3 game play focusing
                  on spacing and “keeping the triangle”
                </li>
                <li>
                  <strong>12:00 pm to 12:30 pm: LUNCH</strong>
                </li>
                <li>
                  <strong>12:30 pm to 12:45 pm:</strong> Open shoot-around
                </li>
                <li>
                  <strong>12:45 pm to 1:00 pm:</strong> Group stretching and
                  light bodyweight exercise
                </li>
                <li>
                  <strong>1:00 pm to 1:30 pm:</strong> High intensity body
                  movements (running, footwork, jumping) immediately followed by
                  free-throw practice
                </li>
                <li>
                  <strong>WATER</strong>
                </li>
                <li>
                  <strong>1:35 pm to 2:05 pm:</strong> Team breakouts and team
                  offense fundamentals
                </li>
                <li>
                  <strong>WATER</strong>
                </li>
                <li>
                  <strong>2:10 pm to 2:30 pm:</strong> Team breakouts and team
                  defense fundamentals
                </li>
                <li>
                  <strong>WATER</strong>
                </li>
                <li>
                  <strong>2:35 pm to 2:55 pm:</strong> 5v5 game play focusing on
                  implementing daily instruction
                </li>
                <li>
                  <strong>WATER</strong>
                </li>
                <li>
                  <strong>3:00 pm to 3:20 pm:</strong> Shooting and dribbling
                  skill games
                </li>
                <li>
                  <strong>3:20 pm to 3:30 pm:</strong> Camp huddle and breakdown
                </li>
                <li>
                  <strong>3:30 pm:</strong> Pick up
                </li>
              </ul>

              <p className="form-note">
                <em>
                  Note: Day 1 will have longer check-in and registration where
                  campers will receive their reversibles and get a feel for
                  camp, including a camp meeting to go over ground rules, goals,
                  and expectations.
                </em>
              </p>
            </div>

            <div className="camp-two-column">
              <div className="form-section">
                <h3>What’s Included</h3>
                <ul className="policy-list">
                  <li>One full week of camp</li>
                  <li>Reversible camp jersey</li>
                  <li>Age and skill-based groupings</li>
                  <li>Final-day tournament</li>
                  <li>Achievement awards for every player</li>
                </ul>
              </div>

              <div className="form-section">
                <h3>Pricing</h3>
                <ul className="policy-list">
                  <li>
                    <strong>Standard Registration:</strong> $275
                  </li>
                  <li>
                    <strong>Early Registration:</strong> $250 during the first
                    two weeks
                  </li>
                  <li>
                    <strong>Sibling Discount:</strong> $20 off per sibling
                  </li>
                  <li>
                    <strong>Payment:</strong> Full payment collected at
                    registration
                  </li>
                </ul>
              </div>
            </div>

            <div className="form-next-step">
              <div>
                <h3>Ready to register?</h3>
                <p>
                  Start with the registration form, then complete the waiver and
                  photo release.
                </p>
              </div>

              <a href="/registration-form" className="btn btn-primary">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
