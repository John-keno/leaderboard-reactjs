function useSort(data, key) {
  const sorted = [...data].sort((a, b) => {
    return b[key] - a[key];
  });
  sorted.forEach((item, index) => {
    item.id = index + 1;
  });
  console.log(sorted);
  return sorted;
}

export default useSort;
