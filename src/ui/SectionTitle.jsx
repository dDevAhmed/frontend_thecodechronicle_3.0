/* eslint-disable react/prop-types */
const SectionTitle = ({ children, classNames }) => {
    return (
        <h3 className={`text-xl font-semibold mb-5 ${classNames}`}>{children}</h3>
    )
}

export default SectionTitle