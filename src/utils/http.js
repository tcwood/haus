export async function get(url) {
  const res = await fetch(url);
  const json = await res.json();
  return { res, json };
}

export async function post(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body,
  });
  const json = await res.json();
  return { res, json };
}
