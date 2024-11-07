/* eslint-disable react/prop-types */
const Section = ({children, classNames}) => {
  return (
    <div className={`${classNames}`}>{children}</div>
  )
}

export default Section