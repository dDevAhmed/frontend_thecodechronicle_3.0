/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types  
export default function Button({ children, style, hover }) {  
  const hoverEffect = hover?.background ? `hover:bg-[${hover.background}] text-[${hover.color}] ` : 'hover:bg-indigo-500';  

  return (  
      <button  
          type="button"  
          className={`rounded px-2 py-1 text-xs font-semibold shadow-sm   
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2   
                      focus-visible:outline-indigo-600   
                      ${hoverEffect} transition-colors`}  
          style={{  
              ...style,  
              // Do not set hover color here, it should be handled by Tailwind CSS class  
          }}  
      >  
          {children}  
      </button>  
  );  
}