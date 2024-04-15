import { useParams } from 'react-router-dom';
import Header from '../Header';
import { useCallback } from 'react';
import ListAndKeys from './ListAndKeys/ListAndKeys';
import PropsMain from './Props/PropsMain';
import Render from './Render/Render';
import Hooks from './Hooks/Hooks';
import Events from './Events/Events';
import ReactRouter from './ReactRouter/ReactRouter';

const PracticeMain = () => {
    const { number } = useParams();
    const Example = useCallback(() => {
        switch (number) {
            case '1':
                return <Render />;
            case '2':
                return <ListAndKeys />;
            case '3':
                return <PropsMain />;
            case '4':
                return <Events />;
            case '5':
                return <Hooks />;
            case '6':
                return <ReactRouter />;
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
