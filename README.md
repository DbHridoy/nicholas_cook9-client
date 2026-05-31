# Nicholas Cook9 Client

Public customer site for submitting claims against Nicholas Cook9 contracts.

## Backend Integration

The claim form posts to `POST /api/v1/claims`. During local development, Vite proxies `/api` to the backend at `http://localhost:5200`.

1. Start the backend from `../nicholas_cook9-backend`:

   ```sh
   pnpm dev
   ```

2. Start the client:

   ```sh
   npm run dev
   ```

For production, either serve the client behind the same domain as the backend so `/api/v1` resolves correctly, or set `VITE_API_BASE_URL` to the deployed backend API URL.
