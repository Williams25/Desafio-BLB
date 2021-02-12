import styled from 'styled-components'

const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;
`
ContainerHome.Logo = styled.div`
  width: 70vw;
  display: flex;
  justify-content: flex-end;
`
ContainerHome.Switch = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
ContainerHome.Span = styled.span`
  padding: 10px;
  font: var(--unnamed-font-style-normal) normal medium var(--unnamed-font-size-16)/19px var(--unnamed-font-family-sf-pro-display);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal medium 16px/19px SF Pro Display;
  letter-spacing: 0px;
  color: #000000A3;
  opacity: 1;
`

export default ContainerHome