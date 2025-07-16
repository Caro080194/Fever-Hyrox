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
`;

const WhyChooseUsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 65%;
  margin-right: 2rem;
`;

const WhyChooseUsTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 5%;
`;

const WhyChooseUsContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const WhyChooseUsList = styled.ul`
  list-style: disc;
  padding: 0;
  margin: 0;
  list-style-position: inside;
`;

const WhyChooseUsImage = styled.img`
  width: 50%;
  border-radius: 8px;
`;
