import MapList from '../../../images/ListAndKeyMap.jpg';
const ListMap = ({ listData }) => {
    return (
        <>
            {/* Map説明 */}
            <blockquote>
                <h1>Map</h1>
                <p>Foreachは結果をReturnしない。</p>
                <p>Mapを利用してリストを出力する。</p>

                <img src={MapList} alt="Map" />
            </blockquote>
            <hr />
            <h1>結果</h1>
            {listData.map((data) => {
                return <p key={data}>{data}</p>;
            })}
        </>
    );
};
export default ListMap;
