export default function ({name, image, location,datum}) {
    return <>
        <div className="card" alt='artist picture' style={{backgroundImage: `url(${image})`}}>
            <div className="event-card-details">
                <h3>{name}</h3>
                <p>{location}</p>
                <p>{datum}</p>
            </div>
        </div>
    </>

}