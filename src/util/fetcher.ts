import { apiUrl } from "./env";

export const fetcher = (resource: string) => fetch(apiUrl(resource)).then(res => res.json());
