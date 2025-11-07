import React, { useEffect, useState } from "react";
import Input from "./main";
import cities from "./cities.json"; // 👈 ایمپورت مستقیم JSON

function CitySearch() {
  const [query, setQuery] = useState("");
  const [hint, setHint] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      setHint("");
      return;
    }

    // حساس به حروف کوچک و بزرگ (case-sensitive)
    const match = cities.find((city) => city.startsWith(query));

    if (match && match !== query) {
      setHint(match);
    } else {
      setHint("");
    }
  }, [query]);

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <Input handleChange={handleChange} hint={hint} value={query} />
    </div>
  );
}

export default CitySearch;

// import React, { useEffect, useState } from "react";
// import Input from "./main";
// function CitySearch() {
//   const [query, setQuery] = useState("");
//   const [hint, setHint] = useState("");
//   const cities = ["Tehran", "Tabriz", "Shiraz", "Mashhad", "Isfahan"];
//   useEffect(() => {
//     if (match === query) {
//       setHint("");
//       return;
//     }

//     const match = cities.find((city) => city.startsWith(query));

//     if (match) {
//       setHint(match);
//     } else {
//       setHint("");
//     }
//   }, [query]);

//   const handleChange = (event) => {
//     const query = event.target.value;
//     console.log(query);
//     setQuery(query);
//   };
//   return (
//     <>
//       <div>
//         <Input handleChange={handleChange} hint={hint} />
//       </div>
//     </>
//   );
// }

// export default CitySearch;
