var db = firebase.firestore();
db.collection("brands")
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});

db.collection("stores").limit(6).get()
.then(snapshot=>{
  snapshot.forEach(doc => {
    console.log(doc.data())
    const html = `<div class="col-lg-4">
                    <div class="categories_post">
                        <img src="../img/blog/cat-post/cat-post-`+doc.data().id+`.jpg" alt="post">
                        <div class="categories_details">
                            <div class="categories_text">
                                <a href="blog-details.html">
                                    <h5>`+doc.data().name+`</h5>
                                </a>
                                <div class="border_line"></div>
                                <p>`+doc.data().description+`</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    $("#brands").append(html)
  })
})


db.collection("services").limit(8).get()
.then(snapshot=>{
  snapshot.forEach(doc => {
    console.log(doc.data())
    const docget = `<div class="col-lg-3 col-md-6">
    <div class="single-product">
        <img style="width:250px;height:250px;" class="img-fluid" src="../img/product/p`+doc.data().id+`.jpeg" alt="">
        <div class="product-details">
            <h6>`+doc.data().name+`</h6>
            <div class="price">
                <h6>$150.00</h6>
                <h6 class="l-through">$210.00</h6>
            </div>
            <div class="prd-bottom">

                <a href="" class="social-info">
                    <span class="ti-bag"></span>
                    <p class="hover-text">add to bag</p>
                </a>
                <a href="" class="social-info">
                    <span class="lnr lnr-heart"></span>
                    <p class="hover-text">Wishlist</p>
                </a>
                <a href="" class="social-info">
                    <span class="lnr lnr-sync"></span>
                    <p class="hover-text">compare</p>
                </a>
                <a href="" class="social-info">
                    <span class="lnr lnr-move"></span>
                    <p class="hover-text">view more</p>
                </a>
            </div>
        </div>
    </div>
    </div>`;
    $(".ahihi").append(docget)
})
})

