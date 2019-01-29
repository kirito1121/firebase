$(function() {
  getService();
});

function getService() {
  if (firebase) {
    var db = firebase.firestore();
    db.collection("serviceGroups")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data());
          const html =
            `<li class="main-nav-list"><a href="#">` +
            doc.data().name +
            `<span class="number"></span></a></li>`;

          $("#listmenu").append(html);
        });
      });
  }
}
