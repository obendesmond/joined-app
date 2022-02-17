import { addDoc, collection } from "./firebase";

const addDocument = async (db, collectionName, doc) => {
  const docRef = await addDoc(collection(db, collectionName), doc);
  return docRef;
};

export default addDocument;
