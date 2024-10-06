import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

import { db } from "../lib/api";
function App() {


  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "test"));
        const docsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id, 
          ...doc.data(), 
        }));
        setDocuments(docsArray); 
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments(); 
  }, []);
  return (
    <div>
<h2 className="subtitle is-4 mt-4">Documents from Firestore</h2>
      <table className="table is-fullwidth is-striped is-hoverable">
        <thead>
          <tr>
            <th>Field 1</th>
            <th>Field 2</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.lol}</td> 
              <td>{doc.tes}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
