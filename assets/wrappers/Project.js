import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 4rem;
  .Project {
    padding: 4% 5%;
    overflow: hidden;
  }
  .project-center {
    padding: var(--padding1);
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    padding: 3% 2%;
    gap: 2rem;
  }

  .Project-intro {
    /* display: flex; */
    justify-content: center;
  }
  .container {
    padding: 2% 2%;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    
  }

  .contact-right {
    
  }

  .container img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 5px;
    transition: opacity 0.3s ease-in-out;
  }

 

  .container > img.animate-in {
    animation: LslideIn 0.7s forwards; /* Apply enter animation */
  }

  .container > img.animate-out {
    animation: LslideOut 0.7s forwards; /* Apply exit animation */
  }

  .Project-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .button {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .button-17 > span {
    /* align-items: center;
    justify-content: center;
    text-align: center; */
  }
  @media only screen and (min-width: 300px) and (max-width: 500px) {
    .span1 {
      font-size: 2.4rem;
    }
    .span2 {
      font-size: 3.2rem;
    }

    .button {
      justify-content: space-evenly;
      align-items: center;
    }
  }
  @media (max-width: 992px) {
    .project-center {
      display: flex;
      flex-direction: column-reverse;
    }
    .span4 {
      font-size: 1.8rem;
    }
    .Project {
      align-items: center;
      text-align: center;
    }
    .container > img.animate-in {
    animation: none; 
  }

  .container > img.animate-out {
    animation: none; 
  }
  }
`;

export default Wrapper;


