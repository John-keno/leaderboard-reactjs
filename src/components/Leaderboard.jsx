import { useEffect, useState } from "react";
import studentsData from "../data/students.js"; // Import your data
import useTable from "../hooks/useTable.js"; // Import your custom hook
import TableHead from "./TableHead.jsx";
import TableBody from "./TableBody.jsx";

export default function Leaderboard() {
  const rowsPerPage = 10; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const pageRange = useTable(studentsData, rowsPerPage);
  const [sortedData, setSortedData] = useState(studentsData);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  useEffect(()=>{
    const sorted = [...sortedData].sort((a, b) => {
      return b['score'] - a['score'];
  });
  
  sorted.forEach((item,index)=>{
    item.id = index+1;
  })
  setSortedData(sorted);
  },[]);


  const visibleCountries = sortedData.slice(startIndex, endIndex);

  return (
    <div className="leaderboard">
      <table>
        <caption>Leaderboard</caption>
        <TableHead />
        <TableBody data={visibleCountries} notFirst={currentPage > 1? "notfirst":""}/>
        <tfoot>
          <tr>
            <th scope="row" colSpan="2"></th>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
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
      <button
        disabled={currentPage === pageRange.length}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        next
      </button>
    </div>
  );
}
