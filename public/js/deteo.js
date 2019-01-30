var db = firebase.firestore();
$(document).ready(function(){
  console.log(JSON.parse(localStorage.getItem('user')).uid)
})



function getUrlparams(){
  let path = location.pathname;
let arr = path.split('/');
return arr[2]
}
let uid = JSON.parse(localStorage.getItem('user')).uid
db.collection("users").doc(uid).collection('orderDetails').where('orderId','==',getUrlparams()).get()
.then(snapshot=>{
  snapshot.forEach(doc => {
    let a = doc.data().service.quantity
    let name = doc.data().service.name
    let slug = doc.data().service.slug
    console.log(doc.data().service)
    const lit = `<a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#${slug}" role="tab" aria-controls="home">${name}
    <span class="badge badge-primary badge-pill">${a}</span></a>`;
    $(".lit").append(lit)
    let extras = doc.data().service.extras
    var chuoi = ``
    extras.forEach(item => {
      chuoi += `${item.name}:${item.value} <br>`;
    })
    const xi = `<div class="tab-pane fade" id="${slug}" role="tabpanel" aria-labelledby="list-home-list">${chuoi}</div>`;
    $(".xi").append(xi)
})
})


