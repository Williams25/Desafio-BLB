import styled from 'styled-components'

const Footer = styled.footer`
  width: 75%;
  height: 80px;
  background: #2C2738 0% 0% no-repeat padding-box;
  border-radius: 5px;
  color: #FFFFFF;
  opacity: 1;
  
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  padding: 15px;
  position: fixed;
  bottom: 0;
  margin-bottom: 2rem;
  z-index: 15;
  
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-28) var(--unnamed-font-family-sf-pro-display);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal normal 20px/28px SF Pro Display;
  letter-spacing: 0px;
  transition: 0.4s ease-in;
  
  @media screen and (max-width: 682px) {
    width: 80%;
    font: normal normal normal 14px/20px SF Pro Display;
  }
`

Footer.Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
`

Footer.Button = styled.button`
  margin-left: 1rem;
  width: ${({ isColor }) => isColor ? '10rem' : '12rem'};
  height: 50px;
  background-color: ${({ isColor }) => isColor ? 'transparent' : '#419F4F'};
  border: ${({ isColor }) => isColor ? '1px solid #fff' : 'none'};
  border-radius: 2px;
  
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-16)/19px var(--unnamed-font-family-sf-pro-display);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal 600 16px/19px SF Pro Display;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;

  @media screen and (max-width: 682px) {
    width: ${({ isColor }) => isColor ? '5rem' : '6rem'};
    font: normal normal 600 14px/19px SF Pro Display;
  }
`

export default Footer