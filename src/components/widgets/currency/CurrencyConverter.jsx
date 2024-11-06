import { VscArrowSwap } from "react-icons/vsc";
import CurrencySelector from './CurrencySelector'
import Card from "../../../ui/Card";
import CurrencyChart from "./CurrencyChart";
import CurrencyHistory from "./CurrencyHistory";

const CurrencyConverter = () => {
    return (
        <div className='flex flex-col items-center gap-5'>
            <Card classNames={"flex items-center gap-2 p-2 rounded bg-white"}>
                <CurrencySelector />
                <VscArrowSwap className="h-8 w-auto" />
                <CurrencySelector />
            </Card>

            <Card classNames={"flex flex-col items-center gap-2 p-2 rounded bg-white w-full"}>
                <div className="mb-2">
                    <p className="text-sm text-gray-700">1 Naira equals</p>
                    <h3 className="text-xl">1.50 <span className="text-gray-700 text-md">United States Dollar</span></h3>
                </div>
                
                <CurrencyChart />

                <CurrencyHistory />
            </Card>
        </div >
    )
}

export default CurrencyConverter
