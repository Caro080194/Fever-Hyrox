import styled from "styled-components";
import AboutImageSection from "../assets/about-section.jpg";

const About = () => {
  return (
    <>
      <AboutTitle>Crossfit Fever & Hyrox</AboutTitle>
      <AboutMainContainer>
        <AboutImage src={AboutImageSection} alt="About Us" />
        <AboutContentContainer>
          <AboutContent>
            At Crossfit Fever, we believe fitness is more than just working out
            — it’s about embracing challenges, building community, and pushing
            your limits every day. Our mission is to create a space where
            everyone, regardless of fitness level, feels empowered to show up,
            work hard, and grow — physically and mentally. With the introduction
            of Hyrox, we’re taking functional training to the next level by
            combining endurance, strength, and strategy in a competitive but
            welcoming format. Whether you’re looking to boost your performance
            or simply try something new, this is your chance to push boundaries
            alongside a like-minded crew.
          </AboutContent>
          <button className="button-sporty">Join Us</button>
        </AboutContentContainer>
      </AboutMainContainer>
    </>
  );
};
export default About;

// Styled components

const AboutMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
`;

const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const AboutContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const AboutImage = styled.img`
  width: 50%;
  max-width: 600px;
  margin: 2rem 0;
  border-radius: 8px;
`;
