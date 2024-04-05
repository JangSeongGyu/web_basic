const ListForeach = ({ listData }) => {
    return (
        <>
            {/* Map説明 */}
            <blockquote>
                <h1>Foreach</h1>
                <p>Foreachは結果をReturnしない。</p>
                <p>Foreachを利用してリストを出力する。</p>
            </blockquote>
            <hr />
            <h1>結果</h1>
            {listData.map((data) => {
                return <p key={data}>{data}</p>;
            })}
        </>
    );
};
export default ListForeach;
