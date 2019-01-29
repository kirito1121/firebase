

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
        // console.log(doc.data())
        const html = `<div class="col-lg-4">
                        <div class="categories_post">
                            <img src="../img/blog/cat-post/cat-post-`+doc.data().id+`.jpg" alt="post">
                            <div class="categories_details">
                                <div class="categories_text">
                                    <a href="`+data.slug+`/store/`+doc.data().slug+`">
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
      if(snapshot.size >0){
        snapshot.forEach(doc => {
          $("#brand").html(doc.data().name)
          getStore(doc.data())
        });
      }else{
        $("#brand").html("")
        const html = `<div class="container justify-content-center d-flex"><h4>Không tìm thấy thông tin cửa hàng</h4></div>`;
        $("#brands").append(html)
      }
    })
  }
}

function getParamUrl(){
  let path = location.pathname;
  let a = path.split("/brand/");

  return a[1];
}
