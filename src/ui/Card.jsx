// eslint-disable-next-line react/prop-types
const Card = ({ children, classNames, style, onMouseEnter, onMouseLeave }) => {
    return (
        <div className={`overflow-hidden shadow ${classNames}`}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {children}
        </div>
    );
};

export default Card;
