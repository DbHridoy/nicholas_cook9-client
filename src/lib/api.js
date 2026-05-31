const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5200/api/v1';

export async function submitClaim(payload) {
  const response = await fetch(`${API_BASE_URL}/claims`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json().catch(() => null);

  if (!response.ok || body?.success === false) {
    throw new Error(body?.message || 'Unable to submit your claim right now.');
  }

  return body.data.claim;
}
