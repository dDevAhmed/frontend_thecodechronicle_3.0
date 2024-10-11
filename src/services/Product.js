import { useQuery } from '@tanstack/react-query';  
import { collection, getDocs } from 'firebase/firestore';  
import { db } from '../firebase.config';  

const fetchProducts = async () => {  
  // fixme - set timeout to slow data fetching
  try {  
    const querySnapshot = await getDocs(collection(db, "products"));  
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));  
    return data;  
  } catch (error) {  
    console.error("Error fetching data:", error);  
    throw new Error("Failed to fetch data"); // Re-throw the error  
  }  
};  

export const useProducts = () => {  
  return useQuery({ // Use the object form  
    queryKey: ['products'], 
    queryFn: fetchProducts,  
  });  
}