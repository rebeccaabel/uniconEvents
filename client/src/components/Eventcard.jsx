

export default function ({title, image, location, date}) {

    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
            <div className="event-card-details">

        <h3 >{title}</h3>
            <p>{location}</p>
            <p>{date}</p>

            </div>
        </div>
    </>


}



