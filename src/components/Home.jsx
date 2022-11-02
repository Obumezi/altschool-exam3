import { useNavigate } from "react-router-dom"


export function Home() {
    const navigate = useNavigate()

    return (
        <>

            <h1>Home page</h1>
            <button onClick={() => navigate('ordersummary')}> Place order</button>
        </>
    )
}