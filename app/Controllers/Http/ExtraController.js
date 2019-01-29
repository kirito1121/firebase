"use strict";
const FirebaseAdmin = use("FirebaseAdmin");
class ExtraController {
  async store({ request, response }) {
    try {
      let { slug } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("extras").doc(`${slug}-${id}`);
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
      let ref = db.collection("extras").doc(`${slug}-${params.id}`);
      await ref.update(request.all());
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }

  async destroy({ params, request, response }) {
    try {
      let { slug } = request.all();
      let db = FirebaseAdmin.firestore();
      let ref = db.collection("extras").doc(`${slug}-${params.id}`);
      await ref.delete();
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }
}

module.exports = ExtraController;
