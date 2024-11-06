/* eslint-disable react/prop-types */
'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const memoryOptions = [
    { name: '48H', inStock: true },
    { name: '1W', inStock: true },
    { name: '1M', inStock: true },
    { name: '12M', inStock: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CurrencyHistory() {
    const [mem, setMem] = useState(memoryOptions[2])

    return (

        <RadioGroup value={mem} onChange={setMem} className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {memoryOptions.map((option) => (
                <Radio
                    key={option.name}
                    value={option}
                    disabled={!option.inStock}
                    className={classNames(
                        option.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                        'flex items-center justify-center rounded-md bg-white px-2 py-2 text-xs font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset',
                    )}
                >
                    {option.name}
                </Radio>
            ))}
        </RadioGroup>
    )
}
