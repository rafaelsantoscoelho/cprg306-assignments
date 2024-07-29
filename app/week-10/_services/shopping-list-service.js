import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, updateDoc } from "firebase/firestore";

export async function dbGetItems(userId) {
    try {
        const collectionReference = collection(db,"users",userId,"items");
        console.log("Collection Reference");
        console.log(collectionReference);
        const itemsQuery = query( collectionReference );
        console.log("Items Query");
        console.log(itemsQuery);        
        const querySnapshot = await getDocs(itemsQuery);
        console.log("Query snapshot");
        console.log(querySnapshot);          
        const itemsList = [];
        querySnapshot.forEach( (doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            itemsList.push(thisItem);
        } );
    
        console.log("Items list");
        console.log(itemsList);
        return itemsList;
    
    } catch (error) {
        console.log(error);
    }
}

export async function dbAddItem(userId, itemObj) {
    try {
        const collectionReference = collection(db, "users", userId, "items");
        const addedItemPromise = await addDoc(collectionReference, itemObj);
        const docRef = doc(db, "users", userId, "items", addedItemPromise.id);
        await updateDoc(docRef, {
            id: addedItemPromise.id
          });        

    } catch (error) {
        console.log(error);
    }
}

