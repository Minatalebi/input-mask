/* eslint-disable react/prop-types */
import styles from "./main.module.css";

const Input = ({ handleChange, hint, value }) => {
  return (
    <div className={styles.inputWrapper}>
      {/* ناحیه‌ای که hint و input رو روی هم قرار می‌ده */}
      <div className={styles.inputContainer}>
        {/* پیشنهاد (hint) که محو نشون داده می‌شه */}
        <div className={styles.hint}>
          {value}
          <span className={styles.hintText}>
            {hint && hint.startsWith(value) ? hint.slice(value.length) : ""}
          </span>
        </div>

        {/* input شفاف روی hint قرار می‌گیره */}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={styles.textInput}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Input;

// /* eslint-disable react/prop-types */
// import styles from "./main.module.css";
// const Input = ({ handleChange, hint }) => {
//   return (
//     <div className={styles.input}>
//       <label htmlFor="input" className={styles.hint}>
//         {hint}
//       </label>
//       <input type="text" id="input" onChange={handleChange} />
//     </div>
//   );
// };

// export default Input;
