import { useParams } from 'react-router-dom';
import Header from '../Header';
import { useCallback } from 'react';
import ListAndKeys from './ListAndKeys/ListAndKeys';
import Hooks from './Hooks/Hooks';
import PropsMain from './Props/PropsMain';

const PracticeMain = () => {
    const { number } = useParams();
    const Example = useCallback(() => {
        switch (number) {
            case '1':
                return <Hooks />;
            case '2':
                return <ListAndKeys />;
            case '3':
                return <PropsMain />;
            default:
                return <div>Error 404</div>;
        }
    }, [number]);

    return (
        <div>
            <Header />
            <Example />
        </div>
    );
};
export default PracticeMain;
