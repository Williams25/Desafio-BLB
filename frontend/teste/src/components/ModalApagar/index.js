import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import { XSquare } from 'react-feather'
import Products from '../../services/products'
import styled from 'styled-components'

const Title = styled.h3`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-28)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-sf-pro-display);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 28px/34px SF Pro Display;
  letter-spacing: 0px;
  color: #2C2738;
  opacity: 1;
`
const Button = styled.button`
  margin-left: 1rem;
  width: ${({ isColor }) => isColor ? '10rem' : '12rem'};
  height: 50px;
  background-color: ${({ isColor }) => isColor ? 'transparent' : '#419F4F'};
  border: ${({ isColor }) => isColor ? '2px solid #000000A3' : 'none'};
  color: ${({ isColor }) => isColor ? '#000000A3' : '#EBF4F8'};
  border-radius: 2px;

  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-16)/19px var(--unnamed-font-family-sf-pro-display);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal 600 16px/19px SF Pro Display;
  letter-spacing: 0px;
  opacity: 1;
`

const ModalApagar = ({ id, atualizaTela }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const removeProduct = () => {
    Products.delete(id).then(res => {
      res.status === 204 && atualizaTela()
    }).catch(err => err.message)
  }

  return (
    <>
      <XSquare
        color="red"
        size={24}
        onClick={handleShow}
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Title>Remover produto</Title>
        </Modal.Header>
        <Modal.Body>
          Você realmente deseja remover este produto
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleClose}
            isColor={true}
          >
            Manter
          </Button>

          <Button
            isColor={false}
            onClick={removeProduct}>
            Remover
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalApagar