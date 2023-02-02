export function callSavedEvent(id){

}
export function SavedCard ({name, location, image, id, date}) {
    return <>
        <div className="card" style={{backgroundImage: `url(${image})`}}>
            <h3>{name}</h3>
            <h3>{location}</h3>
            <p>{id}</p>
            <p>{date}</p>

        </div>
    </>

}