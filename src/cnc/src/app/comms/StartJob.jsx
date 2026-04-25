export async function StartJob(input) {
  const r = await fetch('/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  const { requestId } = await r.json();
  return requestId;
}