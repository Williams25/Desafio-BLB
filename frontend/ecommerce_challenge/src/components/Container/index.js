import styled from 'styled-components'

const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  font: normal normal medium 16px/19px SF Pro Display;
  letter-spacing: 0px;
  color: hsla(0, 0%, 0%, 0.64);
  opacity: 1;
`

export default ContainerHome