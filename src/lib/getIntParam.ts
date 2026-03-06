export const getIntParam = (param?: string | string[]): number | undefined => {
  const rawValue = Array.isArray(param) ? param[0] : param;
  if (typeof rawValue === 'undefined') {
    return;
  }
  const numericalValue = parseInt(rawValue, 10);
  if (!isNaN(numericalValue)) {
    return numericalValue;
  }
};
