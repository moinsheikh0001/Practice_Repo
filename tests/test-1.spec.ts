import { test, expect } from '@playwright/test';

test('List Users', async ({ request }) => {
  const res = await request.get('https://api.qaautomationlabs.com/v1/users?page=1&limit=10');

  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.data).toBeDefined();

  expect(body.data).toBeDefined();

  const user = body.data.find(user => user.id === 2);
  console.log(body.data);
  expect(user).toBeDefined();
  expect(user.firstName).toBe('Ethan');
});