export const getIntParam = (searchParams: Record<string, string | string[] | undefined>, name: string): number | undefined => {
  const rawValue = Array.isArray(searchParams[name]) ? searchParams[name][0] : searchParams[name];
  if (typeof rawValue === 'undefined') {
    return;
  }
  const numericalValue = parseInt(rawValue, 10);
  if (!isNaN(numericalValue)) {
    return numericalValue;
  }
};
