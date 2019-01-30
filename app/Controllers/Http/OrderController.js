'use strict'

class OrderController {

  async order({ view }){
    return view.render('orders')
  }

  async index({ view }){
    return view.render('orders')
  }

  async show({ view,params }){
    return view.render('ordersdetails',{id: params.id})
  }


  async store() {
    //d os
    console.log("abc")
  }
}

module.exports = OrderController
