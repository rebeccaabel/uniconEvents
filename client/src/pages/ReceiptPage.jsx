import Receipt from "../components/Receipt.jsx";
import "../styles/receipt-page.css";

export default function () {

    return <div className="receipt">
        <h1>Thanks for your purchase</h1>
        <Receipt/>
        <Directions/>
    </div>

    function Directions(){
        return <iframe
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=avicciarena&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
    }
}