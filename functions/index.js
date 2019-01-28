const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const admin = require("firebase-admin");

exports.onWriteUser = functions.firestore
  .document("brands/brand-2")
  .onUpdate((change, context) => {
    // Retrieve the current and previous value
    const data = change.after.data();
    const previousData = change.before.data();

    // We'll only update if the name has changed.
    // This is crucial to prevent infinite loops.
    if (data.name == previousData.name) return null;

    // Retrieve the current count of name changes
    let count = data.name_change_count;
    if (!count) {
      count = 0;
    }

    // Then return a promise of a set operation to update the count
    return change.after.ref.set(
      {
        name_change_count: count + 1
      },
      { merge: true }
    );
  });
