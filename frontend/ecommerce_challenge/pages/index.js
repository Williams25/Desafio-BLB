import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Products from '../src/services/products'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Logo from '../public/assets/images/Logo.svg'
import Switch from "react-switch"
import ContainerHome from '../src/components/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = props => {
  const [products, setProducts] = useState([])
  const [formSwitch, setFormSwitch] = useState(false)


  const loadProducts = () => {
    Products.findAll().then(res => {
      setProducts(res.data)
    }).catch(err => { err.message })
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div>
      <ContainerHome>
        <ContainerHome.Logo>
          <Image src={Logo} width={268} height={68} fluid />
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
{/* 
      {
        products.map(product => {
          return (
            <p>{product.name}</p>
          )
        })
      } */}
    </div>
  )
}

export default Home