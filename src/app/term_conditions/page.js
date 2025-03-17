import BlackBorder from "../(component)/border/BlackBorder";
import GreyBorder from "../(component)/border/GreyBorder";
import "./term.scss";

const page = () => {
  return (
    <>
      <div className="term parent">
        <div className="term-container container">
          <h1>Term And Conditions</h1>
        </div>
      </div>
      <GreyBorder margin={"-100px"} />

      <div className="term1 parent">
        <div className="term-container1 container">
          <h1>Terms and Conditions</h1>
          <p>
            <strong>Effective Date:</strong> 17 March 2025
          </p>
          <br></br>
          <h2>1. Introduction</h2>
          <p>
            Welcome to SAHARA AMUSEMENT! By accessing or using our website,
            you agree to comply with and be bound by these Terms and Conditions.
            If you do not agree, please do not use our services.
          </p>
          <br></br>
          <h2>2. Use of Our Services</h2>
          <p>By using our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information when required.</li>
            <li>Use our website and services only for lawful purposes.</li>
            <li>{`Not engage in any activities that may harm or interfere with our website's functionality.`}</li>
          </ul>
          <br></br>
          <h2>3. Game Activities</h2>
          <p>
            We provide various game activities such as Mini GP Bike, Paintball,
            Quadbike, Dune Buggy, and Go-Kart Racing. Participation in these
            activities is at your own risk. We are not liable for any injuries,
            losses, or damages arising from participation in these activities.
          </p>
          <br></br>
          <h2>4. Payment and Refund Policy</h2>
          <ul>
            <li>We do not collect any online payments.</li>
            {/* <li>
              Refunds will be issued only under special circumstances or if the
              activity is canceled by us.
            </li> */}
          </ul>
          <br></br>
          <h2>5. Limitation of Liability</h2>
          <p>
            We are not responsible for any indirect, incidental, or
            consequential damages resulting from your use of our website or
            services.
          </p>
          <br></br>
          <h2>6. Intellectual Property</h2>
          <p>
            All content, logos, and media available on our website are the
            property of SAHARA AMUSEMENT and are protected by copyright laws.
            Unauthorized use is strictly prohibited.
          </p>
          <br></br>
          <h2>7. Changes to Terms and Conditions</h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions
            at any time without prior notice. By continuing to use our website,
            you agree to the updated terms.
          </p>
          <br></br>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at:
          </p>
          <p>
            <a href="#">0909090909</a>
          </p>
          <p>
            <a href="#">test@gmail.com</a>
          </p>
        </div>
      </div>
      <BlackBorder flip={true} margin={"-96px"} />
    </>
  );
};

export default page;
