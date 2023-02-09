import { useState } from "react";

// export default function A() {
//   const [value, setValue] = useState("Unchanged");
//   return (
//     <div>
//       <B value={value} />
//       <button onClick={click}>E's value changing</button>
//     </div>
//   );

//   function click() {
//     setValue("E's value changing");
//   }
// }

// function B({ value }) {
//   return (
//     <div>
//       <p>here B</p>
//       <C value={value} />
//     </div>
//   );
// }

// function C({ value }) {
//   return (
//     <div>
//       <p>here C</p>
//       <D value={value} />
//     </div>
//   );
// }

// function D({ value }) {
//   return (
//     <div>
//       <p>here D</p>
//       <E value={value} />
//     </div>
//   );
// }

// function E({ value }) {
//   return (
//     <div>
//       <p>here E</p>
//       <h3>{value}</h3>
//     </div>
//   );
// }

export default function A() {
  const [value, setValue] = useState("Unchanged");
  return (
    <div>
      <p>{value}</p>
      <B setValue={setValue} />
    </div>
  );
}

function B({ setValue }) {
  return (
    <div>
      <p>here B</p>
      <C setValue={setValue} />
    </div>
  );
}

function C({ setValue }) {
  return (
    <div>
      <p>here C</p>
      <D setValue={setValue} />
    </div>
  );
}

function D({ setValue }) {
  return (
    <div>
      <p>here D</p>
      <E setValue={setValue} />
    </div>
  );
}

function E({ setValue }) {
  return (
    <div>
      <p>here E</p>
      <button onClick={click}>Click</button>
    </div>
  );

  function click() {
    setValue("A's value changing");
  }
}
