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

  h2 {
    color: #FF3B30; /* Primary Fierce Red */
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
      color: #333333; /* Text Dark */
      margin-bottom: 10px;
    }

    input, textarea {
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    input[type="submit"] {
      background-color: #FF3B30; /* Primary Fierce Red */
      color: #FFFFFF; /* Text Light */
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        background-color: #FF4136; /* darker shade of Fierce Red */
      }
    }
  }
`;

export default ContactFormContainer;
