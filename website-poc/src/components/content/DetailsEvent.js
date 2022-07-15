import './style.css'

function DetailsEvent({ type, alias, image }) {
    return ( 
        <div className="col-sm">
            <img src={image} alt={type} className="img-thumbnail img-size img-transition" />
            <h2 className="title-img-position">{alias}</h2>
        </div>
    );
};

export default DetailsEvent;