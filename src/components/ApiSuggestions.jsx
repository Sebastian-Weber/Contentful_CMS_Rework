import { Link } from "react-router-dom";
import useFetchData from "./FetchData";

function ApiSuggestions(categoryFilter) {
  const { entries } = useFetchData();
  entries.map((entry) => {
    if (entry.category === categoryFilter) {
      console.log(entry);
      return (
        <div>
          <h3>{entry.title}</h3>
          <Link to={`/API-details/${entry.id}`}>Read more</Link>
        </div>
      );
    }
  });
}

export default ApiSuggestions;
