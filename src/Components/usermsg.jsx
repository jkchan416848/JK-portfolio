import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledWrapper>
      <div className="form-container">
        <form
          className="form"
          action="https://formsubmit.co/jaychan560@gmail.com"
          method="POST">
          <div className="form-group">
            <label>Enter Your Gmail</label>
            <input
              type="text"
              id="email"
              name="User email"
              required
              placeholder="ABC123@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How is my porfolio?</label>
            <textarea
              placeholder="Type something here..."
              name="User Comment"
              id="textarea"
              rows={10}
              cols={50}
              required
              defaultValue={""}
            />
          </div>
          <button
            className="form-submit-btn"
            type="submit"
            style={{ textAlign: "center", fontSize: "1.15rem" }}>
            Submit
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(7px);
    box-shadow: 0px 0px 3px var(--primary-color1);
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }
  @media (min-width: 888px) {
    .form-container {
      width: 770px;
    }
  }

  @media (max-width: 508px) {
    .form-container {
      width: 347px;
      padding: 20px 18px;
    }
  }
  .form-container button:active {
    scale: 0.95;
  }
  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: rgb(197, 197, 197);
    font-weight: 600;
    font-size: 13px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.9;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: var(--primary-color1);
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color1);
  }
  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: var(--primary-color1);
    font-weight: 700;
    width: 30%;
    background: #ffffff11;
    border: 1px solid #414141;
    padding: 10px 7px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }
  .form-container .form-submit-btn:hover {
    // background-color: #ffffff22;
    border: 1px solid var(--primary-color1);
    border-color: var(--primary-color1);
  }
`;

export default Form;
