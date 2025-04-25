import React from 'react';
import SideNav from './SideNav';
import TopNav from './TopNav';

const Rules = () => {
  return (
    <div>
      <div className="topnav-container flex flex-row justify-center items-center w-screen">
        <TopNav />
      </div>
      <div className="grid grid-cols-[10%_80%]">
        {' '}
        <div className=" side-nav-container pb-24">
          <SideNav />
        </div>
        <div className="content-container flex flex-col">
          <header className="flex flex-col justify-center items-center">
            <h2 className="text-md">
              AAV (All Americans Vote) Cowboy Carter Suite Access Sweepstakes
            </h2>
            <h1 className="text-2xl">OFFICIAL SWEEPSTAKES RULES</h1>
          </header>
          <main className="flex flex-col justify-center items-center">
            <div className="bg-white p-12 mt-6 max-w-2/3 flex flex-col gap-4">
              <h2 className="font-bold">Important</h2>
              <p>
                Please read these Official Rules before entering this
                sweepstakes (the "Sweepstakes"). By participating in the
                Sweepstakes, you agree to be bound by these Official Rules and
                represent that you satisfy all of the eligibility requirements
                below. NO PURCHASE, PAYMENT, OR FINANCIAL CONTRIBUTION OF ANY
                KIND IS NECESSARY TO ENTER OR WIN THIS SWEEPSTAKES.
              </p>
              <section id="eligibility">
                <h2 className="font-bold">Eligibility</h2>
                <p>
                  PURCHASE, PAYMENT, OR FINANCIAL CONTRIBUTION WILL NOT INCREASE
                  ODDS OF WINNING. SWEEPSTAKES VOID WHERE PROHIBITED.
                  SWEEPSTAKES OPEN ONLY TO INDIVIDUAL UNITED STATES CITIZENS AND
                  LAWFUL PERMANENT U.S. RESIDENTS OF THE FIFTY (50) UNITED
                  STATES, THE DISTRICT OF COLUMBIA, AND PUERTO RICO, WHO ARE
                  OVER THE AGE OF 18 (OR THE AGE OF MAJORITY UNDER APPLICABLE
                  LAW). BUSINESSES, CORPORATIONS, NATIONAL BANKS, FEDERAL
                  CONTRACTORS, FOREIGN NATIONALS, LABOR ORGANIZATIONS, OR OTHER
                  ENTITIES ARE NOT ELIGIBLE TO ENTER NOR MAY ANY INDIVIDUAL
                  ENTER ON BEHALF OF ANY SUCH INDIVIDUALS OR ENTITIES. IF YOU DO
                  NOT SATISFY THESE REQUIREMENTS, OR ANY OTHER ELIGIBILITY
                  REQUIREMENTS IN THESE OFFICIAL RULES, YOU ARE NOT ELIGIBLE TO
                  WIN A PRIZE, AND AAV ( ALL AMERICANS VOTE) ("SPONSOR")
                  RESERVES THE RIGHT NOT TO AWARD PRIZES TO YOU. To be eligible
                  to win the Prize, entries must be completed and received by
                  Sponsor in the format designated below. Directors, officers,
                  and employees of Sponsor and any of its respective affiliates,
                  subsidiaries, agents, professional advisors, consultants,
                  advertising and promotional agencies, and immediate families
                  of each are not eligible to win any Prizes. All applicable
                  federal, state, and local laws and regulations apply.
                </p>
              </section>
              <section id="disclaimer">
                <h2 className="font-bold">Disclaimer</h2>
                <p>
                  Sponsor and its affiliates, subsidiaries, directors, officers,
                  employees, consultants, professional advisors, agents, and any
                  related entities (collectively, the "Released Parties") will
                  not be responsible for: (a) any late, lost, misrouted, garbled
                  or distorted, or damaged transmissions or entries; (b)
                  telephone, electronic, hardware, software, network, Internet,
                  or other computer or communications-related malfunctions or
                  failures; (c) any Sweepstakes disruptions, injuries, losses,
                  or damages caused by events beyond the control of Sponsor or
                  by non-authorized human intervention; or (d) any printing or
                  typographical errors in any materials associated with the
                  Sweepstakes. ‍
                </p>
              </section>
              <section id="sweepstakes-period">
                <h2 className="font-bold">Sweepstakes Period</h2>
                <p>
                  The Sweepstakes starts at [12:00:00 PM EST] on [April 12,
                  2025] and ends at [11:59:59PM EST] (unless otherwise noted,
                  all times are Eastern Standard Time) on [June 20, 2025] (the
                  "Sweepstakes Period"). All entries must be received during the
                  Sweepstakes Period to be eligible to win a Prize.
                </p>
              </section>
              <section id="prize">
                <h2 className="font-bold">Prize</h2>
                <p>
                  [Four (4)] winner(s) will each receive the following Prize
                  (the “Prize”): [Suite Access to the Cowboy Carter Tour in
                  Washington, DC including approximate retail value of
                  $1,600.00]
                </p>
              </section>
              <section id="odds-taxes">
                <h2 className="font-bold">Odds; Taxes; Etc.</h2>
                <p>
                  Odds of winning a Prize depend on the number of eligible
                  entries received. ALL FEDERAL, STATE, AND LOCAL TAXES
                  ASSOCIATED WITH THE RECEIPT OR USE OF ANY PRIZE ARE THE SOLE
                  RESPONSIBILITY OF WINNER. All Prizes will be awarded. The
                  Prize may be forfeited and awarded to an alternative winner if
                  (a) any winner affidavit and release materials (see Section 11
                  below) are not returned as required from the potential winner,
                  (b) if two (2) attempts to contact the potential winner by
                  phone and/or e-mail are not successful, (c) the potential
                  winner is not able to accept the Prize for any reason, or if
                  (d) any Prize is otherwise not claimed. Prizes are not
                  transferable. No substitutions or exchanges (including for
                  cash) of any Prizes will be permitted, except that Sponsor
                  reserves the right to substitute a Prize of equal or greater
                  value for any Prize. Limit one Prize per household or address.
                  All Prizes are awarded "AS IS" and WITHOUT WARRANTY OF ANY
                  KIND, express or implied (including, without limitation, any
                  implied warranty of merchantability or fitness for a
                  particular purpose).
                </p>
              </section>
              <section id="entrant-identity">
                <h2 className="font-bold">Identity Of Entrant</h2>
                <p>
                  In the event of a dispute about the identity of the entrant,
                  entries made online will be declared by the authorized account
                  holder of the e-mail address submitted at time of entry. An
                  authorized account holder is defined as the natural person who
                  is assigned to an e-mail address by an Internet access
                  provider, online service provider, or other organization
                  (e.g., business, educational institution, etc.) that is
                  responsible for assigning e-mail addresses for the domain
                  associated with the submitted e-mail address. The potential
                  winner may be required to provide Sponsor with proof that the
                  potential winner is the authorized account holder of the
                  e-mail address associated with the winning entry.
                </p>
              </section>
              <section id="enter-instructions">
                <h2 className="font-bold">How to Enter</h2>
                <p>
                  Participants may enter as follows: Free Online Entry Method:
                  To enter via the free online entry method, visit
                  [https://links.impactive.io/t/20twsanl?start=1] or other web
                  page specifically identified by Sponsor and fully complete and
                  submit the online entry form during the Sweepstakes Period.
                  Earn one (1) entry by visiting the Sweepstakes Website on a
                  web browser and completing and submitting the form provided on
                  the Sweepstakes Website during the Sweepstakes Period.Failure
                  to submit all required information in the manner required in
                  these Official Rules and/or any entry or contribution form may
                  result in disqualification. Proof of online entry will not be
                  deemed to be proof of receipt of entry by Sponsor. All
                  participants and entries are subject to verification by
                  Sponsor. Entries will not be acknowledged or returned. By
                  entering the Sweepstakes, you consent to being placed on an
                  e-mail mailing list to receive information from Sponsor, to be
                  contacted by text message by Sponsor, and for other purposes
                  in accordance with Sponsor's Privacy Policy. Individuals may
                  not enter the Sweepstakes by any and all methods combined more
                  than [one (1)] entry time.You may earn [three (3)] additional
                  entries (“Bonus Entries”) by successfully referring [three
                  (3)] or more Referrals during the Sweepstakes Period, subject
                  to the terms herein. “Referral” means any individual that uses
                  your URL (as defined below) to enter the Sweepstakes through
                  the Free Online Entry Method of entry within the Sweepstakes
                  Period. After submitting an entry through the Free Online
                  Entry Method, such participant will receive a custom URL (the
                  “URL”) on the post-submission screen on the Sweepstakes
                  Website. An entrant may receive no more than [three (3)] Bonus
                  Entries, regardless of how many Referrals such entrant makes ‍
                  <br />
                  Referral Terms: Referrals are personal and should only be sent
                  to individuals that you personally know and must be used only
                  for personal and non-commercial purposes. The sharing of URLs
                  outside of your warm network of personal connections is
                  strictly prohibited. URLs may not be published or distributed
                  (other than through your personal social media accounts,
                  subject to such platforms’ rules), including on commercial
                  websites (such as coupon websites, Reddit, or Wikipedia) or on
                  blogs. You are prohibited from “spamming” anyone with referral
                  invitations. This includes mass emailing, texting or messaging
                  people you do not know or using automated systems or bots
                  through any channel to distribute your URL. You are prohibited
                  from paying to advertise your URL or paying or providing
                  anything of value to any person to whom you direct a URL or
                  any other third party to obtain benefits under this
                  Sweepstakes.When sharing a URL, you must always tell the
                  potential Referral that you will be receiving Bonus Entries
                  into the Sweepstakes if such individual enters the Sweepstakes
                  using the URL and obtain the express consent of such potential
                  Referral prior to sharing any URL with such individual. You
                  must at all times remain compliant with all applicable laws,
                  rules and regulations. You agree to indemnify and hold
                  harmless Sponsor from any and all damages, costs, claims,
                  expenses and other liability (including reasonable attorneys’
                  fees) arising from or relating to the breach or alleged breach
                  by you of these referral terms.A referred individual may only
                  use one URL to enter the Sweepstakes. If a referred individual
                  receives URLs from multiple individuals, only the individual
                  associated with the URL actually used by the referred
                  individual to enter the Sweepstakes will receive credit for
                  the Referral.Taking civic actions, such as verifying your
                  voter registration status, registering to vote, or requesting
                  a mail in ballot, is NOT required for entry. Having a valid
                  voter registration status or being eligible to register to
                  vote is NOT required for entry.
                </p>
              </section>
              <section id="sweepstakes-rules">
                <h2 className="font-bold">Sweepstakes Rules</h2>
                <p>
                  [Four (4)] potential winners will be selected by a random
                  drawing from all eligible entries to be held by [June 21,
                  2025]. Sponsor may, at its option, conduct a background check
                  on each potential winner. Sponsor will, in its sole
                  discretion, then select [four (4)] winners from the list of
                  eligible potential winners on the basis of criteria determined
                  and applied by Sponsor to provide for an appropriate range of
                  views, backgrounds, and interests. Winners will be notified by
                  phone or e-mail by [June 21, 2025]. Sponsor reserves the right
                  to disqualify any potential winner from receiving any Prize
                  based on such background check or other review if Sponsor
                  determines, in its sole discretion, that awarding any Prize to
                  such potential winner could result in a safety or security
                  risk or other risk to any person or persons. To claim the
                  Prize, winner should follow the instructions and comply with
                  the conditions contained in his or her notification. In the
                  event that not enough potential winners respond to Sponsor's
                  attempts to contact them or are otherwise disqualified such
                  that Sponsor is unable to award all Prizes, Sponsor may select
                  additional potential winners by random drawing from remaining
                  eligible entries.
                </p>
              </section>
              <section id="general-release">
                <h2 className="font-bold">General Release</h2>
                <p>
                  BY ENTERING THE SWEEPSTAKES, YOU RELEASE SPONSOR AND ALL
                  RELEASED PARTIES FROM ANY LIABILITY WHATSOEVER, AND WAIVE ANY
                  AND ALL CAUSES OF ACTION, RELATED TO ANY CLAIMS, COSTS,
                  INJURIES, LOSSES, OR DAMAGES OF ANY KIND ARISING OUT OF OR IN
                  CONNECTION WITH THE SWEEPSTAKES OR DELIVERY, MISDELIVERY,
                  ACCEPTANCE, POSSESSION, USE OF OR INABILITY TO USE ANY PRIZE
                  (INCLUDING, WITHOUT LIMITATION, CLAIMS, COSTS, INJURIES,
                  LOSSES, AND DAMAGES RELATED TO PERSONAL INJURIES, DEATH,
                  DAMAGE TO OR DESTRUCTION OF PROPERTY, RIGHTS OF PUBLICITY OR
                  PRIVACY, DEFAMATION OR PORTRAYAL IN A FALSE LIGHT, WHETHER
                  INTENTIONAL OR UNINTENTIONAL), WHETHER UNDER A THEORY OF
                  CONTRACT, TORT (INCLUDING NEGLIGENCE), WARRANTY, OR OTHER
                  THEORY.
                </p>
              </section>
              <section id="general-release">
                <h2 className="font-bold">General Release</h2>
                <p>
                  BY ENTERING THE SWEEPSTAKES, YOU RELEASE SPONSOR AND ALL
                  RELEASED PARTIES FROM ANY LIABILITY WHATSOEVER, AND WAIVE ANY
                  AND ALL CAUSES OF ACTION, RELATED TO ANY CLAIMS, COSTS,
                  INJURIES, LOSSES, OR DAMAGES OF ANY KIND ARISING OUT OF OR IN
                  CONNECTION WITH THE SWEEPSTAKES OR DELIVERY, MISDELIVERY,
                  ACCEPTANCE, POSSESSION, USE OF OR INABILITY TO USE ANY PRIZE
                  (INCLUDING, WITHOUT LIMITATION, CLAIMS, COSTS, INJURIES,
                  LOSSES, AND DAMAGES RELATED TO PERSONAL INJURIES, DEATH,
                  DAMAGE TO OR DESTRUCTION OF PROPERTY, RIGHTS OF PUBLICITY OR
                  PRIVACY, DEFAMATION OR PORTRAYAL IN A FALSE LIGHT, WHETHER
                  INTENTIONAL OR UNINTENTIONAL), WHETHER UNDER A THEORY OF
                  CONTRACT, TORT (INCLUDING NEGLIGENCE), WARRANTY, OR OTHER
                  THEORY.
                  <br />
                  For California residents only: you hereby waive California
                  Civil Code Section 1542, which states, “[a] general release
                  does not extend to claims that the creditor or releasing party
                  does not know or suspect to exist in his or her favor at the
                  time of executing the release and that, if known by him or
                  her, would have materially affected his or her settlement with
                  the debtor or released party.” <br />
                  Use of Winner Name, Likeness, and Information. Except where
                  prohibited by law, the winner hereby grants the Sponsor and
                  its representatives a perpetual, irrevocable, worldwide,
                  royalty-free, non-exclusive and sub-licensable right and
                  license to distribute, publicly display and use his/her name,
                  photograph, voice, likeness and information about the prize
                  award, in any way, at any time, in any and all media,
                  including without limitation, without any additional approval
                  or consideration, in connection with the promotion and
                  marketing of this and other sweepstakes offers and Sponsor’s
                  mission to use winner's name, hometown, likeness, and/or Prize
                  information, without limitation, for promotional purposes and
                  without further permission or compensation. As a condition of
                  being awarded any Prize, except where prohibited by law,
                  winner may be required to execute a release consenting to the
                  use of his or her name, hometown, likeness, and/or Prize
                  information, without limitation, for promotional purposes by
                  Sponsor without further permission or compensation.
                </p>
              </section>
              <section id="affadavit-release">
                <h2 className="font-bold">Affidavit & Release</h2>
                <p>
                  As a condition of being awarded any Prize, winner may be
                  required to execute and deliver to Sponsor a signed affidavit
                  of eligibility and acceptance of these Official Rules and
                  release of liability, and any other legal, regulatory, or
                  tax-related documents required by Sponsor in its sole
                  discretion.
                </p>
              </section>
              <section id="winner-list">
                <h2 className="font-bold">Winner List; Rules Request</h2>
                <p>
                  For a copy of the winner list, send a stamped, self-addressed,
                  business-size envelope after [July 1, 2025], and before [July
                  1, 2026], to Sponsor at the address listed below, Attn: [AAV
                  Cowboy Carter Sweepstakes] Winner List. To obtain a copy of
                  these Official Rules, visit [Link to Where These Rules Are
                  Found Online] or send a stamped, self-addressed, business-size
                  envelope to Sponsor at the address listed below, Attn: [AAV
                  Cowboy Carter Sweepstakes] Official Rules Request. Residents
                  of VT and WA may omit return postage.
                </p>
              </section>
              <section id="intellectual-property">
                <h2 className="font-bold">Intellectual Property Notice</h2>
                <p>
                  The Sweepstakes and all accompanying materials are copyright ©
                  2025 by All Americans Vote (AAV). All rights reserved.
                </p>
              </section>
              <section id="disputes">
                <h2 className="font-bold">Disputes and Jurisdiction</h2>
                <p>
                  The Sweepstakes is governed by, and will be construed in
                  accordance with, the laws of the District of Columbia, without
                  regard to its conflicts of law principles, and the forum and
                  venue for any dispute relating to the sweepstakes shall be in
                  a federal or state court of competent jurisdiction in the
                  District of Columbia. Except where prohibited, participants
                  agree that any and all disputes, claims and causes of action
                  arising out of or connected with this Sweepstakes or any prize
                  awarded shall be resolved individually, without resorting to
                  any form of class action.
                </p>
              </section>
              <section id="miscellaneous">
                <h2 className="font-bold">Miscellaneous</h2>
                <p>
                  Participants agree to be bound by these Official Rules and by
                  the decisions of Sponsor, which are final and binding in all
                  respects. Sponsor reserves the right to change these Official
                  Rules at any time, in its sole discretion, and to suspend or
                  cancel the Sweepstakes or any entrant's participation in the
                  Sweepstakes should viruses, bugs, unauthorized human
                  intervention, or other causes beyond Sponsor's control affect
                  the administration, security, or proper play of the
                  Sweepstakes, or Sponsor otherwise becomes (as determined in
                  its sole discretion) incapable of running the Sweepstakes as
                  planned. Participants who violate these Official Rules,
                  violate any law, rule, or regulation in connection with
                  participation in the Sweepstakes, tamper with the operation of
                  the Sweepstakes, or engage in any conduct that is detrimental
                  or unfair to Sponsor, the Sweepstakes, or any other entrant
                  (in each case as determined in Sponsor's sole discretion) are
                  subject to disqualification from entry into the Sweepstakes.
                  Sponsor reserves the right to exclude persons whose
                  eligibility is in question or who have been disqualified or
                  are otherwise ineligible from entering the Sweepstakes. If you
                  have any questions about these Official Rules or the
                  Sweepstakes, please e-mail them to [contact@allamericans.org]
                  or send written questions to the address listed below, Attn:
                  [AAV Cowboy Carter Sweepstakes].
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Rules;
