import styled from 'styled-components'
import { Image } from 'react-bootstrap'
import ModalApagar from '../ModalApagar'

const Cards = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  margin-bottom: 2rem;
`
Cards.Items = styled.div`
  width: 16rem;
  height: 20rem;
  margin: 1rem;
  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  
  position: relative;
  top: 0;
  left: 0;
  transition: all 0.5s;
`
Cards.Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
`
Cards.Name = styled.span`
  font: normal normal normal 16px/21px SF Pro Text;
  letter-spacing: 0px;
  color: #000000CC;
  opacity: 1;
`
Cards.Price = styled.span`
  font: normal normal normal 22px/28px SF Pro Display;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`
Cards.Button = styled.button`
  outline: none;
  border: none;
  border-radius: 2px;
  color: #FFFF;

  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  
  visibility: hidden;
  transition: 0.4s ease-in;

  ${Cards.Items}:hover &{
    top: -25px;
    visibility: unset; 
    background: #56BA65 0% 0% no-repeat padding-box;
    opacity: 1; 
    height: 50%;
    transition: all 0.5s;
  }
`
Cards.Content = styled.div`
  position:absolute;
  z-index: 10;
  top: 0;
  right: 8px;
  cursor: pointer;
`

const Card = ({ products, formSwitch, atualizaTela }) => {

  return (
    <Cards>
      {
        products.map(product => {
          return (
            <Cards.Items
              key={product.id}
            >
              <Cards.Description>
                <Cards.Content>
                  {
                    formSwitch &&
                    <ModalApagar
                      id={product.id}
                      atualizaTela={() => atualizaTela()}
                    />
                  }
                </Cards.Content>
                <Image src={product.image_url} width={256} height={260} />
                <Cards.Name>{product.name}</Cards.Name>
                <Cards.Price>R$ {product.price}</Cards.Price>
                <Cards.Button>ADD R$ {product.price}</Cards.Button>
              </Cards.Description>
            </Cards.Items>
          )
        })
      }
    </Cards>
  )
}

export default Card
