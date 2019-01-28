'use strict'

class UserController {

  async login({view}){
return view.render('login');
  }
}

module.exports = UserController
