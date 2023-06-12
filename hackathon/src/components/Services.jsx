import { Link } from "react-router-dom";
import "../styles/services.css";
import Finder from "./Finder";

const Services = () => {
  return (
    <>
      <section class="c-section">
        <h2 class="c-section__title">
          <span>Our Services</span>
        </h2>
        <ul class="c-services">
          <li class="c-services__item">
            <h3>
              <Link to={"/Finder"}>Email Finder</Link>
            </h3>
            <p>
              The Email Finder is a powerful tool designed to help you locate
              authentic email addresses associated with specific organizations.
              Whether you need to reach out to a company's customer support,
              connect with a potential business partner, or simply want to
              establish professional communication, the Email Finder streamlines
              the process of discovering valid and verified email contacts.
            </p>
          </li>

          <li class="c-services__item">
            <h3>
              <Link to={"/Databreached"}>Breach Credential</Link>
            </h3>
            <p>
              Discover the Power of Peace of Mind with our Breach Credential
              Checker for Email Accounts. In a world where digital security is
              paramount, our cutting-edge tool stands as a formidable guardian,
              tirelessly scanning the vast depths of the web to uncover any
              compromised credentials associated with your precious email
              account.
            </p>
          </li>
          <li class="c-services__item">
            <h3>
              <Link to={"/Finder"}>Email Finding Using Organization Name</Link>
            </h3>
            <p>
              To reach more customers and the goals of your business, a mobile
              application is necessary these days. We will work on the app
              design from scratch to final tested prototype.
            </p>
          </li>
          <li class="c-services__item">
            <h3>
              <Link
                to={
                  "https://secure-suit-677jv2n6p-rajnishad24082003.vercel.app/"
                }
              >
                Advanced Password Manager
              </Link>
            </h3>

            <h4>
              "Unleash the Power of Security with Our Advanced Password Manager:
              Safeguarding Your Secrets, Encrypted and Ready to Unlock."
            </h4>
            <p>
              Introducing our state-of-the-art Advanced Password Manager, the
              ultimate solution for keeping your passwords safe and secure. With
              robust encryption technology at its core, our password manager
              ensures that your sensitive login credentials are stored in an
              encrypted form, making them virtually impenetrable to unauthorized
              access.
            </p>
          </li>
          <li class="c-services__item">
            <h3>
              Email Checker<Link to={"/Email-Verifier"}></Link>
            </h3>
            <p>
              The Email Checker is a powerful tool designed to verify the
              authenticity of email addresses and identify potential fake or
              fraudulent emails. With its advanced algorithms and comprehensive
              database, the Email Checker acts as a reliable gatekeeper for your
              inbox, enhancing your online security and protecting you from
              potential threats.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Services;
