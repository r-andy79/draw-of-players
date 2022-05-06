import { test, expect } from '@jest/globals';
import { stringToArr, trimmed, checkIfEven, randInt, createRandomArr, createPairs, buildPairsList } from './app.js';

// import jsdom from 'jsdom';

describe('my test', () => {
  test('convert string to array', () => {
    const arr = stringToArr('ola, ala');
    console.log(arr)
    expect(arr).toStrictEqual(['ola', ' ala']);
    expect(arr).not.toStrictEqual(['ola', 'ala']);
  })

  test('trim trailing spaces', () => {
    const arr = trimmed([' ola' ,' ala']);
    console.log(arr)
    expect(arr).toStrictEqual(['ola', 'ala']);
    expect(arr).not.toStrictEqual(['ola ', 'ala']);
  })

  test('check for even array length', () => {
    const result = checkIfEven([' ola' ,' ala']);
    const result2 = checkIfEven(['ola', 'ala', 'marta']);
    console.log(result)
    expect(result).toBe(true);
    expect(result2).toBe(false);
  })

  test('generate random integer from array', () => {
    const result = randInt([' ola' ,' ala', 'ela', 'janek']);
    const condition = result >= 0 && result <= 3
    console.log(condition);
    expect(condition).toBe(true);
  })

  test('generate randomized array and check the elements', () => {
    const arrNames = [' ola' ,' ala', 'ela', 'ula'];
    const arr = createRandomArr(arrNames);
    console.log(arr);
    expect(arr).toHaveLength(arrNames.length);
    expect(arr).toContain(' ola');
    arrNames.forEach(el => {
      expect(arr).toContain(el);
    })
  })

  test('generate array of arrays containing pairs', () => {
    const arr = createPairs([' ola' ,' ala', 'ela', 'ula']);
    console.log(arr);
    expect(arr).toStrictEqual([[' ola', ' ala'],['ela', 'ula']]);
  })

  // test('', () => {
  //   buildPairsList([['ola', 'ala'],['ela', 'ula']], )
  // })

})