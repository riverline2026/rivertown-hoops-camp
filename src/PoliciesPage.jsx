import "./styles.css";

export default function PoliciesPage() {
  return (
    <div className="page registration-page">
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
              src="/SEBA basketball.png"
              alt="SEBA logo"
              className="register-logo"
            />
            <div>
              <div className="section-eyebrow">Camp Policies</div>
              <h1 className="section-title small-margin">
                Parent and player expectations
              </h1>
              <p className="section-text">
                These policies are designed to create a safe, organized,
                positive, and energetic camp experience for players, families,
                coaches, and volunteers.
              </p>
            </div>
          </div>

          <div className="registration-form">
            <div className="form-section">
              <h3>Camp Philosophy</h3>
              <p className="form-text">
                Southeast Basketball Academy is built around positive coaching,
                skill development, competition, sportsmanship, and community.
                Players are expected to try hard, listen well, support
                teammates, and enjoy the game.
              </p>
            </div>

            <div className="form-section">
              <h3>Player Conduct</h3>
              <p className="form-text">
                Southeast Basketball Academy understands to that listening and
                following complex directions or intricate drills can be
                challenging for players at this age. SEBA coaches believe that
                the camp environment creates a unique opportunity to use a fun,
                positive, structured and competitive environment to teach these
                skills. Players and coaches will be held accountable to the
                following player conduct expectations.
              </p>
              <ul className="policy-list">
                <li>
                  Players must follow coach instructions and gym rules and are
                  expected to show effort, respect, sportsmanship, and positive
                  teammate behavior.
                </li>
                <li>
                  Coaches may use conditioning drills or other team oriented
                  methods to enforce accountability to player conduct
                  expectations.
                </li>
                <li>
                  Players will not be singled out or disciplined in a demeaning
                  or public manner but may be pulled aside to privately address
                  poor behavior or asked to sit out for a short period of time.
                </li>
                <li>
                  Unsafe, disrespectful, or disruptive behavior may result in a
                  parent/guardian being contacted.
                </li>
                <li>
                  SEBA reserves the right to remove a player from camp if
                  behavior creates a safety concern or materially disrupts the
                  camp environment.
                </li>
              </ul>
            </div>

            <div className="form-section">
              <h3>Daily Structure + Participation</h3>
              <p className="form-text">
                Southeast Basketball Academy recognizes that 9:30 am to 3:00 pm
                is a long day of activities. To support the player's positive
                and fun experience the entire day and preserve energy to
                participate in full, there will be frequent water breaks,
                morning and afternoon snack breaks, and lunch.
              </p>
              <p className="form-text">
                Camp activities will require and include movement preparation
                (stretching), conditioning, skill stations, competitive drills,
                form shooting, gameplay, and scrimmages. Players will be
                encouraged to hustle and exert effort in all aspects of camp and
                should be prepared for an active day of basketball and athletic
                activities and movement.
              </p>
              <p className="form-text">
                Players will be grouped by age, grade, skill level, and coach
                discretion to support safety, learning, and balanced
                competition.
              </p>
            </div>

            <div className="form-section">
              <h3>What to Bring</h3>
              <p className="form-text">
                Please read the following section carefully. Sending your player
                with the right gear and fuel for the day will set them up for a
                successful camp experience.
              </p>
              <ul className="policy-list">
                <li>
                  Basketball shoes or athletic shoes appropriate for gym use are
                  required. Shoes should be clean and free of dirt to preserve a
                  clean and grippy playing surface.
                </li>
                <li>
                  Players that arrive without addequate footware will not be
                  permitted to participate.
                </li>
                <li>
                  Jeans or non-athletic pants are not allowed. Players should
                  wear shorts or athletic pants. Tights or leg sleeves and arm
                  sleeves under shorts and jerseys are permitted.
                </li>
                <li>
                  All players must bring a water bottle clearly labeled with the
                  player’s name. We ask that parents refrain from filling water
                  bottles with gatorade or any other sports drink or juice.
                </li>
                <li>
                  All players are responsible for bringing their own lunch and
                  snacks. There will be 2 snack breaks in the day. Please avoid
                  sugary snacks or candy. Any reusable containers for lunch or
                  snack should be labeled with the player's name.
                </li>
                <li>
                  Players should bring all gear in an appropriate gym bag or
                  backpack that is labeled with their name.
                </li>
                <li>
                  Players may bring a basketball but we ask that they are the
                  correct size (Junior) and are for indoor basketball use. Any
                  basketball should be clearly labeled with the player’s name.
                </li>
                <li>
                  It is the player's responsibility to bring any required
                  medical items, including EpiPen that is not expired if
                  applicable.
                </li>
              </ul>
            </div>

            <div className="form-section">
              <h3>Drop-off + Pickup</h3>
              <ul className="policy-list">
                <li>
                  Players must be checked in and picked up by a parent,
                  guardian, or authorized pickup adult.
                </li>
                <li>
                  Authorized pickup adults may be asked to show photo ID at
                  pickup.
                </li>
                <li>
                  Families should communicate any pickup changes before the end
                  of the camp day whenever possible.
                </li>
                <li>
                  SEBA staff will not release a player to someone who is not
                  listed as an authorized pickup adult.
                </li>
              </ul>
            </div>

            <div className="form-section">
              <h3>Health + Safety</h3>
              <ul className="policy-list">
                <li>
                  Families must provide accurate medical, allergy, and emergency
                  contact information during registration.
                </li>
                <li>
                  If a player requires an EpiPen, families must send a
                  non-expired EpiPen each day in the player’s backpack or gym
                  bag.
                </li>
                <li>
                  SEBA staff may provide basic first aid and contact emergency
                  services if needed.
                </li>
                <li>
                  If emergency care or transport is needed and a parent/guardian
                  cannot be reached, SEBA may arrange emergency medical
                  assistance.
                </li>
              </ul>
            </div>

            <div className="form-section">
              <h3>Coach Screening + Insurance</h3>
              <p className="form-text">
                All coaches will complete background checks before camp. Camp
                operations will be insured. SEBA is organized by local coaches
                and parents with a focus on building community, player safety,
                having fun, clear structure, and positive instruction.
              </p>
            </div>

            <div className="form-section">
              <h3>Communication</h3>
              <p className="form-text">
                SEBA will communicate important camp updates by email. Families
                are responsible for reviewing camp communications before and
                during camp, including schedule reminders, check-in details,
                what to bring, and any operational updates.
              </p>
            </div>

            <div className="form-section">
              <h3>Refunds + Cancellations</h3>
              <p className="form-text">
                Registration is considered final once submitted and paid. SEBA
                will review refund or cancellation requests on a case-by-case
                basis, including illness, injury, family emergency, or other
                extenuating circumstances.
              </p>
              <p className="form-text">
                If SEBA must cancel camp for reasons outside of normal control,
                families will receive follow-up communication regarding refund
                or credit options.
              </p>
            </div>

            <div className="form-section">
              <h3>Photo + Media</h3>
              <p className="form-text">
                Photo and video consent is optional and is handled through the
                Waiver + Photo Release page. SEBA will only use approved photos
                or videos in SEBA-owned and SEBA-controlled communications, such
                as the SEBA website, SEBA social media, and future camp
                announcements.
              </p>
            </div>

            <div className="form-next-step">
              <div>
                <h3>Ready to continue?</h3>
                <p>
                  After reviewing these policies, return to the waiver and photo
                  release page to complete registration.
                </p>
              </div>

              <a href="/waiver-photo-release" className="btn btn-primary">
                Return to Waiver
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
