import React from "react";
import useTable from "../hooks/useTable.js"; // Import your custom hook

export default function TableButtons(page, setPage, data) {
    const pageRange = useTable(data, 10);
  return (
    <div className="table-buttons">
      {/* {<button
        disabled={Page === 1}
        onClick={() => setPage(Page)}
      >
        Prev
      </button> } */}
      {/* {Render pagination buttons */}
      {pageRange.map((pageNum) => (
        <button
          key={page}
          onClick={() => setPage(pageNum)}
          disabled={page === pageNum}
        >
          {page}
        </button>
      ))}
      {/* //   <button
    //     disabled={currentPage === pageRange.length}
    //     onClick={() => setCurrentPage(currentPage + 1)}
    //   >
    //     next
    //   </button> } */}
    </div>
  );
}
