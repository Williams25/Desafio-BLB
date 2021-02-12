import styled from 'styled-components'

const Label = styled.label`
  
`
Label.Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;

  width: 100%;
  height: 250px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px dashed #00000057;
  border-radius: 2px;
  opacity: 1;
`
Label.Span = styled.span`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 14px/16px var(--unnamed-font-family-sf-pro-display);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal normal 14px/16px SF Pro Display;
  letter-spacing: 0px;
  color: #000000A3;
  opacity: 1;
`
Label.Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-22) var(--unnamed-font-family-sf-pro-display);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal normal 16px/22px SF Pro Display;
  letter-spacing: 0px;
  color: #0880AE;
  opacity: 1;
  cursor: pointer;
`

export default Label