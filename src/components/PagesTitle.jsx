import { useLocation } from "react-router-dom";  

const PagesTitle = () => {  
    const location = useLocation();  
    
    const currentPage = location.pathname.split('/')[1] || 'dashboard'; // Default to 'dashboard'  

    const pageTitlesMap = {  
        'dashboard': 'dashboard',  
        'products': 'products',  
        'favorites': 'favorites',  
        'inbox': 'inbox',  
        'order-lists': 'order lists', 
        'product-stock': 'product stock' 
    };  
 
    const pageTitle = pageTitlesMap[currentPage] || 'Page Not Found';  

    const capitalizeWords = (str) => {  
        return str.replace(/\b\w/g, char => char.toUpperCase());  
    };  

    return (  
        <h3 className="text-[1.5rem] font-semibold text-[#202224]">{capitalizeWords(pageTitle)}</h3>  
    );  
}  

export default PagesTitle;