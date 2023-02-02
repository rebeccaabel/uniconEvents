import { useContext } from "react";
import GlobalContext from "../GlobalContext.jsx";
import Tidbit from "./Tidbit.jsx";

export default function Tidbits(){

    const { tidbits } = useContext(GlobalContext);
    console.log('tidbit page',tidbits)

    return <section id="tidbits">
        <h2>Tidbits</h2>
        {tidbits.map(tb => <Tidbit key={tb.id} tb={tb}/>)}
    </section>
}