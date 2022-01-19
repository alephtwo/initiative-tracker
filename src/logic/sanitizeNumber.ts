import { MaybeInt } from '../types/MaybeInt';

export function sanitizeNumber(input: string, length: number): MaybeInt {
  const digitsOnly = input.replace(/[^0-9]/, '');
  if (digitsOnly === '') {
    return '';
  }

  return parseInt(digitsOnly.substring(0, length));
}
