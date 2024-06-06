import React, { useState } from "react";
import "./violations.css";
import sign from "../icons/sign.png";
import deleteX from "../icons/x.png";
import MyForm from "./Modal";
import Requests from "./Requests";

export default function Violations() {
  const [isOpen, setIsOpen] = useState(false);
  const [array, setArray] = useState([]);
  const [formData, setFormData] = useState({
    type: "",
    address: "",
    startTime: "",
    breakDuration: "",
    route: "",
    canceledTrips: "",
    orderedBuses: "",
    compensatory: "",
  });

  const handleDelete = (index) => {
    setArray((prev) => prev.filter((item, i) => i !== index));
  };

  const countP = array.filter((item) => item.type === "П").length;
  const countI = array.filter((item) => item.type === "Э").length;
  const countSP = array.filter((item) => item.type === "СЦБ").length;
  const countKC = array.filter((item) => item.type === "КЦ").length;

  const handleSubmit = (formData) => {
    setArray((prev) => [...prev, formData]);
    closeModal();
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div className="block-violations">
        <div className="requests-header">
          <div style={{ display: "flex", fontSize: "30px", color: "#276399" }}>
            <img style={{ height: "40px" }} src={sign} alt="sign icon" />
            Нарушения в движении
          </div>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "600",
              color: "#276399",
              display: "flex",
              alignItems: "center",
            }}>
            <button onClick={openModal} className="button-add">
              + добавить
            </button>
            Всего {array.length} шт.
          </div>
        </div>
        <div className="violations-menu">
          <div className="violations-menu-1" style={{ width: "300px" }}>
            <p>Тип нарушения</p>
          </div>
          <div className="violations-menu-1" style={{ width: "300px" }}>
            <p>Адрес</p>
          </div>
          <div className="violations-menu-1" style={{ width: "170px" }}>
            <p>Время начала</p>
          </div>
          <div className="violations-menu-1" style={{ width: "170px" }}>
            <p>Перерыв (мин)</p>
          </div>
          <div className="violations-menu-1" style={{ width: "170px" }}>
            <p>Маршрут -вагоны, шт</p>
          </div>
          <div className="violations-menu-1" style={{ width: "170px" }}>
            <p>Отменённые рейсы</p>
          </div>
          <div className="violations-menu-1" style={{ width: "200px" }}>
            <p>Заказано / Факт компенсационных автобусов</p>
          </div>
        </div>
        <div className="menu-body">
          {array.map((item, index) => (
            <div key={index} className="menu-body-line-requests">
              <div
                style={{
                  borderBottom: "2px solid #276399",
                  marginBottom: "4px",
                  width: "300px",
                }}>
                {item.type}
              </div>
              <div
                style={{
                  borderBottom: "2px solid #276399",
                  marginBottom: "4px",
                  width: "300px",
                }}>
                {item.address}
              </div>
              <div
                style={{
                  borderBottom: "2px solid #276399",
                  marginBottom: "4px",
                  width: "170px",
                }}>
                {item.startTime}
              </div>
              <div
                style={{
                  borderBottom: "2px solid #276399",
                  marginBottom: "4px",
                  width: "170px",
                }}>
                {item.breakDuration}
              </div>
              <div
                style={{
                  borderBottom: "2px solid #276399",
                  marginBottom: "4px",
                  width: "170px",
                }}>
                {item.route}
              </div>
              <div
                style={{
                  borderBottom: "2px solid #276399",
                  marginBottom: "4px",
                  width: "170px",
                }}>
                {item.canceledTrips}
              </div>
              <div
                style={{
                  marginBottom: "4px",
                  width: "200px",
                  display: "flex",
                }}>
                <div
                  style={{ borderBottom: "2px solid #276399", width: "100px" }}>
                  {item.orderedBuses}
                </div>
                /
                <div
                  style={{ borderBottom: "2px solid #276399", width: "100px" }}>
                  {item.compensatory}
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  style={{ display: "flex", alignItems: "center" }}
                  className="delete-button">
                  <img src={deleteX} alt="delete icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {isOpen && (
          <MyForm
            formData={formData}
            handleSubmit={handleSubmit}
            closeModal={closeModal}
          />
        )}
      </div>
      <Requests
        countP={countP}
        countKC={countKC}
        countSP={countSP}
        countI={countI}
      />
    </div>
  );
}
