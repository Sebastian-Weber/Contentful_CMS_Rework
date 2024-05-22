import { Link } from "react-router-dom";
import useFetchData from "./FetchData";

function ApiSuggestions(categoryFilter) {
  const { entries } = useFetchData();

  entries.map((entry) => {
    if (entry.category === categoryFilter.categoryFilter) {
      console.log(entry.category);
      console.log(categoryFilter.categoryFilter);
      return (
        <>
          <div className="flex">
            <h1>Huhu</h1>
            <h3>{entry.title}Hallo</h3>
            <Link to={`/API-details/${entry.id}`}>Read more</Link>
          </div>
        </>
      );
    }
    return null;
  });
}

export default ApiSuggestions;
