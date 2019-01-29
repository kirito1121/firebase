'use strict'
const User = use('App/Models/User')
class UserController {

    async login({view}){
  return view.render('login');
    }


    async register({view}){
  return view.render('register');
    }

    async postRegister({request,response,view,params,auth}){
      const data = request.only(['email','username','password'])
      const user = await User.create(data)
      const as  = await User.findBy('email', user.email)
      await auth
      .remember(true)
      .attempt(as.email, as.password)
      return view.render('index');
      }
  }


module.exports = UserController
