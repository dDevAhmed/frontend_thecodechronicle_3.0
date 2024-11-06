/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function CurrencySelector() {
    return (
        <div>
            <div className="relative rounded-md">
                <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="0.00"
                    className="block w-full rounded-md border-0 p-1.5 pr-14 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                        Currency
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-1 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                        <option>USD</option>
                        <option>CAD</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
