const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ?? 'https://nicholas-cook9-backend.onrender.com/api/v1'
).replace(/\/$/, '');

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
  const photos = claimPayload.photos ?? [];
  delete claimPayload.photos;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(claimPayload),
  };

  if (photos.length > 0) {
    const formData = new FormData();

    Object.entries(claimPayload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    photos.forEach((photo) => {
      formData.append('files', photo);
    });

    delete options.headers;
    options.body = formData;
  }

  const body = await request('/claims', options);

  return body.data.claim;
}
