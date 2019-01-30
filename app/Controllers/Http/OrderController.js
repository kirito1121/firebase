'use strict'

class OrderController {

  async order({ view }){
    return view.render('orders')
  }

  async cart({view}){
    return view.render('carts')
  }
  async store() {
    //d os
    console.log("abc")
  }
}

module.exports = OrderController
