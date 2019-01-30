var db = firebase.firestore();
db.collection("brands").get()
.then(snapshot=>{
  snapshot.forEach(doc => {
    console.log(doc.data())
    const docget = `<div class="col-lg-3 col-md-6">
    <div class="single-product">
    <a href="brand/${doc.data().slug}">
        <img style="width:250px;height:250px;" class="img-fluid" src="../img/product/p`+doc.data().id+`.jpeg" alt="">
    </a>
        <div class="product-details">
            <h6>`+doc.data().name+`</h6>
        </div>
    </div>
    </div>`;
    $(".abibi").append(docget)
})
})
