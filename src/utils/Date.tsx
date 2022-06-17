export const formatDate = (date, form) => {
  const _createAt = new Date(date);
  const _getMonth = _createAt.getMonth() + 1;
  const _getDate = _createAt.getDate();

  const _year = _createAt.getFullYear();
  const _month = _getMonth < 10 ? "0" + _getMonth : _getMonth;
  const _date = _getDate < 10 ? "0" + _getDate : _getDate;
  const result = `${_year}${form}${_month}${form}${_date}`;

  return result;
};

export const currentDate = () => {
  const date = new Date();
  return formatDate(date, "/");
};
