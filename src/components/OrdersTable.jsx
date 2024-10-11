/* eslint-disable react/prop-types */
import Badge from "../ui/Badge";

export default function OrdersTable({ header, data }) {
    if (!Array.isArray(data)) {
        return <div>No data available</div>; // Handle the no data case gracefully  
    }

    const capitalizeWords = (str) => {
        if (!str) return '';
        return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6">
                    <table className="min-w-full divide-y divide-gray-300">
                        {/* //fixme - rounded padding */}
                        <thead className="">
                            <tr className="bg-[#FCFDFD]">
                                {header.map((thead, index) => (
                                    <th key={index} scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                                        {capitalizeWords(thead)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map((tableRow, rowIndex) => (
                                <tr key={rowIndex}>
                                    {header.map((thead, colIndex) => (
                                        <td key={colIndex} className="whitespace-nowrap px-3 py-4 text-sm text-brand-primary-black sm:pl-0 text-left">
                                            {thead === 'name'
                                                ? capitalizeWords(tableRow[thead])
                                                : thead === 'address'
                                                    ? capitalizeWords(tableRow[thead])
                                                    : thead === 'type'
                                                        ? capitalizeWords(tableRow[thead])
                                                        : thead === 'amount'
                                                            ? tableRow[thead]?.toLocaleString()
                                                            : thead === 'status'
                                                                ? <Badge title={tableRow[thead]} />
                                                                : tableRow[thead]
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
    )
}
