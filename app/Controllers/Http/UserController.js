'use strict'
const User = use('App/Models/User')
const firebaseAdmin = use('FirebaseAdmin')
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
        console.log('zp')
        const data = request.only(['email','username','password'])
        const {email,password} = request.all()
        const user = await User.create(data)
        const as  = await User.findBy('email', user.email)
        const json = as.toJSON()
        await auth
        .attempt(email, password)
        var db = firebaseAdmin.firestore();
        var a = await db.collection('users').doc(""+as.id).set(json)
        return view.render('index');
      } catch (error) {
        console.log('err',error)
        return view.render('login');
      }

  }
}


module.exports = UserController
