import faker from 'faker'
import './cart.scss'

const mount = el => {
  const cartText = `<div class="cart">You have ${faker.random.number()} items in your cart.</div>`

  el.innerHTML = cartText
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart')

  if (el) {
    mount(el)
  }
}

export { mount }
