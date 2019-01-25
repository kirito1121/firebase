"use strict";

const { ServiceProvider } = require("@adonisjs/fold");
var FirebaseAdmin = require("firebase-admin");
class FirebaseProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this.app.singleton("FirebaseAdmin", () => {
      const Config = this.app.use("Adonis/Src/Config");
      const config = {
        credential: Config.get("firebase.credential"),
        databaseURL: Config.get("firebase.databaseURL")
      };
      config.credential = FirebaseAdmin.credential.cert(config.credential);
      return FirebaseAdmin.initializeApp(config);
    });
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot() {
    this.app.alias("Firebase", "FirebaseAdmin");
  }
}

module.exports = FirebaseProvider;
