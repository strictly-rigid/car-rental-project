// import css from "./Dropdown.module.css";
// import carMakes from "../../sources/makes.json";
// import { nanoid } from "nanoid";

// export default function Dropdown({ onChange }) {
//   //   const handleDropdownChange = (event) => {
//   //     const selectedMake = event.target.value;
//   //     if (onChange) {
//   //       onChange(selectedMake);
//   //     }
//   //   };
//   return (
//     <div className={css.dropdownContainer}>
//       <label htmlFor="dropdown">Car brand</label>
//       <select id="dropdown" name="dropdown">
//         {carMakes.map((make) => (
//           <option key={nanoid()} value={make}>
//             {make}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
