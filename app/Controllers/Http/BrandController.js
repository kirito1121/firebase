"use strict";
const FirebaseAdmin = use("FirebaseAdmin");
class BrandController {
  async index({ response }) {
    // try {
    let db = FirebaseAdmin.firestore();
    let brandRef = db.collection("services");
    let data;
    await brandRef.get().then(snapshot => {
      data = snapshot.docs;
      console.log(snapshot.docs);
    });
    response.json(data);
    // } catch (error) {
    //   return error;
    // }
  }
  async store({ request, response }) {
    try {
      let { name, description, slug, id } = request.all();
      let db = FirebaseAdmin.firestore();
      let brandRef = db.collection("brands").doc(`${slug}-${id}`);
      id = parseInt(id);
      brandRef.set({ name, description, slug, id });
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }
  async update({ params, request, response }) {
    try {
      let { name, description, slug } = request.all();
      let db = FirebaseAdmin.firestore();
      let brandRef = db.collection("brands").doc(`${slug}-${params.id}`);
      brandRef.update({
        name,
        description
      });
      response.json({ success: true });
    } catch (error) {
      return error;
    }
  }
}

module.exports = BrandController;
