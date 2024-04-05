const PropsSub = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.number}</p>
            {props.element}
        </div>
    );
};
export default PropsSub;
