var user = JSON.parse(localStorage.getItem('user'));
$(function(){
  getCartUser()
})

function getCartUser(){
  if(localStorage.getItem('user')){
    console.log("user",user)
    var db = firebase.firestore();
    db.collection("users")
  .doc(user.uid).collection('carts').get().then(snapshot=>{
    var i = 1;
    if(snapshot.size >0){
      snapshot.forEach(item=>{
        console.log(item.data())
        const html = `<tr>
                        <td>
                            <div class="media">
                                <div class="d-flex">
                                    <img src="img/cart.jpg" alt="">
                                </div>
                                <div class="media-body" id="bodyservice${i}">
                                    <p>${item.data().name}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h5>$360.00</h5>
                        </td>
                        <td>
                        <h5>${item.data().quantity}</h5>

                        </td>
                        <td>
                            <h5>$720.00</h5>
                        </td>
                    </tr>`;
                    $('tbody').append(html);
                    item.data().extras.forEach(extra=>{
                      const h = `<p><b>${extra.name}: </b>${extra.value}</p>`;

                      $("#bodyservice"+i).append(h);
                    })
                    i++;
      })

      $('tbody').append(`<tr>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>
                                  <h5>Subtotal</h5>
                              </td>
                              <td>
                                  <h5>$2160.00</h5>
                              </td>
                          </tr>
                          <tr class="out_button_area">
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>
                                  <div class="checkout_btn_inner d-flex align-items-center">
                                      <a class="gray_btn" href="#">Continue Shopping</a>
                                      <a class="primary-btn" href="#" onClick="checkout()">Checkout</a>
                                  </div>
                              </td>
                          </tr>`);
    }else{
      $('tbody').append(`<tr>
                              <td>

                              </td>
                              <td>
                                <p>Bạn chưa chọn sản phẩm nào </p>
                              </td>
                              <td>

                              </td>
                          </tr>`);
      // $(location).attr("href", "brand");
    }


  })
  }else{
      alert("bạn chua login")
  }
}


function checkout(){
  $.post("orders",
  {
    userId: user.uid
  },
  function(data, status){
  });
  $(location).attr("href", "/");
  console.log("ok")
}
