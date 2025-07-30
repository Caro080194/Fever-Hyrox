import styled from "styled-components";
import Crossfit from "../assets/Crossfit.png";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Logo>
          <img src={Crossfit} alt="CrossFit Fever Logo" />
        </Logo>
        <Info>
          <h3>CrossFit Fever</h3>
          <p>123 Main St, Anytown, USA 12345</p>
          <p>Phone: 555-555-5555</p>
          <p>Email: [info@crossfitfever.com](mailto:info@crossfitfever.com)</p>
        </Info>
        <Social>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#" target="_blank">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </Social>
        <HYROX>
          <h3>HYROX</h3>
          <p>Learn more about our new HYROX service</p>
          <a href="#">HYROX Page</a>
        </HYROX>
      </FooterContainer>
      <Copyright>
        <p>&copy; 2023 CrossFit Fever. All Rights Reserved.</p>
      </Copyright>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background-color: #1c1c1e; /* Charcoal Black */
  color: #ffffff; /* Text Light */
  padding: 40px 0;

  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 480px) {
    max-width: 300px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  width: 20%;
  margin-right: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
    img {
      width: 100px;
      height: auto;
      border-radius: 50%;
    }
  }
`;

const Info = styled.div`
  width: 20%;
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Social = styled.div`
  width: 20%;
  margin-right: 20px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin-right: 10px;
  }

  a {
    color: #ffffff; /* Text Light */
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const HYROX = styled.div`
  width: 20%;
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default Footer;
