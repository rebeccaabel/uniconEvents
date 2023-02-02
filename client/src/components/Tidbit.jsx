function Tidbit({tb}) {
    if (!tb)return null
    console.log(tb.id)
    return <article>
        <h3>{tb.subject}</h3>
        <p>{tb.content}</p>
    </article>
}

export default Tidbit