

$(function () {
  getDetailBrand();
});



function getStore(data){
  if(firebase){
    let db = firebase.firestore();
    db.collection("stores")
    .where("brand.id", "==", data.id)
    .get()
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
  }
}

function getDetailBrand(){
  if(firebase){
    // slug =
    slug = getParamUrl();
    let db = firebase.firestore();
    db.collection('brands').where('slug','==',slug).get()
    .then(snapshot=>{
      snapshot.forEach(doc => {
        console.log(doc.data())
$("#brand").html(doc.data().name)
        getStore(doc.data())
      });
    })
  }
}

function getParamUrl(){
  let path = location.pathname;
  let a = path.split("/brand/");

  return a[1];
}
