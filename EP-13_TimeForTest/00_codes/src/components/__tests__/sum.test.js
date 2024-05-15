import { sum } from "../sum";

// files which is used for test cases
/**
 * Header.test.js
 * Header.test.ts
 * Header.spec.js
 * Header.spec.ts
 */

// and this is known as dunder => __

//* test case is written in this way ⬇️
// Call the function test and this test func has two arguments one is string and second is a callback function.
// test("", () => {});

test("Sum Function should calculate the sum of two functions", () => {
  // assert is a function which is used to test the result of the function

  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});

/***
 * run jest => npm run test
 * PS E:\Namaste_React\EP-13_TimeForTest\00_codes> npm run test
      
      > 00_codes@1.0.0 test
      > jest
      
       PASS  src/components/__tests__/sum.test.js
        √ Sum Function should calculate the sum of two functions (2 ms)
                                                                                                                                       
      ----------|---------|----------|---------|---------|-------------------                                                          
      File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                           
      ----------|---------|----------|---------|---------|-------------------
      All files |     100 |      100 |     100 |     100 | 
       sum.js   |     100 |      100 |     100 |     100 | 
      ----------|---------|----------|---------|---------|-------------------
      Test Suites: 1 passed, 1 total
      Tests:       1 passed, 1 total
      Snapshots:   0 total
      Time:        1.219 s
      Ran all test suites.

    PS E:\Namaste_React\EP-13_TimeForTest\00_codes>
*/
