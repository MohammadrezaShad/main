export function isMobileNumber(input: string): boolean {
  const maskMotionobileRegex = /^09[1-9]\d{8}$/;
  return maskMotionobileRegex.test(input);
}
