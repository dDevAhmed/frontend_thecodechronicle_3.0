import Mic from '../../assets/icons/mic.png'
import Card from '../Card';

const Audio = () => {

    return (
        <Card classNames={'p-3 flex gap-5 items-center rounded min-h-28 w-20 bg-brand-cool-gray'}>
            <img src={Mic} alt="mic image" className="h-12 w-auto m-auto"/>
        </Card>
    );
}

export default Audio;