import { useNavigate } from "react-router-dom"


export default function OrderSummary() {

    const navigateHome = useNavigate()
    return (
        <>
            <h2>Order Confirmed</h2>
            <button onClick={() => navigateHome(-1)}>Go Back</button>
        </>
    )
}


