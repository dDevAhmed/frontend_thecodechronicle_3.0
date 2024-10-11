import { useQuery } from '@tanstack/react-query';  
import { collection, getDocs } from 'firebase/firestore';  
import { db } from '../firebase.config';  

const fetchData = async () => {  
  try {  
    const querySnapshot = await getDocs(collection(db, "products"));  
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));  
    console.log("Fetched Data:", data);  
    return data;  
  } catch (error) {  
    console.error("Error fetching data:", error);  
    throw new Error("Failed to fetch data"); // Re-throw the error  
  }  
};  

export const useData = () => {  
  return useQuery({ // Use the object form  
    queryKey: ['data'],  
    queryFn: fetchData,  
  });  
};