const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function getExampleData() {
  const response = await fetch(`${API_BASE}/api/`);
  const data = await response.json();
  return data;
}