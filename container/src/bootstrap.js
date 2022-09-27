import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

console.log('Container!!!')

const products = document.querySelector('#my-products')
const cart = document.querySelector('#my-cart')
productsMount(products)
cartMount(cart)
