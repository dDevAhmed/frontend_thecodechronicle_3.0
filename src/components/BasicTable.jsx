import Pill from "../ui/Pill"

const products = [
    { productName: 'Lindsay Walton', location: '6096 Marjolaine Landing', datetime: '12.09.2019 - 12.53 PM', piece: 423, amount: 34295, status: 'delivered' },
    // More people...
]

export default function BasicTable() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            {/* //fixme - rounded padding */}
                            <thead className="bg-[#F1F4F9]">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Location
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Date -Time
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Piece
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {products.map((product) => (
                                    <tr key={product.email}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-[#202224] sm:pl-0">
                                            {product.productName}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.location}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.datetime}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.piece}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${product.amount.toLocaleString()}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><Pill title={product.status} /></td>
                                       
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
