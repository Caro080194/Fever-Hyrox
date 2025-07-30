import styled from "styled-components";
import AboutImageSection from "../assets/whyChooseUs-section.jpg";

const About = () => {
  return (
    <>
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
          <a href="#contact">
            <button className="button-sporty">Join Us</button>
          </a>
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
  gap: 2rem;
  justify-content: space-around;
  text-align: center;
  margin: 3% 10% 5% 10%;

  @media (max-width: 768px) { /* Tablet */
    flex-direction: column;
    gap: 1rem;
    margin: 5% 5% 5% 5%;
  }

  @media (max-width: 480px) { /* Phone */
    flex-direction: column;
    gap: 0.5rem;
    margin: 10% 5% 10% 5%;
  }
`;

const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) { /* Tablet */
    width: 80%;
  }

  @media (max-width: 480px) { /* Phone */
    width: 90%;
  }

  .button-sporty {
    width: fit-content;
  }
`;

const AboutContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;

  @media (max-width: 768px) { /* Tablet */
    font-size: 1rem;
  }

  @media (max-width: 480px) { /* Phone */
    font-size: 0.8rem;
  }
`;

const AboutImage = styled.img`
  width: 30%;
  margin: 2rem 0;
  border-radius: 8px;

  @media (max-width: 768px) { /* Tablet */
    width: 50%;
  }

  @media (max-width: 480px) { /* Phone */
    width: 80%;
  }
`;
