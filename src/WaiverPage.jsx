import "./styles.css";

export default function WaiverPage() {
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
  src="/assets/rhc-crest-primary.png"
  alt="Rivertown Hoops Camp logo"
  className="register-logo"
/>
            <div>
              <div className="section-eyebrow">Waiver + Photo Release</div>
              <h1 className="section-title small-margin">
                Complete waiver and release
              </h1>
              <p className="section-text">
                Please review the following carefully. A parent or legal
                guardian must acknowledge and agree before participation in
                Rivertown Hoops Camp.
              </p>
            </div>
          </div>

          <form
            className="registration-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Waiver and photo release submitted.");
            }}
          >
            <div className="form-section">
              <h3>Parent / Guardian Liability Waiver</h3>
              <p className="form-text">
                I am the parent or legal guardian of the minor participant being
                registered for Rivertown Hoops Camp. I understand that
                basketball, fitness activities, drills, scrimmages, games, and
                related camp activities involve inherent risks, including but
                not limited to falls, collisions, contact with other players,
                physical exertion, dehydration, sprains, strains, broken bones,
                head injuries, or other injury.
              </p>
              <p className="form-text">
                I knowingly and voluntarily allow my child/dependent to
                participate in Rivertown Hoops Camp and assume the risks
                associated with their participation. To the fullest extent
                permitted by law, I release, waive, discharge, and hold harmless
                Rivertown Hoops Camp, Riverline Partners LLC, coaches,
                volunteers, staff, contractors, and affiliated partners from
                claims arising out of my child/dependent’s participation in camp
                activities.
              </p>
              <p className="form-text">
                I understand that this waiver is intended to apply to claims
                relating to injury, illness, property loss, or damages connected
                with participation in Rivertown Hoops Camp, except where
                such release is prohibited by law.
              </p>
            </div>

            <div className="form-section">
              <h3>Medical Authorization</h3>
              <p className="form-text">
                I authorize Rivertown Hoops Camp staff, coaches, or
                volunteers to provide basic first aid and to contact emergency
                medical services if my child/dependent becomes ill, injured, or
                requires urgent attention during camp.
              </p>
              <p className="form-text">
                If emergency care is needed and I cannot be reached, I authorize
                RHC staff to arrange medical transport, including ambulance
                transport when appropriate, to a hospital, urgent care, or other
                medical facility. I understand that I am responsible for any
                medical, emergency, transportation, or treatment costs incurred.
              </p>
              <p className="form-text">
                I confirm that the medical and allergy information provided
                during registration is accurate to the best of my knowledge and
                that I will notify RHC of any changes before camp begins.
              </p>
            </div>

            <div className="form-section">
              <h3>Photo + Media Release</h3>
              <p className="form-text">
                Rivertown Hoops Camp may take photos or short videos
                during camp for limited use in RHC-owned and RHC-controlled
                communications, including the RHC website, RHC social media
                accounts, future camp announcements, and camp-related
                promotional materials.
              </p>
              <p className="form-text">
                RHC will not sell player images or intentionally use a child’s
                full name in public promotional posts without additional
                permission.
              </p>
              <p className="form-text">
                Photo and media consent is optional and is not required for camp
                registration.
              </p>

              <label className="checkbox-row">
                <input type="checkbox" />I consent to RHC using photos or
                videos of my child/dependent for the limited uses described
                above.
              </label>
            </div>

            <div className="form-section">
              <h3>Camp Policies</h3>

              <p className="form-text">
                I acknowledge that I have reviewed and agree to the Southeast
                Basketball Academy camp policies, which are designed to ensure a
                safe, organized, and positive experience for all players and
                families.
              </p>

              <ul className="policy-list">
                <li>
                  <strong>Player Conduct:</strong> Players are expected to
                  listen to coaches, demonstrate effort and sportsmanship, and
                  contribute to a positive environment.
                </li>
                <li>
                  <strong>Daily Participation:</strong> Camp includes drills,
                  conditioning, gameplay, and scrimmages. Players are expected
                  to fully participate unless limited by a disclosed medical
                  condition.
                </li>
                <li>
                  <strong>What to Bring:</strong> Players should bring a
                  basketball (if they have one), water bottle, lunch/snacks, and
                  any required medical items (including EpiPen if applicable).
                </li>
                <li>
                  <strong>Health + Medical:</strong> Families are responsible
                  for providing accurate medical and allergy information and
                  ensuring required medications are available each day of camp.
                </li>
                <li>
                  <strong>Drop-off + Pickup:</strong> Parents/guardians must
                  follow designated drop-off and pickup procedures. Authorized
                  pickup adults may be asked to show photo ID.
                </li>
                <li>
                  <strong>Communication:</strong> RHC will communicate
                  important updates via email. Families are responsible for
                  reviewing communications prior to and during camp.
                </li>
                <li>
                  <strong>Refunds + Cancellations:</strong> Registration is
                  considered final once submitted. Any exceptions will be
                  handled at RHC’s discretion.
                </li>
              </ul>

              <p className="form-text">
                Full policy details are available on the{" "}
                <a href="/camp-policies" className="inline-link">
                  RHC Camp Policies page
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
