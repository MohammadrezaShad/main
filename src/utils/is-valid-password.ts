export function isValidPassword(input: string): boolean {
  const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
  return regex.test(input);
}
