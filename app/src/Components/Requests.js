import React, { useState, useEffect } from "react";
import "./requests.css";
import body from "../icons/body.png";

export default function Requests({ selectedDate }) {
  const [inputData, setInputData] = useState([
    { name: "Э", all: 0, current: 0, previous: 0, allNotDone: 0 },
    { name: "П", all: 0, current: 0, previous: 0, allNotDone: 0 },
    { name: "СЦБ", all: 0, current: 0, previous: 0, allNotDone: 0 },
    { name: "КЦ", all: 0, current: 0, previous: 0, allNotDone: 0 },
  ]);

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleDivClick = () => {
    setIsEditing(true);
  };

  const [isEditing, setIsEditing] = useState(false);

  const InputChange = (e, index, field) => {
    const updatedData = [...inputData];
    updatedData[index] = {
      ...updatedData[index],
      [field]: +e.target.value,
    };
    setInputData(updatedData);
  };

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("en-GB");
      const storedData = localStorage.getItem(`requests${formattedDate}`);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setInputData(parsedData);
      } else {
        setInputData([
          { name: "E", all: 0, current: 0, previous: 0, allNotDone: 0 },
          { name: "SCB", all: 0, current: 0, previous: 0, allNotDone: 0 },
          { name: "P", all: 0, current: 0, previous: 0, allNotDone: 0 },
          { name: "KC", all: 0, current: 0, previous: 0, allNotDone: 0 },
        ]);
      }
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("en-GB");
      localStorage.setItem(`requests${formattedDate}`, JSON.stringify(inputData));
    }
  }, [inputData, selectedDate]);

  const totalCounts = inputData.reduce((total, service) => {
    Object.values(service).forEach(value => {
      if (!isNaN(value)) total += value;
    });
    return total;
  }, 0);

  return (
    <div className="block-requests">
      <div className="requests-header">
        <div style={{ display: "flex", fontSize: "30px", color: "#276399" }}>
          <img style={{ height: "40px" }} src={body} alt="icon" />
          Заявки от водителей
        </div>
        <div style={{ fontSize: "30px", fontWeight: "600", color: "#276399" }}>
          {!isEditing ? (
            <button onClick={handleDivClick}>edit</button>
          ) : (
            <button onClick={handleInputBlur}>save</button>
          )}
          Всего заявок {totalCounts} шт.
        </div>
      </div>
      <div className="header-counter">
        <div className="item-menu-1">
          <p>Служба</p>
        </div>
        <div className="item-menu-2">
          <p>Получено всего заявок по службам</p>
        </div>
        <div className="menu-third">
          <div className="item-menu-3">
            <p>Не выполнено заявок</p>
          </div>
          <div className="menu-3">
            <div className="menu-3-item">
              <p>Текущих</p>
            </div>
            <div className="menu-3-item">
              <p>Ранее полученных</p>
            </div>
            <div className="menu-3-item">
              <p>Итого</p>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-body">
        {inputData.map((service, index) => (
          <div key={index} className="menu-body-line">
            <div>{service.name}</div>
            {isEditing ? (
              <>
                <input
                  type="number"
                  value={service.all}
                  onChange={(e) => InputChange(e, index, "all")}
                />
                <input
                  type="number"
                  value={service.current}
                  onChange={(e) => InputChange(e, index, "current")}
                />
                <input
                  type="number"
                  value={service.previous}
                  onChange={(e) => InputChange(e, index, "previous")}
                />
              </>
            ) : (
              <>
                <div>{service.all}</div>
                <div>{service.current}</div>
                <div>{service.previous}</div>
              </>
            )}
            <div>
              {service.all +
                service.current +
                service.previous}
            </div>
          </div>
        ))}
        <div className="menu-body-line-results">
          <div>Всего</div>
          <div>
            {inputData.reduce(
              (total, service) => total + service.all,
              0
            )}
          </div>
          <div>
            {inputData.reduce(
              (total, service) => total + service.current,
              0
            )}
          </div>
          <div>
            {inputData.reduce(
              (total, service) => total + service.previous,
              0
            )}
          </div>
          <div>0</div>
        </div>
      </div>
    </div>
  );
}
