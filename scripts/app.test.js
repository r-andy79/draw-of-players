import { test, expect } from '@jest/globals';
import { checkIfEven } from '.scripts/app.js';

describe('Check if array length is an even number', () => {
  test('true to equal true', () => {
    expect(checkIfEven(['Radek ', ' Darek K', 'Darek Kr ', 'Grzesiek ', ' Piotr', ' Janusz', 'Dawid', 'Filip', 'Kajtek', 'Ela'])).toBe(true);
  })
})