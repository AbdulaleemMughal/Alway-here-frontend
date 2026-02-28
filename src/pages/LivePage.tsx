import { useParams } from "react-router-dom"

export const LivePage = () => {

    const { memorialId } = useParams();

    return (
        <h1>{memorialId}</h1>
    )
}