"use strict";
const FirebaseAdmin = use("FirebaseAdmin");
class StoreController {
  async store({ request, response }) {
    try {
      let { slug, id } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("stores").doc(`${slug}-${id}`);
      id = parseInt(id);
      await ref.set(request.all());
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }

  async update({ params, request, response }) {
    try {
      let { slug } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("stores").doc(`${slug}-${params.id}`);
      await ref.update(request.all());
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }

  async listStore({ params, view }) {
    console.log(params);
    return view.render("store.index", { params });
  }
  async detailstore({ params, view }) {
    console.log(params);
    return view.render("store.detail", { params });
  }
}

module.exports = StoreController;
