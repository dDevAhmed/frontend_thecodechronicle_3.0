/* eslint-disable react/prop-types */
import { FaCircle } from "react-icons/fa";
import ProductStockActionButton from "./ProductStockActionButtons";

export default function ProductStockTable({ header, data }) {
    if (!Array.isArray(data)) {
        return <div>No data available</div>; // Handle the no data case gracefully  
    }

    const capitalizeWords = (str) => {
        if (!str) return '';
        return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const headerMapping = {
        'image': 'image',
        'product name': 'productName',
        'category': 'category',
        'price': 'price',
        'piece': 'piece',
        'available color': 'availableColor',
        'action': 'action'
    };

    return (
        // <div className="px-4">
        <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6">
                    <table className="min-w-full divide-y divide-gray-300">
                        {/* //fixme - rounded padding */}
                        <thead className="">
                            <tr>
                                {header.map((thead, index) => (
                                    <th key={index} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        {capitalizeWords(thead)} {/* Capitalize header titles */}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map((tableRow, rowIndex) => (
                                <tr key={rowIndex}>
                                    {header.map((thead, colIndex) => (
                                        <td key={colIndex} className="whitespace-nowrap px-3 py-4 text-sm text-[#202224] sm:pl-0">
                                            {thead === 'image'
                                                ? <img src={tableRow[thead]} alt={tableRow['image']} className="w-28 rounded-md" />
                                                : thead === 'product name'
                                                    ? capitalizeWords(tableRow[headerMapping[thead]])
                                                    : thead === 'category'
                                                        ? capitalizeWords(tableRow[headerMapping[thead]])
                                                        : thead === 'price'
                                                            ? '$' + tableRow[thead].toLocaleString()
                                                            : thead === 'piece'
                                                                ? tableRow[thead]?.toLocaleString()
                                                                : thead === 'available color'
                                                                    ? (
                                                                        <div className="flex space-x-2">
                                                                            {tableRow[headerMapping[thead]].map((color, index) => (
                                                                                <FaCircle key={index} style={{ color }} />
                                                                            ))}
                                                                        </div>
                                                                    )
                                                                    : thead === 'action'
                                                                    && <ProductStockActionButton />
                                            }
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        // </div>
    )
}
