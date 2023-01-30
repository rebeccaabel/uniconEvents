export default function ({details}) {
    console.table('Details',details)
    if (!details) return null
    return <div className="card" style={{backgroundImage: `url(${details.image})`}}>
        <h3>{details.title}</h3>
        <p>{details.text}</p>
    </div>
}