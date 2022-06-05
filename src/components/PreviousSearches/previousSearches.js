import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PreviousSearches = () => {
  const [input, setInput] = useState("");

  const [searches, setSearches] = useState([
    "pizza",
    "burger",
    "salad",
    "ice cream",
    "soup",
  ]);

  function addToSearches() {
    let newSearches = [...searches];
    input !== "" && (newSearches[searches.length] = input);
    setInput("");
    setSearches(newSearches);
    if (searches.length > 8) {
      setSearches([input]);
    }
  }

  function changeInput(e) {
    setInput(e.target.value);
  }

  useEffect(() => {}, [searches]);

  return (
    <div>
      <div className="previous-searches">
        <h2>Previous Searches</h2>
        <div className="previous-searches-container">
          {searches.map((search, index) => (
            <div key={index} className="search-item">
              {search}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input
            type="text"
            value={input}
            onChange={changeInput}
            placeholder="Search ..."
          />
          <button className="btn" onClick={() => addToSearches()}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviousSearches;
