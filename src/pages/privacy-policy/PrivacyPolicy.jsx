import React from 'react';
import privacyData from './data';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="privacy-container grid grid-cols-1 md:grid-cols-2 h-screen">
        <header className="header-container overflow-scroll  m-2">
          <h1 className="text-3xl">All Americans Vote Privacy</h1>

          <div className="menu dropdown-content bg-base-100 rounded-box z-1 min-w-[300px] shadow-sm">
            <p className="m-4">
              This policy (“Privacy Policy”) governs the use of this website
              (“Site”) as well as social media accounts and other communication
              platforms operated by All Americans Vote (“AAV”). At AAV, we are
              putting forth every effort to ensure the privacy and security of
              information that you share with us online. In addition, we urge
              you to take steps to protect the privacy of your personal
              information, such as safeguarding your passwords and logging off
              of the website after submitting personal information.
              <br />
            </p>
            {/**
             * Navigation
             */}
          </div>
          <div className="m-4" id="information">
            <h2 className="uppercase">INFORMATION COLLECTION AND USE</h2>
            <p>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you as an individual. Personally identifiable information
              (“Personal Information”) may include, but is not limited to: Name,
              Email address, Phone number, Username/password when you choose to
              create an account with us, Information used to identify your
              social media accounts if you choose to share this information with
              us.
            </p>
          </div>
          <div className="m-4" id="sensitive-information">
            <h2 className="uppercase">Sensitive Information</h2>
            <p>
              Please do not send or disclose to us any sensitive Personal
              Information, like unique government identification numbers (e.g.,
              a Social Security number), information related to race or
              ethnicity, religious or other beliefs, health information, your
              biometrics or genetic characteristics, or information related to
              your criminal background.
            </p>
          </div>
          <div className="m-4" id="information-use">
            <h2 className="uppercase">
              How do we use the information you provide?
            </h2>
            <p>
              We may use the information we collect to: Provide, maintain, and
              improve our Site, including to arrange your access to our
              Site;Provide and deliver the information you request, process
              donations and transactions, and send you related information,
              including confirmations and receipts;Send you technical notices,
              updates, security alerts, and support and administrative messages;
              provide technical support;Send you emails and text messages (which
              may be subject to fees charged by your wireless carrier) in regard
              to AAV updates, volunteer opportunities, promotions, services, or
              other information; Respond to your emails, submissions, comments,
              questions, and requests; request feedback or support; otherwise
              contact you about your participation with AAV and the use of our
              Site;Solicit volunteers, donations, and support for AAV and for
              other issues, and organizations that we support; connect you with
              other volunteers; Allow you to participate in sweepstakes,
              contests, or other promotions; Accomplish business purposes,
              including to conduct audits or other internal functions intended
              to address compliance requirements, for fraud prevention and
              security monitories, to develop new products and services, to
              improve or enhance the Site, and to determine the effectiveness of
              AAV activities. Carry out any other purpose described to you at
              the time the information was collected.
            </p>
          </div>
          <div className="m-4" id="information-share">
            <h2 className="uppercase">How do we share your information?</h2>
            <p>
              ‍We may share information about you as follows or as otherwise
              described in this Privacy Policy: With vendors, service providers,
              volunteers, and consultants who need access to such information to
              carry out work on our behalf;With organizations, campaigns,
              groups, or causes that we believe have similar viewpoints,
              principles, or objectives or share similar goals; andWith
              organizations that facilitate communications and information
              sharing among such groups;To third party sponsors of sweepstakes,
              contests, and similar promotions; Subject to applicable
              contractual or legal restrictions, in connection with the sale or
              exchange of your information and related data to a broker or other
              non-profit or for-profit entity;In response to a request for
              information if we believe disclosure is in accordance with, or
              required by, any applicable law or legal process, including lawful
              requests by public authorities to meet national security or law
              enforcement requirements; when we believe in good faith that we
              are lawfully authorized or required to do so or that doing so is
              reasonably necessary or appropriate to comply with the law or
              legal processes or to respond to lawful requests, claims, or legal
              authorities, including responding to lawful subpoenas, warrants,
              or court orders; andWhen we believe in good faith that disclosure
              is necessary to protect or defend our rights, to protect the
              safety and security of AAV, users of our Site, or others, or to
              investigate suspected fraud, abuse, security issues, and other
              illegal activities.
            </p>
          </div>
        </header>

        <div className="accordion-container max-w-[500px]">
          {privacyData.map((data, i) => (
            <div
              key={i}
              className="collapse collapse-plus bg-base-100 border border-base-300 "
            >
              <input
                type="radio"
                name="my-accordion-1"
                defaultChecked={i === -1}
              />
              <div className="collapse-title font-semibold">{data.title}</div>
              <div className="collapse-content text-sm">
                <div className="p-6">{data.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
