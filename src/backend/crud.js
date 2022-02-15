import { db } from "./firebase";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";

const getData = collectionName => {
  const prePosts = [];

  const q = query(collection(db, collectionName));
  const unsub = onSnapshot(q, querySnapshot => {
    querySnapshot.forEach(doc => {
      prePosts.push({ ...doc.data(), id: doc.id });
    });
    // setPosts(prePosts);
  });

  return prePosts;
};

export { getData };
