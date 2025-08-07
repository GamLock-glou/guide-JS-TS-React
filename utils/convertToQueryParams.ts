/**
 * Converts an object with array values into a query string formatted for filter parameters.
 * Example:
 *   {
 *     role: ['provider', 'coordinator'],
 *     institution_id: ['abc', 'def']
 *   }
 * becomes:
 *   filter[role]=provider&filter[role]=coordinator&filter[institution_id]=abc&filter[institution_id]=def
 *
 * @param obj - An object where each key maps to an array of strings.
 * @returns A URL query string representing the filter parameters.
 */
export const convertToQueryParams = (
  obj: Record<string, string[] | undefined>,
) => {
  return Object.entries(obj)
    .flatMap(([key, values]) => {
      if (!values || !values.length) return [];
      return values.map(
        (value) => `filter[${key}]=${encodeURIComponent(String(value))}`,
      );
    })
    .join('&');
};
