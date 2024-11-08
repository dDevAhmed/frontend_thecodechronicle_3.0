/* eslint-disable react/prop-types */
import Card from '../../../ui/Card'

const Image = ({ post, classNames }) => {
    return (
        <Card classNames={'rounded-lg'} style={{ backgroundColor: '#fff' }}>
            <div className={`w-full bg-cover bg-no-repeat bg-center rounded-[.3125rem] ${classNames}`} style={{
                backgroundImage: `url(${post.primaryMedia})`, aspectRatio: '16 / 9'
            }} ></div>
        </Card>
    )
}

export default Image