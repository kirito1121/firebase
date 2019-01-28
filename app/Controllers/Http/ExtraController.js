"use strict";
const FirebaseAdmin = use("FirebaseAdmin");
class ExtraController {
  async store({ request, response }) {
    try {
      let { name, slug, id } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("extras").doc(`${slug}-${id}`);
      id = parseInt(id);
      await ref.set({ name, slug, id });
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }

  async update({ params, request, response }) {
    try {
      let { name, slug } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("extras").doc(`${slug}-${params.id}`);
      await ref.update({ name, slug });
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }
}

module.exports = ExtraController;
