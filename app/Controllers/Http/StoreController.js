"use strict";
const FirebaseAdmin = use("FirebaseAdmin");
class StoreController {
  async store({ request, response }) {
    try {
      let { name, description, slug, id, brand_id } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("stores").doc(`${slug}-${id}`);
      id = parseInt(id);
      brand_id = parseInt(brand_id);
      await ref.set({ name, description, slug, id, brand_id });
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }

  async update({ params, request, response }) {
    try {
      let { name, description, slug, brand_id } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("stores").doc(`${slug}-${params.id}`);
      brand_id = parseInt(brand_id);
      await ref.update({ name, description, brand_id });
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }
}

module.exports = StoreController;
