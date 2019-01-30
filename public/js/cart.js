$(function(){
  getCartUser()
})

function getCartUser(){
  if(firebase.auth().currentUser){
    var db = firebase.firestore();
    db.collection("users")
  .doc(firebase.auth().currentUser.uid).collection('carts').get().then(snapshot=>{
    console.log("cart",snapshot.data())
  })
  }else{
    alert("Ban chua login");
  }
}
