import {useParams, useSearchParams} from "react-router-dom"

const UserId = () => {
    const { id}= useParams()
    console.log( id );
    return (
        <div className="mt-14">
            <div>
                asdasd
            </div>
        </div>
    )
}

export default UserId
