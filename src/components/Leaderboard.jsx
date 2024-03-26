import { useState } from "react";
import studentsData from "../data/students.js"; // Import your data
import useTable from "../hooks/useTable.js"; // Import your custom hook
import TableHead from "./TableHead.jsx";
import TableBody from "./TableBody.jsx";
import useSort from "../hooks/useSort.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons'

export default function Leaderboard() {
  const rowsPerPage = 10; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const pageRange = useTable(studentsData, rowsPerPage);
  const sortedData = useSort(studentsData, "score");

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const visibleCountries = sortedData.slice(startIndex, endIndex);

  return (
    <div className="leaderboard">
      <table>
        <caption>Leaderboard</caption>
        <TableHead />
        <TableBody
          data={visibleCountries}
          notFirst={currentPage > 1 ? "notfirst" : ""}
        />
        <tfoot>
          <tr>
            <th scope="row" colSpan="2"></th>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
      <div className="table-btn">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <FontAwesomeIcon icon={faBackwardStep} />
        </button>
        <div>
        {/* Render pagination buttons */}
        {pageRange.map((page) => (
          
            <button
            key={page}
            onClick={() => setCurrentPage(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
          
          
        ))}
        </div>
        <button
          disabled={currentPage === pageRange.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <FontAwesomeIcon icon={faForwardStep} />
        </button>
      </div>
    </div>
  );
}
