import HooksUseCallback from './HooksUseCallback';
import HooksUseEffect from './HooksUseEffect';
import HooksUseMemo from './HooksUseMemo';
import HooksUseRef from './HooksUseRef';
import HooksUseState from './HooksUseState';

const Hooks = () => {
    return (
        <div>
            <HooksUseState />
            <HooksUseRef />
            <HooksUseEffect />
            <HooksUseCallback />
            <HooksUseMemo />
        </div>
    );
};
export default Hooks;
