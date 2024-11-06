/* eslint-disable react/prop-types */
const Section = ({children, classNames}) => {
  return (
    <div className={`mt-5 ${classNames}`}>{children}</div>
  )
}

export default Section