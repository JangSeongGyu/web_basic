const PropsSub = (props) => {
    props.execute();
    return (
        <div>
            <p>SUB BOX CONTENT</p>
            <p>{props.name}</p>
            <p>{props.number}</p>
            {props.element}
        </div>
    );
};
export default PropsSub;
