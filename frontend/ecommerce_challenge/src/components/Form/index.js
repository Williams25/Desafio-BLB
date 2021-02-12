import styled from 'styled-components'

const Form = styled.form`

`
Form.Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;

  width: 100%;
`

Form.Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;

  font: var(--unnamed-font-style-normal) normal medium var(--unnamed-font-size-16)/19px var(--unnamed-font-family-sf-pro-display);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal medium 16px/19px SF Pro Display;
  letter-spacing: 0px;
  color: #000000A1;
  opacity: 1;
`
Form.input = styled.input`
  width: 100%;
  outline: none;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 8px #2C27380A;
  border: 1px solid #DBE2EA;
  opacity: 1;

  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: ${({ isInput }) => isInput ? 'left' : 'right'};
  letter-spacing: 0px;
  color: #7C9CBF;
  padding: 8px;
  border-radius: 2px;
  transition: 0.3s border;
  &:hover, 
  &:focus {
    border: 1px solid #475F94;
  }
`

export default Form