// eslint-disable-next-line react/prop-types
const Card = ({ children, style }) => {
    return (
        <div className="overflow-hidden rounded-lg shadow" style={style}>
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    );
};

export default Card;
