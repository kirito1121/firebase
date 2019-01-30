'use strict'

class OrderController {

  async order({ view }){
    return view.render('orders')
  }

  async index({ view }){
    return view.render('orders')
  }


  async store() {
    //d os
    console.log("abc")
  }
}

module.exports = OrderController
