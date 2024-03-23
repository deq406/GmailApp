import "./Message.css";
import SingleMessage from "./SingleMessage";
import {useEffect, useState} from "react";



function Message() {
  // @ts-ignore
  const [data, setData] = useState([]);

  useEffect(() => {
    // Загружаем данные из JSON файла при монтировании компонента
    fetch('http://localhost:3001/preview')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, []);

  // @ts-ignore
  //
  return (
      <div>
        {data.map((item, index) => (
            <SingleMessage key={index} id={item.id} message={item.message} name={item.name} />
        ))}
      </div>
  );
}

export default Message;
