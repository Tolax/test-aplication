import React from "react";
import "./violations.css";
import sign from "../icons/sign.png";

export default function Violations() {
  return (
    <div className="block-violations">
      <div className="requests-header">
        <div style={{ display: "flex", fontSize: "30px", color: "#276399" }}>
          <img style={{ height: "40px" }} src={sign} />
          Нарушения в движении
        </div>
        <div
          style={{
            fontSize: "25px",
            fontWeight: "600",
            color: "#276399",
            display: "flex",
            alignItems: 'center'
          }}>
          <button className="button-add">+ добавить</button>
          Всего 0 шт.
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
        <div className="menu-body-line-requests">
          <div
            style={{
              borderBottom: "2px solid #276399",
              marginBottom: "4px",
              width: "300px",
            }}>
            0
          </div>
          <div
            style={{
              borderBottom: "2px solid #276399",
              marginBottom: "4px",
              width: "300px",
            }}>
            0
          </div>
          <div
            style={{
              borderBottom: "2px solid #276399",
              marginBottom: "4px",
              width: "170px",
            }}>
            0
          </div>
          <div
            style={{
              borderBottom: "2px solid #276399",
              marginBottom: "4px",
              width: "170px",
            }}>
            0
          </div>
          <div
            style={{
              borderBottom: "2px solid #276399",
              marginBottom: "4px",
              width: "170px",
            }}>
            0
          </div>
          <div
            style={{
              borderBottom: "2px solid #276399",
              marginBottom: "4px",
              width: "170px",
            }}>
            0
          </div>
          <div style={{ marginBottom: "4px", width: "200px", display: "flex" }}>
            <div style={{ borderBottom: "2px solid #276399", width: "100px" }}>
              0
            </div>
            /
            <div style={{ borderBottom: "2px solid #276399", width: "100px" }}>
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
