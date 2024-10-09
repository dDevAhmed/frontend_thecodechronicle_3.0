? (  
    <div className="flex space-x-2">  
        {tableRow[headerMapping[thead]].map((color, index) => (  
            <div  
                key={index}  
                className="w-6 h-6 rounded-full"  
                style={{ backgroundColor: color }}  
                title={`Color: ${color}`}  
            />  
        ))}  
    </div>  
) 