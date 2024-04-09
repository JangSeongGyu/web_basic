import EventPropagation from './EventPropagation';
import EventsOnChange from './EventsOnChange';
import EventsOnClick from './EventsOnClick';

const Events = () => {
    return (
        <div>
            <EventsOnClick />
            <EventPropagation />
            <EventsOnChange />
            追加？
        </div>
    );
};
export default Events;
