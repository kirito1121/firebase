
$(function() {

  getBrand();
  // getStore();
  // getUrlparams();
});

function getServiceGroups(data) {
  if (firebase) {
    var db = firebase.firestore();
    let arr = [];
    let result = db.collection("serviceGroups")
      .where('brand.id','==',data.id)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
arr.push(doc.data().id);
          console.log(doc.data());
          const html =
            `<li class="main-nav-list"><a href="#services1`+doc.data().id+`">` +
            doc.data().name +
            `<span class="number"></span></a></li>`;

          $("#listmenu").append(html);
        });
      });
      return arr;
  }
}

function getBrand(){
  var params = getUrlparams();
var db = firebase.firestore();
db.collection("brands").where('slug','==',params.brand_slug)
.get().then(snapshot=>{
  if(snapshot.size == 1){
    getStorewithBrand(params)
    snapshot.forEach(doc=>{
      let result = getServiceGroups(doc.data());
      getService(doc.data(),params,result);
    })
  }
})
}

function getStorewithBrand(params){
  var db = firebase.firestore();
  db.collection("stores").where('slug','==',params.store_slug)
  .get().then(snapshot=>{
    if(snapshot.size == 1){
      snapshot.forEach(doc=>{
        $("#sto").html(doc.data().name)
      })
    }
  })
}


function getService(data,params,arr){
  if (firebase) {

    var db = firebase.firestore();
    db.collection("services")
      .where('brand.id','==',data.id)
      .where('stores','array-contains',params.store_slug)
      .get()
      .then(snapshot => {
        console.log(snapshot)
        arr.forEach(item=>{
          const html = `<div class="row" id="services1`+item+`"></div>`;
$("#listservices").append(html);
        })
        snapshot.forEach(doc => {
          console.log(doc.data())
              const html = `<div class="col-lg-4 col-md-6">
              <div class="single-product" data-toggle="modal" data-target="#myModal" onclick="myScript('${doc.id}')">
              <img class="img-fluid" src="../../../img/product/p`+doc.data().id+`.jpg" alt="">
                <div class="product-details">
                <h6>`+doc.data().name+`</h6>
                    for Sports person</h6>
                  <div class="price">
                    <h6>$150.00</h6>
                    <h6 class="l-through">$210.00</h6>
                  </div>
                  <div class="prd-bottom">

                    <a href="" class="social-info">
                      <span class="ti-bag"></span>
                      <p class="hover-text">add to bag</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>`;
                  $("#services1"+doc.data().serviceGroup.id).append(html);
        });
      });
}

}


function getUrlparams(){
  let path = location.pathname;
let arr = path.split('/');
return {brand_slug:arr[2],store_slug:arr[4]}
}


function myScript(data){
  console.log(data)
  $("#bodyservice").html("");
  var db = firebase.firestore();
    db.collection("services").doc(data).get().then(item=>{
  console.log("data",item.data())
  const html = `<h3>${item.data().name}</h3>
  <h2>$149.99</h2>
  <ul class="list">
    <li><a class="active" href="#"><span>Category</span> : Household</a></li>
    <li><a href="#"><span>Availibility</span> : In Stock</a></li>
  </ul>
  <p>${item.data().description}</p>
  <div class="product_count">
    <label for="qty">Quantity:</label>
    <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty">
    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
     class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
     class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
  </div>
  <div id="extra" >

</div>`;


$("#bodyservice").append(html);
item.data().extras.forEach(extra=>{
  const h = `<div class="row">
	<h4>${extra.name}:</h4>
  <div class="btn-group" data-toggle="buttons" id="${extra.name+extra.id}">

  </div>
</div>`;
$("#extra").append(h);
extra.options.forEach(option=>{
  if(option.default){
const op = `<label class="btn  active">
<input type="radio" name="${extra.name+extra.id}" id="${extra.name+extra.id}" checked> ${option.value}
</label>`
$("#"+extra.name+extra.id).append(op)
  }else{
    const op = `<label class="btn ">
    <input type="radio" name="${extra.name+extra.id}" id="${extra.name+extra.id}"> ${option.value}
  </label>`
  $("#"+extra.name+extra.id).append(op)
  }

})
})
    })
}

