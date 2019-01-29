'use strict'
const User = use('App/Models/User')
class UserController {

    async login({view}){
  return view.render('login');
    }

    async postLogin({request,response,view,params,auth}){
      try {
      const {email,password} = request.all()
      await auth
      .attempt(email,password)
      return view.render('index');
    } catch (error) {
      return view.render('login');
    }
  }


    async register({view}){
  return view.render('register');
    }

    async logout({view,auth}){
      await auth.logout();
      return view.render('index');
    }

    async postRegister({request,response,view,params,auth}){
      try {
        const data = request.only(['email','username','password'])
        const user = await User.create(data)
        const as  = await User.findBy('email', user.email)
        await auth
        .attempt(as.email, as.password)
        return view.render('index');

      } catch (error) {
        return view.render('login');
      }

  }
}


module.exports = UserController
