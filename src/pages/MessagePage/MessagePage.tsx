import {Fragment, useEffect, useState} from "react";
import "./MessagePage.css";
import Header from "../../components/Header.tsx";
import Sidebar from "../../components/Sidebar.tsx";
import MessageBody from "./components/MessageBody/MessageBody.tsx";
import {useParams} from "react-router-dom";

export default function MessagePage () {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        // Загружаем данные из JSON файла при монтировании компонента
        fetch(`http://localhost:3001/getMessage/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Ошибка при загрузке данных:', error));
    }, []);

    return(
        <Fragment>
            <Header />
            <div className="grid-cont">
                <Sidebar />
                <MessageBody data={data}/>
            </div>
        </Fragment>
    );
}