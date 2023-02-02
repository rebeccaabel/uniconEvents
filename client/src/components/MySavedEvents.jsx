export function callSavedEvent(id){

}
export function SavedCard ({event}) {
    return <>
        <div className="card" style={{backgroundImage: `url(${event.image})`}}>
            <h3>{event.name}</h3>
            <h3>{event.image}</h3>
            <p>{event.date}</p>
            <p>{event.id}</p>

        </div>
    </>

}