import ListForeach from './ListForeach';
import ListMap from './ListMap';

const ListAndKeys = () => {
    const listData = ['Test1', 'Test2', 'Test3'];
    return (
        <div>
            <h1>ListAndKeys</h1>
            {/* Map説明 */}
            <ListMap listData={listData} />
            <ListForeach listData={listData} />
        </div>
    );
};
export default ListAndKeys;
