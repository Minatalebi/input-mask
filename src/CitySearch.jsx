import React, { useEffect, useState } from "react";
import Input from "./main";

function CitySearch() {
  const [query, setQuery] = useState("");
  const [hint, setHint] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("src/cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.error("error loading cities:", err));
  }, []);
  useEffect(() => {
    if (!cities.length || query === "") {
      setHint("");
      return;
    }
    const match = cities.find((city) => city.startsWith(query));
    setHint(match && match !== query ? match : "");
  }, [query, cities]);
  const handleChange = (event) => {
    const query = event.target.value;
    setQuery(query);
  };
  return (
    <div>
      <Input handleChange={handleChange} hint={hint} />
    </div>
  );
}

export default CitySearch;
