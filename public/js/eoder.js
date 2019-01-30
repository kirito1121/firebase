var db = firebase.firestore();
$(document).ready(function(){
  console.log(firebase)
})
if(firebase.auth().currentUser){

}

db.collection("users").doc('6Z7RGkmtLRSMNwDMmxOK5liiv7n1').collection('orders').get()
.then(snapshot=>{
  snapshot.forEach(doc => {
    console.log(doc.data())
    const docget = ` <li class="list-group-item"><a href="orders/${doc.id}">No:${doc.data().no}</a></li>`;
    $(".abilio").append(docget)
})
})
