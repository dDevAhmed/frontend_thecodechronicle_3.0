/* eslint-disable react/prop-types */
import Button from '../ui/Button'
import Card from '../ui/Card'
import Divider from '../ui/Divider'

const PricingCard = ({ pricing }) => {

    const capitalizeWords = (str) => {
        if (!str) return '';
        return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', borderRadius: '30px' }}>
            <div className='flex flex-col gap-5'>
                {/* top section */}
                {/* //fixme - use items-center text-center in the parent folder */}
                <div className='items-center text-center'>
                    <h5 className='text-[#202224] font-semibold'>{capitalizeWords(pricing.top.package)}</h5>
                    <p className='text-[#202224] text-opacity-80 text-[.75rem] mt-1'>{capitalizeWords(pricing.top.charge)} Charge</p>
                    <h1 className='text-[#4880FF] text-[1.75rem] font-bold mt-4'>${pricing.top.price}</h1>
                </div>
                <Divider />
                {/* center section */}
                <div className='items-center text-center flex flex-col gap-3 text-[#202224] text-[.875rem] font-normal'>
                    <p>{pricing.center.freeSetup === true ? 'Free' : 'Paid'} Setup</p>
                    <p>Bandwidth Limit {pricing.center.bandwidth} GB</p>
                    <p>{pricing.center.connection} User Connection</p>
                    <p className={`${!pricing.center.analytics && 'text-[#202224] text-opacity-50'}`}>Analytics Report</p>
                    <p className={`${!pricing.center.publicApi && 'text-[#202224] text-opacity-50'}`}>Public API Access</p>
                    <p className={`${!pricing.center.plugins && 'text-[#202224] text-opacity-50'}`}>Plugins Integration</p>
                    <p className={`${!pricing.center.customContent && 'text-[#202224] text-opacity-50'}`}>Custom Content Management</p>
                </div>
                <Divider />
                {/* bottom section */}
                <div className='items-center text-center'>
                    <Button classNames={'text-[#4880FF] hover:bg-[#4880FF] hover:text-[#fff]'} style={{padding: '10px 20px', borderRadius: '30px', border: '2px solid #4880FF'}} >{capitalizeWords(pricing.bottom.button)}</Button>
                    <p className='text-[#202224] text-[.875rem] font-normal mt-5'>Start Your {pricing.bottom.trialDays} Day Free Trial</p>
                </div>
            </div>
        </Card>
    )
}

export default PricingCard