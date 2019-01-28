"use strict";

const Env = use("Env");

/*
 |--------------------------------------------------------------------------
 | Firebase
 |--------------------------------------------------------------------------
 |
 | Provide details of firebase project
 |
 */

module.exports = {
  /*
   |--------------------------------------------------------------------------
   | Firebase Admin credentials key file
   |--------------------------------------------------------------------------
   */
  credential: {
    type: "service_account",
    project_id: "chat-online-8cfbf",
    private_key_id: "a7f9a738887e2ad7ecf0598feddc043a0614d789",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDa2gSXUR6Cs0tc\n2JQVAoumzUovrJ7eQGhkC/Y9fuJRDpMWveFFhQnOMz+a+d98u4olWfmw9AQGv79W\nVeT8SmdAJziyHytwp53o00vPVjanO0Z4qXojLOBFF+5G5OBw6Yr6db28ZdveS8Qs\n/ZzuRTkSmLD/339ConzOk4WOrQOk19JkcuCRAv7rjiMF5qsxvAcXrqH2vlULEgPe\n3EoShRQ5w89SIDeFnNluHP80kaVWJ8YgYeIZdWc/XhBaCUqzZxJcaIwqxN5avrcD\nalWX/SKWeSrv0yqHcWm0i/x8FNmqzOw0dea1ORaqtzMXF+pxuX71V7bX6lCAxqww\nmzxjwZVvAgMBAAECggEAS4hxizQhHqT4/rt1KGcvgctarmeakUSTguwp+YGAZM9t\n7qxsQo0vHC7N5hQVkTw86rVKG0us1BN72zVcCcM4LYkb5UYivQfs1T2P7ahoxoEL\nyntbvyYu5UnkIC3AVNgV8mmOqaZSIz/tHkYN0qKrlwKCHF2r03i3MKjzsJGAL3T2\nBlCPEsMJXpV+i5lTS3oCoja3G6rPZoYFsB2khGvcvkzCq+k5hFaQO4r2kmZLmU4/\ncXo8Xztd6sISrdq+7HEY7lWayWNJgP1ggh5sI5Oc8mc/c2KhodezQqCyAM2/cJjw\nkkMZ80WQesaVBTWnNtihUkqRtDlfbezeXWPzQ36IUQKBgQD3yt+sRseaLlCJngW9\nyDP7uYFUWqAZM/xKgxu+hSJcD7MGiEqt0s/O3cvBc/GN0jNIu8QNqIVv164PfmRh\nnle8garvRBjqL9Bp8MEzpIpt1pgD3W0nQoSQnKxoyaiAq3X+SLuRhajUj5WPFRqx\nHtBv5tmiTHF2kXgD6sDXpzNblwKBgQDiGb5sSZMG09JIAZmdSJqpQBQjySoST5rG\nbdWcpyb4YV7bDEWATzx+YPjnUDqGXh74A7Ru9ZvlLog6LDkTa6RJSWPQrj1eHJHc\nq0WzqGm/ZkX5a2bT1Jo2+L/kFR5JAzqH4zKmsXb6EEbeGuGGMIRZnrTngHheWd+X\nX020UbGv6QKBgHJqXa9Zm07I9e0lZzdDWyVveZUup2AbzfHF6iilpsDlit+ITRtI\nDSZS6YNw+udmWMHL2XIJD1weNcP3s3gTuiVTpk8GnY5893oDbeJfpn+jJ9wZAQ6w\nuy9e+IkGHGUVRs1cXieKlPNZPVCtCP8h4FLbQECdlYKPFuCQI+0vyhoPAoGAB0ov\nMoyYufKgaAPtMP4DRouzWogE3DxG0DkAVyGohv+UsFlP8FgdqjF0NPkIOgbU1sg/\nzAgNM7FxYPbGDFM/I8HC/xpvDha7uTKod6dpaWthvC3zTccgBb+1aCQqKs5416LC\nok88d8mIj2aseMgdrEoKqSAiQWCCbf37omGz6ekCgYEAyR2XhqOKacBFS+jo8EIx\nbGv09g9j6fyQcBms7MUwoeGcrP4Cl6ewev8hXeUdIDr/PLLJLoY6JuEu6kcmaqH5\nw5z2RhYN1X/G7isj6jN3fkp3y6B5aW7+VIka2Z4onkAkqpZ6hOpero9eAIv/tOGy\n7H0w+Z0rp3AWK1xYWkZrk9M=\n-----END PRIVATE KEY-----\n",
    client_email: "demo-693@chat-online-8cfbf.iam.gserviceaccount.com",
    client_id: "104473912550725701674",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/demo-693%40chat-online-8cfbf.iam.gserviceaccount.com"
  },
  /*
   |--------------------------------------------------------------------------
   | Project Id
   |--------------------------------------------------------------------------
   */
  projectId: Env.get("FIREBASE_PROJECT_ID"),
  /*
   |--------------------------------------------------------------------------
   | API key
   |--------------------------------------------------------------------------
   */
  apiKey: Env.get("FIREBASE_API_KEY"),
  /*
   |--------------------------------------------------------------------------
   | Auth
   |--------------------------------------------------------------------------
   */
  authDomain: Env.get("FIREBASE_AUTH_DOMAIN"),
  /*
   |--------------------------------------------------------------------------
   | Database
   |--------------------------------------------------------------------------
   */
  databaseURL: Env.get("FIREBASE_DATABASE_URL"),
  /*
   |--------------------------------------------------------------------------
   | Hosting
   |--------------------------------------------------------------------------
   */
  storageBucket: Env.get("FIREBASE_STORAGE_BUCKET"),
  /*
   |--------------------------------------------------------------------------
   | messaging
   |--------------------------------------------------------------------------
   */
  messagingSenderId: Env.get("FIREBASE_MESSAGING")
};
