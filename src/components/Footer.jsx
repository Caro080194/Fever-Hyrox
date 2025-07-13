import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Logo>
          <img src="logo.png" alt="CrossFit Fever Logo" />
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
  background-color: #1C1C1E; /* Charcoal Black */
  color: #FFFFFF; /* Text Light */
  padding: 40px 0;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 20%;
  margin-right: 20px;

  img {
    width: 100%;
    height: auto;
  }
`;

const Info = styled.div`
  width: 20%;
  margin-right: 20px;
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
    color: #FFFFFF; /* Text Light */
  }
`;

const HYROX = styled.div`
  width: 20%;
  margin-right: 20px;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default Footer;