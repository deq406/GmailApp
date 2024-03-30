import "./MessageBody.css";
import {Fragment} from "react";

//@ts-ingore
interface MessageBodyProps {
    data: any[]
}

export default function MessageBody ({ data }: MessageBodyProps) {
    console.log(data)
    return (
        <Fragment>
            <div className="messageBox">
                <h2>Facebook Registration</h2>
                <br/>
                <div>
                        <li key={data.index}>
                            <h2>{data.name}</h2>
                            <p>{data.message}</p>
                            <p>{data.data}</p>
                        </li>
                </div>
            </div>
        </Fragment>
)
}