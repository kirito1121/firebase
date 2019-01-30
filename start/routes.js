"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on('/').render('index').as('home')
Route.get("/orders","OrderController.order");
Route.get('/login',"UserController.login").as('login');
Route.get('/logout',"UserController.logout").as('logout');
Route.get('/register',"UserController.register").as('register');
Route.post('/register',"UserController.postRegister").as('postregister');
Route.get('/brand/:slug_brand',"StoreController.listStore").as("stores");
Route.get('/brand/:slug_brand/store/:slug_store',"StoreController.detailstore").as("detailstore");
Route.post('/login',"UserController.postLogin").as('postlogin');
Route.get('/contact',({view}) =>{
  return view.render('contact')
}).as('contact');
Route.get('/brand',({view}) =>{
  return view.render('brand')
}).as('brand');
Route.resource("brands", "BrandController");
Route.resource("services", "ServiceController");
Route.resource("stores", "StoreController");
Route.resource("extras", "ExtraController");
Route.resource("orders", "OrderController");
