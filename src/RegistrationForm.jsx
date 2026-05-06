import { useState } from "react";
import "./styles.css";

const initialForm = {
  camper_first_name: "",
  camper_last_name: "",
  camper_preferred_name: "",
  camper_rising_grade: "",
  camper_age: "",
  camper_school: "",
  camper_shirt_size: "",

  parent1_first_name: "",
  parent1_last_name: "",
  parent1_relationship: "",
  parent1_email: "",
  parent1_phone: "",

  parent2_first_name: "",
  parent2_last_name: "",
  parent2_relationship: "",
  parent2_email: "",
  parent2_phone: "",

  emergency_contact_name: "",
  emergency_contact_relationship: "",
  emergency_contact_phone: "",

  authorized_pickup_names: "",

  medical_conditions: "",
  allergies: "",
  medications: "",
  activity_restrictions: "",
  additional_notes: "",

  waiver_accepted: false,
  medical_authorization_accepted: false,
  camp_policies_accepted: false,

  photo_release_choice: "",
  photo_release_notes: "",

  electronic_signature: "",
  signature_date: new Date().toISOString().slice(0, 10),
};

export default function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
    submissionId: "",
  });

  function updateField(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (submitState.status === "submitting") {
      return;
    }

    setSubmitState({
      status: "submitting",
      message: "Submitting registration...",
      submissionId: "",
    });

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          form_version: "v1",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Registration could not be submitted.");
      }

      setSubmitState({
        status: "success",
        message:
          "Registration submitted successfully. Please save your confirmation number.",
        submissionId: data.submission_id,
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error.message ||
          "Something went wrong. Please try again or contact camp staff.",
        submissionId: "",
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const isSubmitting = submitState.status === "submitting";
  const isSuccess = submitState.status === "success";

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
                Complete this single registration form to provide camper information,
                parent/guardian details, emergency contacts, medical notes, waiver
                acceptance, camp policy acknowledgment, photo release preference, and
                electronic signature.
              </p>
            </div>
          </div>

          {submitState.status !== "idle" && (
            <div className={`form-status form-status-${submitState.status}`}>
              <p>{submitState.message}</p>
              {submitState.submissionId && (
                <p>
                  <strong>Confirmation ID:</strong> {submitState.submissionId}
                </p>
              )}
            </div>
          )}

          {!isSuccess && (
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Player Information</h3>

                <div className="form-grid">
                  <label>
                    Player First Name *
                    <input
                      type="text"
                      name="camper_first_name"
                      value={form.camper_first_name}
                      onChange={updateField}
                      required
                    />
                  </label>

                  <label>
                    Player Last Name *
                    <input
                      type="text"
                      name="camper_last_name"
                      value={form.camper_last_name}
                      onChange={updateField}
                      required
                    />
                  </label>

                  <label>
                    Preferred Name
                    <input
                      type="text"
                      name="camper_preferred_name"
                      value={form.camper_preferred_name}
                      onChange={updateField}
                    />
                  </label>

                  <label>
                    Rising Grade *
                    <select
                      name="camper_rising_grade"
                      value={form.camper_rising_grade}
                      onChange={updateField}
                      required
                    >
                      <option value="">Select grade</option>
                      <option value="Rising 3rd">Rising 3rd</option>
                      <option value="Rising 4th">Rising 4th</option>
                      <option value="Rising 5th">Rising 5th</option>
                    </select>
                  </label>

                  <label>
                    Player Age *
                    <input
                      type="text"
                      name="camper_age"
                      value={form.camper_age}
                      onChange={updateField}
                      required
                    />
                  </label>

                  <label>
                    School
                    <input
                      type="text"
                      name="camper_school"
                      value={form.camper_school}
                      onChange={updateField}
                    />
                  </label>

                  <label>
                    Shirt Size
                    <select
                      name="camper_shirt_size"
                      value={form.camper_shirt_size}
                      onChange={updateField}
                    >
                      <option value="">Select size</option>
                      <option value="Youth Small">Youth Small</option>
                      <option value="Youth Medium">Youth Medium</option>
                      <option value="Youth Large">Youth Large</option>
                      <option value="Youth XL">Youth XL</option>
                      <option value="Adult Small">Adult Small</option>
                      <option value="Adult Medium">Adult Medium</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="form-section">
                <h3>Parent / Guardian Information</h3>

                <div className="form-grid">
                  <label>
                    Parent / Guardian First Name *
                    <input
                      type="text"
                      name="parent1_first_name"
                      value={form.parent1_first_name}
                      onChange={updateField}
                      required
                    />
                  </label>

                  <label>
                    Parent / Guardian Last Name *
                    <input
                      type="text"
                      name="parent1_last_name"
                      value={form.parent1_last_name}
                      onChange={updateField}
                      required
                    />
                  </label>

                  <label>
                    Relationship to Player
                    <input
                      type="text"
                      name="parent1_relationship"
                      value={form.parent1_relationship}
                      onChange={updateField}
                      placeholder="Parent, guardian, grandparent, etc."
                    />
                  </label>

                  <label>
                    Email *
                    <input
                      type="email"
                      name="parent1_email"
                      value={form.parent1_email}
                      onChange={updateField}
                      required
                    />
                  </label>

                  <label>
                    Phone *
                    <input
                      type="tel"
                      name="parent1_phone"
                      value={form.parent1_phone}
                      onChange={updateField}
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="form-section">
                <h3>Second Parent / Guardian Optional</h3>

                <div className="form-grid">
                  <label>
                    First Name
                    <input
                      type="text"
                      name="parent2_first_name"
                      value={form.parent2_first_name}
                      onChange={updateField}
                    />
                  </label>

                  <label>
                    Last Name
                    <input
                      type="text"
                      name="parent2_last_name"
                      value={form.parent2_last_name}
                      onChange={updateField}
                    />
                  </label>

                  <label>
                    Relationship to Player
                    <input
                      type="text"
                      name="parent2_relationship"
                      value={form.parent2_relationship}
                      onChange={updateField}
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      name="parent2_email"
                      value={form.parent2_email}
                      onChange={updateField}
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      type="tel"
                      name="parent2_phone"
                      value={form.parent2_phone}
                      onChange={updateField}
                    />
                  </label>
                </div>
              </div>

              <div className="form-section">
                <h3>Emergency Contact + Authorized Pickup</h3>

                <div className="form-grid">
                  <label>
                    Emergency Contact Name *
                    <input
                      type="text"
                      name="emergency_contact_name"
                      value={form.emergency_contact_name}
                      onChange={updateField}
                      required
                    />
                  </label>

                  <label>
                    Emergency Contact Relationship
                    <input
                      type="text"
                      name="emergency_contact_relationship"
                      value={form.emergency_contact_relationship}
                      onChange={updateField}
                    />
                  </label>

                  <label>
                    Emergency Contact Phone *
                    <input
                      type="tel"
                      name="emergency_contact_phone"
                      value={form.emergency_contact_phone}
                      onChange={updateField}
                      required
                    />
                  </label>
                </div>

                <label className="full-width-label">
                  Authorized Pickup Names *
                  <textarea
                    name="authorized_pickup_names"
                    rows="3"
                    value={form.authorized_pickup_names}
                    onChange={updateField}
                    placeholder="List all adults authorized to pick up your player. Include parent/guardian names if applicable."
                    required
                  />
                </label>

                <p className="form-note">
                  Authorized pickup adults may be asked to show photo ID at pickup.
                </p>
              </div>

              <div className="form-section">
                <h3>Health + Safety</h3>

                <label className="full-width-label">
                  Medical Conditions *
                  <textarea
                    name="medical_conditions"
                    rows="3"
                    value={form.medical_conditions}
                    onChange={updateField}
                    placeholder='Enter "None" if not applicable.'
                    required
                  />
                </label>

                <label className="full-width-label">
                  Allergies *
                  <textarea
                    name="allergies"
                    rows="3"
                    value={form.allergies}
                    onChange={updateField}
                    placeholder='Enter "None" if not applicable.'
                    required
                  />
                </label>

                <label className="full-width-label">
                  Medications
                  <textarea
                    name="medications"
                    rows="3"
                    value={form.medications}
                    onChange={updateField}
                    placeholder='Enter "None" if not applicable.'
                  />
                </label>

                <label className="full-width-label">
                  Activity Restrictions
                  <textarea
                    name="activity_restrictions"
                    rows="3"
                    value={form.activity_restrictions}
                    onChange={updateField}
                    placeholder='Enter "None" if not applicable.'
                  />
                </label>

                <label className="full-width-label">
                  Additional Notes
                  <textarea
                    name="additional_notes"
                    rows="4"
                    value={form.additional_notes}
                    onChange={updateField}
                    placeholder="Basketball experience, comfort level, sibling information, EpiPen notes, or anything else camp staff should know."
                  />
                </label>
              </div>

              <div className="form-section">
                <h3>Waiver, Medical Authorization + Camp Policies</h3>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="waiver_accepted"
                    checked={form.waiver_accepted}
                    onChange={updateField}
                    required
                  />
                  <span>
  I have read and accept the{" "}
  <a href="/waiver-photo-release">waiver and release of liability</a>{" "}
  for Rivertown Hoops Camp. *
</span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="medical_authorization_accepted"
                    checked={form.medical_authorization_accepted}
                    onChange={updateField}
                    required
                  />
                  <span>
  I authorize camp staff to seek emergency medical care for my player
  if needed and I cannot be reached, as described in the{" "}
  <a href="/waiver-photo-release">waiver and medical authorization</a>. *
</span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="camp_policies_accepted"
                    checked={form.camp_policies_accepted}
                    onChange={updateField}
                    required
                  />
                  <span>
  I have read and agree to the{" "}
  <a href="/camp-policies">camp policies</a>, including behavior,
  check-in/check-out, and participation expectations. *
</span>
                </label>

                <p className="form-note">
                  Camp policies remain available on the Camp Policies page for
                  reference.
                </p>
              </div>

              <div className="form-section">
                <h3>Photo Release</h3>

                <div className="radio-stack">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="photo_release_choice"
                      value="opt_in"
                      checked={form.photo_release_choice === "opt_in"}
                      onChange={updateField}
                      required
                    />
                    <span>
                      I grant permission for Rivertown Hoops Camp to use photos or
                      videos of my player for camp-related communications and
                      promotion.
                    </span>
                  </label>

                  <label className="radio-label">
                    <input
                      type="radio"
                      name="photo_release_choice"
                      value="opt_out"
                      checked={form.photo_release_choice === "opt_out"}
                      onChange={updateField}
                      required
                    />
                    <span>
                      I do not grant permission for my player to be included in camp
                      photos or videos used for promotional purposes.
                    </span>
                  </label>
                </div>

                <label className="full-width-label">
                  Photo Release Notes
                  <textarea
                    name="photo_release_notes"
                    rows="3"
                    value={form.photo_release_notes}
                    onChange={updateField}
                    placeholder="Optional notes about photo release preference."
                  />
                </label>
              </div>

              <div className="form-section">
                <h3>Electronic Signature</h3>

                <div className="form-grid">
                  <label>
                    Electronic Signature *
                    <input
                      type="text"
                      name="electronic_signature"
                      value={form.electronic_signature}
                      onChange={updateField}
                      placeholder="Type your full legal name"
                      required
                    />
                  </label>

                  <label>
                    Signature Date *
                    <input
                      type="date"
                      name="signature_date"
                      value={form.signature_date}
                      onChange={updateField}
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="form-next-step">
                <div>
                  <h3>Submit Registration</h3>
                  <p>
                    Submit once to reserve your player’s spot. You will receive a
                    confirmation ID after the registration is recorded.
                  </p>
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}