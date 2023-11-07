const {db} = require("../dbconfig/config.js");
const {collection, getDocs} = require("firebase/firestore");


const fetchReviews = async () => {
  const querySnapshot = await getDocs(collection(db, "Reviews"));
  return querySnapshot.docs.map((doc) => {
    return doc.data();
  });
};

module.exports = {
  fetchReviews,
};
