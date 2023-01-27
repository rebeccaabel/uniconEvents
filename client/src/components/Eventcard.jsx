

export default function ({title, image, location, date}) {

    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
            <div className="event-card-details-wrapper">

        <h3 className="event-card-details">{title}</h3>
            <p className="event-card-details">{location}</p>
            <p className="event-card-details">{date}</p>

            </div>
        </div>
    </>
}