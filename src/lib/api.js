const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api/v1').replace(/\/$/, '');

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  const body = await response.json().catch(() => null);

  if (!response.ok || body?.success === false) {
    throw new Error(body?.message || 'Unable to submit your claim right now.');
  }

  return body;
}

export async function submitClaim(payload) {
  const claimPayload = { ...payload };
  delete claimPayload.flooringType;

  const body = await request('/claims', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(claimPayload),
  });

  return body.data.claim;
}
