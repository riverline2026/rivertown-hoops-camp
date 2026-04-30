import "./styles.css";

export default function AboutPage() {
  return (
    <div className="page registration-page">
      <header className="site-nav">
        <div className="container nav-inner">
          <a href="/" className="nav-brand">
            <img
              src="/SEBA basketball alt.png"
              alt="SEBA"
              className="nav-logo"
            />
            <span className="nav-brand-text">SEBA</span>
          </a>

          <nav className="nav-links">
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
              src="/SEBA basketball.png"
              alt="SEBA logo"
              className="register-logo"
            />
            <div>
              <div className="section-eyebrow">About SEBA</div>
              <h1 className="section-title small-margin">
                Meet the Head Coach and Camp Director
              </h1>
              <p className="section-text">
                Southeast Basketball Academy is led by a local coach and parent
                focused on creating a fun, structured, and high-energy
                basketball experience for young basketball players in the Mt.
                Tabor, Franklin High School surrounding communities.
              </p>
            </div>
          </div>

          <div className="registration-form">
            <div className="form-section">
              <h3>Coach Nate Forster</h3>
              <p className="form-text">
                Nate is the Head Coach and Camp Director of Southeast Basketball
                Academy. He brings a lifelong connection to basketball, 6 years
                of experience coaching young kids, and a strong commitment to
                creating positive, structured environments for young athletes.
              </p>
              <p className="form-text">
                Coach Nate's approach to coaching is rooted in clarity,
                consistency, and positive encouragement. He believes players
                develop best when they are challenged, supported, and given
                clear expectations in a well-organized environment.
              </p>
            </div>

            <div className="form-section">
              <h3>Coaching Philosophy</h3>
              <ul className="policy-list">
                <li>
                  <strong>Fun comes first:</strong> Players should enjoy the
                  game and want to come back each day.
                </li>
                <li>
                  <strong>Positive coaching:</strong> Instruction is clear,
                  encouraging, and focused on growth.
                </li>
                <li>
                  <strong>Skill development:</strong> Players must learn the
                  foundational basics they can build their skills on in future
                  seasons.
                </li>
                <li>
                  <strong>Competition:</strong> Players put the instruction to
                  use through structured gameplay and scrimmages.
                </li>
                <li>
                  <strong>Accountability:</strong> Players are expected to
                  listen, try hard, and respect teammates and coaches.
                </li>
              </ul>
            </div>

            <div className="form-section">
              <h3>Why SEBA Was Created</h3>
              <p className="form-text">
                Southeast Basketball Academy is founded with the intent of
                building community through sport. Coach Nate hopes that this
                camp will help prepare young players for their competitive
                journey and develop a love of the game.
              </p>
              <p className="form-text">
                The goal is simple: provide a camp that is organized, energetic,
                and development-focused—while still feeling welcoming and fun
                for kids and easy for parents.
              </p>
            </div>

            <div className="form-section">
              <h3>Community Connection</h3>
              <p className="form-text">
                SEBA is rooted in the Southeast Portland community and is
                designed to serve families in the Franklin High School district.
                The camp is supported by volunteer counselors connected to the
                Franklin Basketball Program, helping create a strong sense of
                connection for young players.
              </p>
              <p className="form-text">
                While SEBA is independently operated, it is intentionally built
                to feel connected to the local basketball community and to give
                players something to grow into as they get older.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
