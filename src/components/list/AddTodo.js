import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from 'react-bootstrap/Button'
import './AddTodo.css';

const initialValues = {
    title: "",
    category: "",
    task: "",
    dataCreated: new Date(),
    deadLine: "",
  }

const validationSchema = Yup.object({
    title: Yup.string()
      .max(25, "Must be 25 characters or less")
      .required("Required"),
    category: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    task: Yup.string()
      .required("Required"),
    deadLine: Yup.date()
        .required("Required")
})

const AddTodo = ({addTodo}) => {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
        console.log(values);
        addTodo({...values, id: Math.floor(Math.random()*10000)});
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="list-wrapper">
      <label className="form-label" htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        className="form-control"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? (
        <div className="form-text">{formik.errors.title}</div>
      ) : null}

      <label className="form-label" htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        className="form-control"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.category}
      />
      {formik.touched.category && formik.errors.category ? (
        <div className="form-text">{formik.errors.category}</div>
      ) : null}

      <label className="form-label" htmlFor="task">Task</label>
      <input
        id="task"
        name="task"
        type="text"
        className="form-control"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.task}
      />
      {formik.touched.task && formik.errors.task ? (
        <div className="form-text">{formik.errors.task}</div>
      ) : null}

    <label className="form-label" htmlFor="deadLine">Dead Line</label>
      <input
        id="deadLine"
        name="deadLine"
        type="date"
        className="form-control"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.deadLine}
      />
      {formik.touched.deadLine && formik.errors.deadLine ? (
        <div className="form-text">{formik.errors.deadLine}</div>
      ) : null}

      <Button type="submit" id="submit-btn">Submit</Button>
    </form>
  );
};

export default AddTodo;
