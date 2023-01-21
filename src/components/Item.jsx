import React from "react";

function Item(props) {
  return (
    <div
      onClick={() => {
        props.delete(props.id);
      }}
    >
      <li>{props.name} </li>{" "}
    </div>
  );
}

export default Item;

// import React from "react";

// function Item(props) {
//   const [checker, setChecker] = React.useState(false);
//   function handleClick() {
//     setChecker(!checker);
//     console.log(checker);
//   }
//   return (
//     <div onClick={handleClick}>
//       <li style={checker ? { textDecoration: "line-through" } : null}>
//         {props.name}{" "}
//       </li>{" "}
//     </div>
//   );
// }

// export default Item;
