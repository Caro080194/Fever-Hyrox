import styled from "styled-components";

const ContactFormContainer = () => {
  return (
    <ContactFormContainerStyled>
      <h2>Get in Touch</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea />
        <label>Which offer are you interested in?</label>
        <select>
          <option value="">Select an option</option>
          <option value="Foundations">Foundations</option>
          <option value="Conditioning">Conditioning</option>
          <option value="Competitive">Competitive</option>
          <option value="Flexible">Flexible</option>
          <option value="Not sure">Not sure</option>
        </select>
        <input type="submit" value="Send Message" />
      </form>
    </ContactFormContainerStyled>
  );
};

const ContactFormContainerStyled = styled.div`
  background-color: #F2F2F2; /* Neutral BG */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 40px auto;

  @media (max-width: 768px) { /* Tablet */
    padding: 20px;
    margin: 20px auto;
  }

  @media (max-width: 480px) { /* Phone */
    padding: 10px;
    margin: 10px auto;
    max-width: 350px;
  }

  h2 {
    color: #FF3B30; /* Primary Fierce Red */
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: 768px) { /* Tablet */
      font-size: 20px;
    }

    @media (max-width: 480px) { /* Phone */
      font-size: 18px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
      color: #333333; /* Text Dark */
      margin-bottom: 10px;

      @media (max-width: 768px) { /* Tablet */
        font-size: 14px;
      }

      @media (max-width: 480px) { /* Phone */
        font-size: 12px;
      }
    }

    input, textarea, select {
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;

      @media (max-width: 768px) { /* Tablet */
        padding: 5px;
      }

      @media (max-width: 480px) { /* Phone */
        padding: 2px;
      }
    }

    input[type="submit"] {
      background-color: #FF3B30; /* Primary Fierce Red */
      color: #FFFFFF; /* Text Light */
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;

      @media (max-width: 768px) { /* Tablet */
        padding: 5px 10px;
      }

      @media (max-width: 480px) { /* Phone */
        padding: 2px 5px;
      }

      &:hover {
        background-color: #FF4136; /* darker shade of Fierce Red */
      }
    }
  }
`;

export default ContactFormContainer;