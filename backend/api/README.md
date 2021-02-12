# API products Ecommerce Challenge

A API foi criada utlizando da tecnologia Node.js a API segue o padrão RESTFul

### Listagem (GET /products)

Lita todos os produtos cadastrados

[
  {
    "id": 56,
    "name": "b6",
    "price": "90.00",
    "image_url": "http://192.168.1.11:5000/uploads/1613097841303--Image-5.png"
  }
]

### Cadastrar (POST /products)

- name: [string] Nome do produto
- price: [number] Preço do produto
- image: [file upload] File upload da imagem do produto


##### Formato da Resposta
Sucesso 201
{
    "id": 1,
    "name": "b6",
    "price": "90.00",
    "image_url": "http://192.168.1.11:5000/uploads/1613097841303--Image-5.png"
}

#### Remoção (DELETE /products/:id)

###### Query Parameter

:id - Id do produto a ser deletado

##### Formato da Resposta

Sucesso 204

### .env

O arquivo .env contem uma chave IP que contem como valor o IP da maquina isso é necessario para que o cliente consumidor da API possa abrir a imagem a partir do indereço de IP