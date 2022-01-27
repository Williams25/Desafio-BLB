import { useEffect, useState } from 'react'
import Products from '../src/services/products'
import { Container, Image } from 'react-bootstrap'
import Logo from '../public/assets/images/Logo.svg'
import Switch from "react-switch"
import ContainerHome from '../src/components/Container'
import Card from '../src/components/Cards'
import Footer from '../src/components/Footer'
import ModalAdicionar from '../src/components/ModalAdicionar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { motion } from 'framer-motion'

const Home = props => {
  const [products, setProducts] = useState([])
  const [formSwitch, setFormSwitch] = useState(false)


  const loadProducts = () => {
    Products.findAll().then(res => {
      setProducts(res.data)
    }).catch(err => { console.log(err.message) })
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -500 },
  }

  return (
    <>
      <ContainerHome
        as={motion.section}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        variants={variants}
      >
        <ContainerHome.Logo>
          <Image src={Logo} width={256} height={256} />
        </ContainerHome.Logo>

        <ContainerHome.Switch>
          <Switch
            checkedIcon={false}
            uncheckedIcon={false}
            onColor={'#0077aa'}
            height={24}
            width={46}
            onChange={() => setFormSwitch(!formSwitch)}
            checked={formSwitch} />
          <ContainerHome.Span>
            Modo Edição
          </ContainerHome.Span>
        </ContainerHome.Switch>
      </ContainerHome>

      <Container className="container mt-2 mb-5"
        as={motion.section}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={variants}
      >
        <Card
          products={products}
          formSwitch={formSwitch}
          atualizaTela={() => loadProducts()}
        />

        {
          formSwitch && (
            <Footer>
              Modo de edição ativo
              <Footer.Content>
                <Footer.Button
                  onClick={() => setFormSwitch(!formSwitch)}
                  isColor={true}
                >
                  Fechar
                </Footer.Button>

                <ModalAdicionar
                  atualizaTela={() => loadProducts()}
                />
              </Footer.Content>
            </Footer>
          )
        }
      </Container>
    </>
  )
}

export default Home