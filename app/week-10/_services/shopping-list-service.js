import { db } from "../_utils/firebase";
import { collection, addDoc, query, where, getDocs, getDoc, doc, updateDoc, deleteDoc, onSnapshot} from "firebase/firestore";

export async function dbGetItems(userId, callback) {
    const collectionReference = collection(db,"users",userId,"items");
    return onSnapshot(collectionReference, (snapshot) => {
        const itemsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        callback(itemsList);
    });    
}

export async function dbAddItem(userId, itemObj) {
    try {
        const newItem = await addDoc(
        collection(db, "users", userId, "items"),
        itemObj
        );

        return newItem.id;

    } catch (error) {
        console.log(error);
    }
}

