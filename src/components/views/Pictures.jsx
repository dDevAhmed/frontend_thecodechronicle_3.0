import Section from "../../ui/Section"
import SectionTitle from "../../ui/SectionTitle"
import ImageOnly from "../items/posts/Image"

const Pictures = ({ photoNews }) => {
    return (

        <Section>
            <SectionTitle>Photo News</SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    <ImageOnly post={photoNews[0]} classNames={'h-60'} />
                }
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        photoNews?.slice(1).map((post, index) => (
                            <ImageOnly key={index + 1} post={post} classNames={''} />
                        ))
                    }
                </div>
            </div>
        </Section>
    )
}

export default Pictures