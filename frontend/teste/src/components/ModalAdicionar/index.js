import { Modal, Image } from 'react-bootstrap'
import { useState } from 'react'
import Footer from '../Footer'
import Products from '../../services/products'
import styled from 'styled-components'
import Form from '../Form'
import Label from '../Label'
import ImageLogo from '../../../public/assets/images/ionic-ios-image.svg'

const Title = styled.h3`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-34)/40px var(--unnamed-font-family-sf-pro-display);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 34px/40px SF Pro Display;
  letter-spacing: 0px;
  color: #2C2738;
  opacity: 1;
`
const Button = styled.button`
  margin-left: 1rem;
  width: 100%;
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

const ModalAdicionar = ({ atualizaTela }) => {
  const [show, setShow] = useState(false)
  const [images, setImages] = useState([])
  const [previewImages, setPreviewImages] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleSelectImages = (event) => {
    if (!event.target.files) return

    const selectImages = Array.from(event.target.files)
    setImages(selectImages)

    const selectImagesPreview = selectImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectImagesPreview)
  }

  const handleToSubmit = e => {
    e.preventDefault()
    const data = new FormData()

    if (name.length === 0 || price.length === 0 || images.length === 0) return setError('Preencha todos os campos!')
    setError('')

    data.append('name', name)
    data.append('price', price)
    data.append('image_url', images[0])

    Products.create(data).then(res => {
      res.status === 201 && atualizaTela()
      setName('')
      setPrice('')
      setImages([])
      setPreviewImages([])
      handleClose()
    }).catch(err => err.message)
  }

  return (
    <>
      <Footer.Button
        isColor={false}
        onClick={handleShow}
      >
        Adicionar Produto
      </Footer.Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Header closeButton>
          <Title>Adicionar Produto</Title>
        </Modal.Header>

        <Form
          method="post"
          onSubmit={handleToSubmit}
        >
          <Modal.Body>
            <Label.Content>
              {
                previewImages.length === 0 ?
                  <Image src={ImageLogo} width={56} height={56} />
                  :
                  previewImages.map(image => {
                    return (
                      <Image
                        key={String(image)}
                        src={String(image)}
                        alt={String(image)}
                        width={156}
                        height={156}
                        className="mt-4"
                      />
                    )
                  })
              }

              <Label.Span className="mt-2">
                Clique em selecionar imagem ou arraste-a aqui
              </Label.Span>

              <Label htmlFor="images">
                <Label.Title className="mt-2">
                  Selecionar imagem
              </Label.Title>

                <input
                  multiple
                  type="file"
                  id="images"
                  onChange={handleSelectImages}
                  style={{ visibility: 'hidden' }}
                />

              </Label>
            </Label.Content>
            <Form.Content>

              <Form.Label className="mt-3">
                Nome
                <Form.input
                  type="text"
                  isInput={true}
                  placeholder="A1"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Form.Label>

              <Form.Label className="mt-3">
                Preço
                <Form.input
                  type="number"
                  isInput={false}
                  placeholder="R$ 99"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </Form.Label>

            </Form.Content>

            <Form.Label className="mt-3">
              {error}
            </Form.Label>
          </Modal.Body>
          <Modal.Footer>
            <Button
              isColor={false}
            >
              Adicionar
          </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ModalAdicionar