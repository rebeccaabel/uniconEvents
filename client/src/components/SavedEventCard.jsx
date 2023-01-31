export default function ({image, title, date}) {
    return  <div className="card" style={{backgroundImage: `url(${image})`}}>
            <h3>{title}</h3>
            <h4>{date}</h4>
         </div>
}