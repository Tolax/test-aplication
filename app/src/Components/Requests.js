import React from "react";
import "./requests.css";
import body from "../icons/body.png";

export default function Requests() {
  return (
    <div className="block-requests">
        <div className="requests-header">
          <div style={{ display: "flex" , fontSize: "30px", color: "#276399"}}>
            <img style={{ height: "40px" }} src={body} />
            Заявки от водителей
          </div>
          <div style={{ fontSize: "30px", fontWeight: '600', color: "#276399" }}>Всего заявок 0 шт.</div>
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
          <div className="menu-body-line">
            <div>Э</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div>0</div>
          </div>
          <div className="menu-body-line">
            <div>П</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div>0</div>
          </div>
          <div className="menu-body-line">
            <div>СЦБ</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div>0</div>
          </div>
          <div className="menu-body-line">
            <div>КЦ</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div style={{ borderBottom: "2px solid #276399", marginBottom: "4px" }}>0</div>
            <div>0</div>
          </div>
          <div className="menu-body-line-results">
            <div>Всего</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
          </div>
        </div>
    </div>
  );
}
