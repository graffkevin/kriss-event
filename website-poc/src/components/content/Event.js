import DetailsEvent from "./DetailsEvent";
import {itemsEvent} from "./db/items";

function Event() {

    return (
        <div className="row">
            {itemsEvent.map(({id, type, alias, image}) => (
                <DetailsEvent 
                    key = {id}
                    type = {type}
                    alias = {alias}
                    image = {image}
                />
            ))}
        </div>
    )
};

export default Event;