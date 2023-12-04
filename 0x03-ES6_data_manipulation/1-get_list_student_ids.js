const getListStudentIds = (arrs) => {
  const arrIds = [];
  const res = Array.isArray(arrs)
    ? arrs.map((arr) => arrIds.push(arr.id))
    : arrIds;
  return res;
};

export default getListStudentIds;
