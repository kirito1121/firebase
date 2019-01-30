'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Checkauth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response,view ,auth}, next) {
    // call next to advance the request
    try {
      await auth.check()
      await next()
    } catch (error) {
      console.log(error)
      return response.send(view.render('login'))
    }
  }
}

module.exports = Checkauth
