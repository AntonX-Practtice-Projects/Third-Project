import React from "react";
import classes from "./Component3.module.css";
const Component3 = (props) => {
  const { id } = props;
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <div className={classes["main-component"]}>
      <h3 className={classes.name}>{props.name}</h3>
      <p className={classes.company}>{props.company}</p>
      <p className={classes.desc}>{props.desc}</p>
      <button
        onClick={onDeleteHandler.bind(this, id)}
        className={classes.delete}
      >
        Delete
      </button>
    </div>
  );
};

export default Component3;
