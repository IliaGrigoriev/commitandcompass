export async function GetStatus(id) {
  const r = await fetch(`/api/jobs/${id}`);
  return r.json(); // { requestId, status, payload }
}