import "./styles.css";

export default function RegistrationForm() {
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
              <div className="section-eyebrow">Registration Form</div>
              <h1 className="section-title small-margin">
                Reserve your player’s spot
              </h1>
              <p className="section-text">
                Complete the player and family information below. After this
                form, families will complete the waiver and photo release.
              </p>
            </div>
          </div>

          <form
            className="registration-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Registration submitted. Next step: Waiver & Photo Release."
              );
            }}
          >
            <div className="form-section">
              <h3>Player Information</h3>

              <div className="form-grid">
                <label>
                  Player First Name
                  <input type="text" name="playerFirstName" />
                </label>

                <label>
                  Player Last Name
                  <input type="text" name="playerLastName" />
                </label>

                <label>
                  Preferred Name
                  <input type="text" name="preferredName" />
                </label>

                <label>
                  Preferred Pronouns
                  <input type="text" name="preferredPronouns" />
                </label>

                <label>
                  Grade Entering Fall 2026
                  <select name="grade">
                    <option value="">Select grade</option>
                    <option>3rd Grade</option>
                    <option>4th Grade</option>
                    <option>5th Grade</option>
                  </select>
                </label>

                <label>
                  School
                  <input type="text" name="school" />
                </label>
              </div>

              <label className="full-width-label">
                Basketball Experience
                <textarea
                  name="basketballExperience"
                  rows="4"
                  placeholder="Tell us about your player's basketball experience, comfort level, or anything coaches should know."
                />
              </label>
            </div>

            <div className="form-section">
              <h3>Parent / Guardian Information</h3>

              <div className="form-grid">
                <label>
                  Parent / Guardian Name
                  <input type="text" name="guardianName" />
                </label>

                <label>
                  Email
                  <input type="email" name="guardianEmail" />
                </label>

                <label>
                  Phone
                  <input type="tel" name="guardianPhone" />
                </label>

                <label>
                  Emergency Contact
                  <input type="text" name="emergencyContact" />
                </label>

                <label>
                  Emergency Contact Phone
                  <input type="tel" name="emergencyPhone" />
                </label>

                <label>
                  Authorized Pickup Names
                  <input type="text" name="authorizedPickup" />
                </label>
              </div>
              <p className="form-note">
                Authorized pickup adults may be asked to show photo ID at
                pickup.
              </p>
            </div>

            <div className="form-section">
              <h3>Health + Safety</h3>

              <label className="full-width-label">
                Medical Notes, Allergies, or Other Important Information
                <textarea
                  name="medicalNotes"
                  rows="4"
                  placeholder="Please include allergies, medical notes, medications, or anything camp staff should know."
                />
              </label>

              <div className="form-grid">
                <label>
                  Does your player’s allergy require an EpiPen?
                  <select name="epiPenRequired">
                    <option value="">Select one</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not applicable</option>
                  </select>
                </label>

                <label>
                  EpiPen Confirmation
                  <select name="epiPenConfirmation">
                    <option value="">Select one</option>
                    <option>
                      Yes, I will send a non-expired EpiPen in my player’s
                      backpack or gym bag
                    </option>
                    <option>Not applicable</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="form-section">
              <h3>More Information</h3>

              <div className="form-grid">
                <label>
                  Jersey Size
                  <select name="jerseySize">
                    <option value="">Select size</option>
                    <option>Youth Small</option>
                    <option>Youth Medium</option>
                    <option>Youth Large</option>
                    <option>Youth XL</option>
                    <option>Adult Small</option>
                  </select>
                </label>

                <label>
                  Registering a Sibling?
                  <select name="sibling">
                    <option value="">Select one</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </label>

                <label>
                  Sibling Name
                  <input
                    type="text"
                    name="siblingName"
                    placeholder="If yes, enter sibling’s name"
                  />
                </label>
              </div>
            </div>
            <div className="form-next-step">
              <div>
                <h3>Submit Registration</h3>
                <p>
                  After submitting this form, families will continue to the
                  waiver and photo release page.
                </p>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
