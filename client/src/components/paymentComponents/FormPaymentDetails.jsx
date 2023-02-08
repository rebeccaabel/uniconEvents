export default function () {
    return <>
        <form className="date-form"><p>Name on Card</p><input type="text" placeholder="Input name here"/></form>
        <form className="date-form"><p>Card digits</p><input type="text" placeholder="Enter card number "/></form>
        <form className="date-form"><p>Expiration date</p><input placeholder="mm/dd"/></form>
        <form className="date-form"><p>CVC</p><input type="text" placeholder="123"/></form>
    </>
}