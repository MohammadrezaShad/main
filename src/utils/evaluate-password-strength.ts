export function evaluatePasswordStrength(password: string): 'Weak' | 'Medium' | 'Strong' {
  // eslint-disable-next-line no-nested-ternary
  const lengthScore = password.length >= 6 ? 2 : 0;
  const lowercaseScore = /[a-z]/.test(password) ? 1 : 0;
  const uppercaseScore = /[A-Z]/.test(password) ? 1 : 0;
  const numberScore = /[0-9]/.test(password) ? 1 : 0;
  const specialCharScore = /[^A-Za-z0-9]/.test(password) ? 1 : 0;

  const totalScore = lengthScore + lowercaseScore + uppercaseScore + numberScore + specialCharScore;

  if (totalScore <= 3) return 'Weak';
  if (totalScore <= 5) return 'Medium';
  return 'Strong';
}
