import { useState } from "react";
import "./styles.css";

const MODAL_CONTENT = {
  waiver: {
    title: "Waiver and Release / Medical Authorization",
    fullPageUrl: "/waiver-photo-release",
    body: (
      <>
        <section className="registration-modal-section">
          <h3>Waiver and Release of Liability</h3>
          <p>
            I am the parent or legal guardian of the minor participant being
                registered for Rivertown Hoops Camp. I understand that
                basketball, fitness activities, drills, scrimmages, games, and
                related camp activities involve inherent risks, including but
                not limited to falls, collisions, contact with other players,
                physical exertion, dehydration, sprains, strains, broken bones,
                head injuries, or other injury.
          </p>
          <p>
            I knowingly and voluntarily allow my child/dependent to
                participate in Rivertown Hoops Camp and assume the risks
                associated with their participation. To the fullest extent
                permitted by law, I release, waive, discharge, and hold harmless
                Rivertown Hoops Camp, Riverline Partners LLC, coaches,
                volunteers, staff, contractors, and affiliated partners from
                claims arising out of my child/dependent’s participation in camp
                activities.
          </p>
<p>
            I understand that this waiver is intended to apply to claims
                relating to injury, illness, property loss, or damages connected
                with participation in Rivertown Hoops Camp, except where
                such release is prohibited by law.
          </p>
        </section>

        <section className="registration-modal-section">
          <h3>Medical Authorization</h3>
          <p>
            I authorize Rivertown Hoops Camp staff, coaches, or
                volunteers to provide basic first aid and to contact emergency
                medical services if my child/dependent becomes ill, injured, or
                requires urgent attention during camp.
          </p>
          <p>
            If emergency care is needed and I cannot be reached, I authorize
                RHC staff to arrange medical transport, including ambulance
                transport when appropriate, to a hospital, urgent care, or other
                medical facility. I understand that I am responsible for any
                medical, emergency, transportation, or treatment costs incurred.
          </p>
          <p>
            I confirm that the medical and allergy information provided
                during registration is accurate to the best of my knowledge and
                that I will notify RHC of any changes before camp begins.
          </p>
        </section>

        <section className="registration-modal-section">
          <h3>Parent / Guardian Acknowledgment</h3>
          <p>
            By checking the waiver and medical authorization acknowledgment box on the registration form, I confirm that
            I have read, understand, and agree to the waiver, release, and medical authorization terms.
          </p>
        </section>
      </>
    ),
  },

  policies: {
    title: "Camp Policies",
    fullPageUrl: "/camp-policies",
    body: (
      <>
        <section className="registration-modal-section">
          <h3>Drop-Off and Pick-Up</h3>
          <p>
            Campers should be dropped off and picked up at the designated camp location during the published camp times.
            Parents and guardians are expected to arrive on time for pick-up. If another adult is picking up a camper,
            that person should be listed or communicated to camp staff in advance.
          </p>
        </section>

        <section className="registration-modal-section">
          <h3>Behavior and Sportsmanship</h3>
          <p>
            Rivertown Hoops Camp is built around positive coaching, effort, teamwork, respect, and sportsmanship.
            Campers are expected to listen to coaches, respect other campers, use appropriate language, and participate
            safely and constructively.
          </p>
          <p>
            Camp staff may redirect, sit out, or contact a parent or guardian if a camper’s behavior is unsafe,
            disruptive, or inconsistent with camp expectations.
          </p>
        </section>

        <section className="registration-modal-section">
          <h3>What to Bring</h3>
          <p>
            Campers should bring basketball shoes or athletic shoes, a water bottle, lunch, snacks, and any personal
            medical items they may need during the camp day. Campers should not bring valuables or unnecessary personal
            items.
          </p>
        </section>

        <section className="registration-modal-section">
          <h3>Food, Allergies, and Medical Needs</h3>
          <p>
            Parents and guardians are responsible for providing food and snacks appropriate for their camper. Any allergies,
            medications, or medical needs should be disclosed during registration so camp staff can be aware and respond
            appropriately.
          </p>
        </section>

        <section className="registration-modal-section">
          <h3>Refunds and Cancellations</h3>
          <p>
            Registration fees, refund timing, cancellation policies, and any exceptions will be handled according to the
            camp policies communicated on the Rivertown Hoops Camp website or directly by camp leadership.
          </p>
        </section>

        <section className="registration-modal-section">
          <h3>Parent / Guardian Acknowledgment</h3>
          <p>
            By checking the camp policies acknowledgment box on the registration form, I confirm that I have read,
            understand, and agree to the camp policies.
          </p>
        </section>
      </>
    ),
  },

  photo: {
    title: "Photo Release",
    fullPageUrl: "/waiver-photo-release",
    body: (
      <>
        <section className="registration-modal-section">
          <h3>Photo and Media Release</h3>
          <p>
            Rivertown Hoops Camp may take photos or short videos
                during camp for limited use in RHC-owned and RHC-controlled
                communications, including the RHC website, RHC social media
                accounts, future camp announcements, and camp-related
                promotional materials.
          </p>
          <p>
            RHC will not sell player images or intentionally use a child’s
                full name in public promotional posts without additional
                permission.
          </p>
<p>
            Parents and guardians may choose whether to grant permission for their child’s image to be used. The
            registration form includes a photo release choice so families can opt in or opt out.
          </p>
          <p>
            By selecting the photo release option on the registration form, I confirm my preference regarding whether
            Rivertown Hoops Camp may use photos or videos of my child for camp-related purposes.
          </p>
        </section>
      </>
    ),
  },
};

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
  const [activeModal, setActiveModal] = useState(null);

  const openRegistrationModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeRegistrationModal = () => {
    setActiveModal(null);
  };
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

const stripePaymentLinkBase = process.env.REACT_APP_STRIPE_PAYMENT_LINK_URL || "";

const stripePaymentUrl =
  stripePaymentLinkBase && submitState.submissionId
    ? `${stripePaymentLinkBase}?client_reference_id=${encodeURIComponent(
        submitState.submissionId
      )}`
    : stripePaymentLinkBase;

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
      <>
        <p>
          <strong>Confirmation ID:</strong> {submitState.submissionId}
        </p>

        {isSuccess && stripePaymentUrl && (
          <div className="registration-payment-next-step">
            <p>
              <strong>Next step:</strong> Your registration is not complete until
              payment is received.
            </p>
            <p>
  Pay the $275 registration fee using the secure Stripe payment page.
</p>
<p>
  <strong>Discount codes:</strong> Use <strong>EARLY25</strong> for $25 off
  through June 14, 2026 (6/14/2026), <strong>SIBLING20</strong> for $20 off an
  additional sibling registration, or <strong>EARLYSIBLING45</strong> if both
  discounts apply. Only one discount code can be entered at Stripe checkout.
</p>
            <p>
              Please enter your RHC Confirmation ID on the Stripe checkout page
              so we can match your payment to your registration.
            </p>
            <a
              className="btn primary"
              href={stripePaymentUrl}
              target="_blank"
              rel="noreferrer"
            >
              Pay Securely with Stripe
            </a>
            <p className="payment-help-text">
              Questions? Email team@rivertownhoopscamp.com.
            </p>
          </div>
        )}
      </>
    )}
  </div>
)}

          {!isSuccess && (
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-section">
  <h3>Payment & Discounts</h3>
  <p>
    Camp registration is $275. Payment is completed after this form is submitted
    using our secure Stripe payment page.
  </p>
  <p>
    <strong>Discount codes:</strong>
  </p>
  <p>
    Early registration: Use code <strong>EARLY25</strong> for $25 off through
    June 14, 2026 (6/14/2026).
  </p>
  <p>
    Sibling discount: Use code <strong>SIBLING20</strong> for $20 off for an
    additional sibling registration.
  </p>
  <p>
    If both discounts apply, use code <strong>EARLYSIBLING45</strong> for $45
    off. Only one discount code can be entered at Stripe checkout.
  </p>
</div>

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
                    <button
                      type="button"
                      className="inline-modal-link"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        openRegistrationModal("waiver");
                      }}
                    >
                      Waiver and Release / Medical Authorization
                    </button>
                    .
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
                    I authorize camp staff to seek emergency medical care for my
                    player if needed and I cannot be reached, as described in the{" "}
                    <button
                      type="button"
                      className="inline-modal-link"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        openRegistrationModal("waiver");
                      }}
                    >
                      Waiver and Release / Medical Authorization
                    </button>
                    .
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
                    <button
                      type="button"
                      className="inline-modal-link"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        openRegistrationModal("policies");
                      }}
                    >
                      Camp Policies
                    </button>
                    .
                  </span>
                </label>

                <p className="form-note">
                  Camp policies remain available on the Camp Policies page for
                  reference.
                </p>
              </div>

                            <div className="form-section">
                <h3>Photo Release</h3>

                <p className="form-note">
                  Please review the{" "}
                  <button
                    type="button"
                    className="inline-modal-link"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      openRegistrationModal("photo");
                    }}
                  >
                    Photo Release
                  </button>{" "}
                  and select your preference below.
                </p>

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

      {activeModal && MODAL_CONTENT[activeModal] && (
        <div
          className="registration-modal-backdrop"
          role="presentation"
          onClick={closeRegistrationModal}
        >
          <div
            className="registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="registration-modal-header">
              <h2 id="registration-modal-title">
                {MODAL_CONTENT[activeModal].title}
              </h2>

              <button
                type="button"
                className="registration-modal-x"
                onClick={closeRegistrationModal}
                aria-label="Close modal and return to registration"
              >
                ×
              </button>
            </div>

            <div className="registration-modal-body">
              {MODAL_CONTENT[activeModal].body}
            </div>

            <div className="registration-modal-footer">
              <a
                href={MODAL_CONTENT[activeModal].fullPageUrl}
                target="_blank"
                rel="noreferrer"
                className="registration-modal-secondary-link"
              >
                Open full page in new tab
              </a>

              <button
                type="button"
                className="registration-modal-close-button"
                onClick={closeRegistrationModal}
              >
                Close and return to registration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
