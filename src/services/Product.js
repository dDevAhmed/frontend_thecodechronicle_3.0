import { doc, updateDoc, query, where, } from 'firebase/firestore';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';

// Fetch products from Firebase
const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};

// Update favorite status in Firebase
const updateFavoriteStatus = async ({ id, isFavorite }) => {
  try {
    const productRef = doc(db, "products", id);
    await updateDoc(productRef, {
      isFavorite: isFavorite
    });
  } catch (error) {
    console.error("Error updating favorite status:", error);
    throw new Error("Failed to update favorite status");
  }
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

export const useFavoriteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateFavoriteStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
