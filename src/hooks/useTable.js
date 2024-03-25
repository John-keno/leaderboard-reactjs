function calculateRange(data, rowsPerPage) {
  const range = [];
  const numPages = Math.ceil(data.length / rowsPerPage);
  console.log(numPages);
  for (let i = 1; i <= numPages; i++) {
    range.push(i);
  }
  return range;
}

export default calculateRange;