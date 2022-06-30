
import { test, expect } from '@jest/globals';
import { stringToArr, trimmed, checkIfEven, randInt, createRandomArr, createPairs, buildPairsList } from './app.js';

describe('my test', () => {
  test('convert string to array', () => {
    const arr = stringToArr('ola, ala');
    expect(arr).toStrictEqual(['ola', ' ala']);
    expect(arr).not.toStrictEqual(['ola', 'ala']);
  })

  test('trim trailing spaces', () => {
    const arr = trimmed([' ola' ,' ala']);
    expect(arr).toStrictEqual(['ola', 'ala']);
    expect(arr).not.toStrictEqual(['ola ', 'ala']);
  })

  test('check for even array length', () => {
    const result = checkIfEven([' ola' ,' ala']);
    const result2 = checkIfEven(['ola', 'ala', 'marta']);
    expect(result).toBe(true);
    expect(result2).toBe(false);
  })

  test('generate random integer from array', () => {
    const result = randInt([' ola' ,' ala', 'ela', 'janek']);
    const condition = result >= 0 && result <= 3
    expect(condition).toBe(true);
  })

  test('generate randomized array and check the elements', () => {
    const arrNames = [' ola' ,' ala', 'ela', 'ula'];
    const arr = createRandomArr(arrNames);
    expect(arr).toHaveLength(arrNames.length);
    expect(arr).toContain(' ola');
    arrNames.forEach(el => {
      expect(arr).toContain(el);
    })
  })

  test('generate array of arrays containing pairs', () => {
    const arr = createPairs([' ola' ,' ala', 'ela', 'ula']);
    expect(arr).toStrictEqual([[' ola', ' ala'],['ela', 'ula']]);
  })

  test('build html list with data', () => {
    const playersList = document.createElement('ul')
    const newPlayersList = buildPairsList([['ola', 'ala'],['tomasz', 'andrzej']], playersList )
    expect(newPlayersList.querySelector(':last-child').textContent).toBe('tomasz : andrzej')
  })

})