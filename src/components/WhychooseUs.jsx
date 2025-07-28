import styled from "styled-components";
import WhyChooseUsImg from "../assets/about-section.jpg";

const WhyChooseUs = () => {
  return (
    <>
      <WhyChooseUsTitle>Why Choose Us?</WhyChooseUsTitle>
      <WhyChooseUsContainer>
        <WhyChooseUsContentContainer>
        <WhyChooseUsContent>
          We’ve partnered with Hyrox to bring you an unparalleled fitness
          experience that combines strength, endurance, and competition. Whether
          you’re a seasoned athlete or just starting your journey, our expert
          coaches and supportive community are here to help you reach your
          personal best.
        </WhyChooseUsContent>
        <WhyChooseUsList>
          <li>Expert coaching tailored to your goals</li>
          <li>Dynamic Hyrox-inspired training programs</li>
          <li>Supportive, motivating community environment</li>
          <li>Flexible schedules to fit your lifestyle</li>
          <li>Regular challenges and events to keep you engaged</li>
        </WhyChooseUsList>
        </WhyChooseUsContentContainer>
        <WhyChooseUsImage
          src={WhyChooseUsImg}
          alt="Why Choose Us"
        />
      </WhyChooseUsContainer>
    </>
  );
};

export default WhyChooseUs;

// Styled components

const WhyChooseUsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 10% 0 10%;
  transition: margin 0.5s ease-in-out;

  @media (max-width: 1200px) {
    margin: 0 5% 0 5%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 5% 0 5%;
  }

  @media (max-width: 480px) {
    margin: 0 2% 0 2%;
  }
`;

const WhyChooseUsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 65%;
  margin-right: 2rem;
  transition: width 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const WhyChooseUsTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 5%;
  transition: font-size 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const WhyChooseUsContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  transition: font-size 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    width: 90%;
    margin: 0 auto;
  }
`;

const WhyChooseUsList = styled.ul`
  list-style: disc;
  padding: 0;
  margin: 0;
  list-style-position: inside;

  @media (max-width: 768px) {
  margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
   font-size: 0.8rem;
  }
`;

const WhyChooseUsImage = styled.img`
  width: 50%;
  border-radius: 8px;
  transition: width 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding-top: 2rem;
    width: 70%;
  }
`;