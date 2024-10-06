import {useParams} from "react-router-dom";

function Page03() {
    const params = useParams()
    return (
        <div>
            <h1>Page03</h1>
            <div>La valeur du paramètre param01 est: {params.param01}</div>
        </div>
    )
}

export default Page03;
