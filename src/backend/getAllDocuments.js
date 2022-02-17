import { query, collection, onSnapshot, orderBy } from "./firebase";

const getAllDocuments = (db, collectionName, setItems, orderOptions) => {
  const q = query(
    collection(db, collectionName),
    orderBy(orderOptions.name, orderOptions.value)
  );
  const unsub = onSnapshot(q, querySnapshot => {
    let postArray = [];
    querySnapshot.forEach(doc => {
      postArray.push({ ...doc.data(), id: doc.id });
    });
    setItems(postArray);
  });

  return () => unsub();
};

export default getAllDocuments;
