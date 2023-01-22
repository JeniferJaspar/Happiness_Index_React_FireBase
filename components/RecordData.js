import {db} from "../firebase"
import{collection,getDocs,getDoc,addDoc,doc,} from "firebase/firestore";

    const recordCollectionRef = collection(db,"records")

    class RecordData{

      addRecord = (newRecord) => {

          return addDoc(recordCollectionRef,newRecord);

      };

      getAllRecords = () => {

        return getDocs(recordCollectionRef);
      }

      GetRecord =(id) => {

        const recordDoc =doc(db, "records", id);
        return getDoc(recordDoc);
      };
    }
export default new RecordData();