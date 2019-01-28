"use strict";
const FirebaseAdmin = use("FirebaseAdmin");

class ServiceController {
  async store({ request, response }) {
    try {
      let { name, description, slug, id, brand_id } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("services").doc(`${slug}-${id}`);
      id = parseInt(id);
      brand_id = parseInt(brand_id);
      ref.set({ name, description, slug, id, brand_id });
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }

  async update({ params, request, response }) {
    try {
      let { name, description, slug, brand_id, stores } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("services").doc(`${slug}-${params.id}`);
      brand_id = parseInt(brand_id);
      stores = stores.split("|");
      ref.update({ name, description, brand_id, stores });
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }
}

module.exports = ServiceController;
