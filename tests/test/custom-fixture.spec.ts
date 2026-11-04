import { test } from '../fixtures/MyCustomFixture';

test('custom fixture value is available', async ({ fixture1, workerFixture}) => {
  console.log(fixture1)
  console.log(workerFixture)
});
