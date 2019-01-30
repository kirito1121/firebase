'use strict'
const FirebaseAdmin = use("FirebaseAdmin")
class OrderController {

  async order({ view }){
    return view.render('orders')
  }

  async index({ view }){
    return view.render('orders')
  }


  async store({ request }) {
    let {
      userId
    } = request.all();

    let db = FirebaseAdmin.firestore();

    let ref = db.collection("users").doc(userId);

    let services = [];

    let cartRef = ref.collection("carts")
    await cartRef.get().then(snap =>{
      snap.forEach(doc => {
        services.push(doc.data())
      });
    })
    // return services
    let orderRef = ref.collection("orders");

    await orderRef.add({ userId, status: "booking" }).then(async doc => {
      await orderRef.doc(doc.id).update({
        id: doc.id,
        no: doc.id
      })
      let detailRef = ref.collection("orderDetails");

      services.forEach(async service => {
        await detailRef.add({ orderId: doc.id , service }).then(item => {
          // lay doc
          detailRef.doc(item.id).update({
            id: item.id
          })
        });
      });
      console.log(doc.id);
    });

    await cartRef.get().then(snap =>{
      snap.forEach(async doc => {
       await cartRef.doc(doc.id).delete()
      });
    })
  }
}

module.exports = OrderController
