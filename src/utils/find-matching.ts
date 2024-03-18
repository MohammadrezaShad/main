export function findMatching(
  input: string,
  list: string[],
  options = {caseSensitive: false, matchSubstring: false},
) {
  const sanitizedInput = input.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Sanitize input

  let flags = 'i'; // Default to case-insensitive matching
  if (options.caseSensitive) {
    flags = '';
  }

  let regexPattern = sanitizedInput;
  if (!options.matchSubstring) {
    regexPattern = `\\b${sanitizedInput}\\b`; // Match whole words by default
  }

  const regex = new RegExp(regexPattern, flags);

  return list.filter(job => regex.test(job));
}
