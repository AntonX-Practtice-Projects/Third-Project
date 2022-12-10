import React from "react";
import Component3 from "./Component3";
import classes from "./Component2.module.css";
const Component2 = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.overall}>
        {props.data.map((item) => {
          return (
            <Component3
              onDelete={props.onDelete}
              id={item.id}
              key={item.id}
              name={item.name}
              company={item.email}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Component2;
