"use strict";

const { ServiceProvider } = require("@adonisjs/fold");
var Firebase = require("firebase");
class FirebaseProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this.app.singleton("Firebase", () => {
      const Config = this.app.use("Adonis/Src/Config");

      const config = {
        projectId: Config.get("firebase.projectId"),
        apiKey: Config.get("firebase.apiKey"),
        authDomain: Config.get("firebase.authDomain"),
        storageBucket: Config.get("firebase.storageBucket"),
        databaseURL: Config.get("firebase.databaseURL")
      };

      return Firebase.initializeApp(config);
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
    this.app.alias("Firebase", "Firebase");
  }
}

module.exports = FirebaseProvider;
