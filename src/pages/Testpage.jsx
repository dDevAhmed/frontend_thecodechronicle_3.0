/* eslint-disable react/prop-types */  
import Pill from "../ui/Pill"; // Presumably an unused import as it's not used in the current component  

export default function BasicTable({ header, data }) {  
    return (  
        <div className="px-4 sm:px-6 lg:px-8">  
            <div className="mt-8 flow-root">  
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">  
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">  
                        <table className="min-w-full divide-y divide-gray-300">  
                            <thead className="bg-[#F1F4F9]">  
                                <tr>  
                                    {header.map((thead, index) => (  
                                        <th key={index} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">  
                                            {thead}  
                                        </th>  
                                    ))}  
                                </tr>  
                            </thead>  
                            <tbody className="divide-y divide-gray-200">  
                                {data.map((tableRow, rowIndex) => (  
                                    <tr key={rowIndex}>  
                                        {/* Map over each cell using object destructuring */}  
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#202224] sm:pl-0">  
                                            {tableRow.productName}  
                                        </td>  
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#202224] sm:pl-0">  
                                            {tableRow.location}  
                                        </td>  
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#202224] sm:pl-0">  
                                            {tableRow.datetime}  
                                        </td>  
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#202224] sm:pl-0">  
                                            {tableRow.piece}  
                                        </td>  
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#202224] sm:pl-0">  
                                            {tableRow.amount}  
                                        </td>  
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#202224] sm:pl-0">  
                                            {tableRow.status}  
                                        </td>  
                                    </tr>  
                                ))}  
                            </tbody>  
                        </table>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}