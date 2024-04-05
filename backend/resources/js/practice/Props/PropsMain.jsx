import PropsSub from './PropsSub';

const PropsMain = () => {
    const name = 'SUB BOX';
    const element = <p>HTML!!</p>;
    return (
        <div>
            <p>MAIN BOX</p>
            <PropsSub name={name} number={20} element={element} />
        </div>
    );
};
export default PropsMain;
