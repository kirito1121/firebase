'use strict'

class UserController {

    async login({view}){
  return view.render('login');
    }


    async register({view}){
  return view.render('register');
    }
  }

module.exports = UserController
