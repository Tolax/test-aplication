import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import deleteX from "../icons/x.png";
import check from "../icons/check.png";
import "./modals.css";

const validationSchema = Yup.object().shape({
  type: Yup.string()
    .required("Укажите тип")
    .matches(/^(Э|П|СЦБ|КЦ)$/, "Введите корректный тип нарушения"),
  address: Yup.string()
    .required("Укажите адрес")
    .matches(/^г\.[\s\p{L}]+$/u, "Введите адрес в формате г.Название"),
  startTime: Yup.string()
    .required("Укажите время")
    .matches(
      /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      "Введите корректное время (например, 12:00)"
    ),
  breakDuration: Yup.number()
    .typeError("Укажите число (мин)")
    .required("Укажите перерыв")
    .positive("Перерыв должен быть положительным числом"),
  route: Yup.string()
    .matches(/^(\d+\s*,\s*)*\d+$/, "Некорректный формат маршрута")
    .required("Маршрут обязателен"),
  canceledTrips: Yup.string().required("Маршрут обязателен"),
  orderedBuses: Yup.string().required("Укажите"),
  compensatory: Yup.string().required("Укажите"),
});

export default function MyForm({ formData, closeModal, handleSubmit }) {
  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}>
      {({ errors, touched }) => (
        <Form className="modal">
          <div className="modal-content" style={{ display: "flex" }}>
            <div
              style={{
                marginBottom: "4px",
                width: "300px",
              }}
              className={`underline ${
                errors.type && touched.type ? "error" : ""
              }`}>
              <Field
                type="text"
                name="type"
                placeholder="Тип нарушения"
                className={errors.type && touched.type ? "error" : ""}
              />
              <ErrorMessage name="type" component="div" className="error" />
            </div>
            <div
              style={{
                marginBottom: "4px",
                width: "300px",
              }}
              className={`underline ${
                errors.address && touched.address ? "error" : ""
              }`}>
              <Field
                type="text"
                name="address"
                placeholder="Адрес"
                className={errors.address && touched.address ? "error" : ""}
              />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div
              style={{
                marginBottom: "4px",
                width: "170px",
              }}
              className={`underline ${
                errors.startTime && touched.startTime ? "error" : ""
              }`}>
              <Field
                type="text"
                name="startTime"
                placeholder="Время начала"
                className={errors.startTime && touched.startTime ? "error" : ""}
              />
              <ErrorMessage
                name="startTime"
                component="div"
                className="error"
              />
            </div>
            <div
              style={{
                marginBottom: "4px",
                width: "170px",
              }}
              className={`underline ${
                errors.breakDuration && touched.breakDuration ? "error" : ""
              }`}>
              <Field
                type="text"
                name="breakDuration"
                placeholder="Перерыв (мин)"
                className={
                  errors.breakDuration && touched.breakDuration ? "error" : ""
                }
              />
              <ErrorMessage
                name="breakDuration"
                component="div"
                className="error"
              />
            </div>
            <div
              style={{
                marginBottom: "4px",
                width: "170px",
              }}
              className={`underline ${
                errors.route && touched.route ? "error" : ""
              }`}>
              <Field
                type="text"
                name="route"
                placeholder="Маршрут - вагоны, шт"
                className={errors.route && touched.route ? "error" : ""}
              />
              <ErrorMessage name="route" component="div" className="error" />
            </div>
            <div
              style={{
                marginBottom: "4px",
                width: "170px",
              }}
              className={`underline ${
                errors.canceledTrips && touched.canceledTrips ? "error" : ""
              }`}>
              <Field
                type="text"
                name="canceledTrips"
                placeholder="Отменённые рейсы"
                className={
                  errors.canceledTrips && touched.canceledTrips ? "error" : ""
                }
              />
              <ErrorMessage
                name="canceledTrips"
                component="div"
                className="error"
              />
            </div>
            <div
              style={{
                marginBottom: "4px",
                width: "50px",
              }}
              className={`underline ${
                errors.orderedBuses && touched.orderedBuses ? "error" : ""
              }`}>
              <Field
                type="text"
                name="orderedBuses"
                placeholder="Заказано"
                className={
                  errors.orderedBuses && touched.orderedBuses ? "error" : ""
                }
              />
              <ErrorMessage
                name="orderedBuses"
                component="div"
                className="error"
              />
            </div>
            /
            <div
              style={{
                marginBottom: "4px",
                width: "50px",
              }}
              className={`underline ${
                errors.compensatory && touched.compensatory ? "error" : ""
              }`}>
              <Field
                type="text"
                name="compensatory"
                placeholder="Факт компенсационных автобусов"
                className={
                  errors.compensatory && touched.compensatory ? "error" : ""
                }
              />
              <ErrorMessage
                name="compensatory"
                component="div"
                className="error"
              />
            </div>
            <button className="button-reset" type="submit">
              <img style={{ width: "20px" }} src={check} alt="check icon" />
            </button>
            <button
              type="button"
              className="close button-reset"
              onClick={closeModal}>
              <img src={deleteX} alt="delete icon" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
