const getListStudentIds = (arrs) => {
  const arrIds = [];
  const res = arrs instanceof Array
    ? arrs.map((arr) => arrIds.push(arr.id))
    : arrIds;
  return res;
};

export default getListStudentIds;
