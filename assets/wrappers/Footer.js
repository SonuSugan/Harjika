import styled from "styled-components";

const Wrapper = styled.div`
  .footer {
    padding: var(--padding1);
    gap: 2rem;
    height: 40vh;
  }
  .topfooter{
    justify-content: center;
    padding: 3% 3%;
  }
  .footer-title{
     color: var(--white);
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 0.1rem;
  text-shadow: var(--boxShadow);
  }

  .footer > img {
    height: 35vh;
    width: 100%;
  }
  .f-content {
    position: absolute;
    height: 30vh;
    background: var(--blurupfo);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
    gap: 4rem;
    color: white;
  }
  .f-content > span {
    background-color: transparent !important;
  }
  .f-icons {
    display: flex;
    gap: 2rem;
    margin-top: -2rem;
    background-color: transparent !important;
  }
  .img {
    width: 50px;
    height: 50px;
    background-color: transparent !important;
  }
a{
  color: white;
}

  @media only screen and (min-width: 300px) and (max-width: 500px) {
  }
  @media (max-width: 992px) {
    margin-top: -1rem;
   
  }
`;

export default Wrapper;
