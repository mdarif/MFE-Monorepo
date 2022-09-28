import faker from 'faker'
import './products.scss'

const mount = el => {
  let products = ''

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`
  }

  el.innerHTML = products
}

// Context/Situation #1
// We are running this file in development in isolation
// We are suing our local index.html file
// Which DEFINITELY has and element with an id of 'dev-product'
// We want to immediately render our app into th at element
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products')

  // Assuming our container doesn't have an element
  // with the id 'dev-products'
  if (el) {
    mount(el) // we are probably running in isolation
  }
}
// Context/Situation #2
// We are running this file in development/production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products'
// We DO NOT WANT to try to immediately render the app
export { mount }
