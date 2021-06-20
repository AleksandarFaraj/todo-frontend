import urljoin from "url-join";
export function apiUrl(...parts: string[]): string {
    let baseURL = process.env.REACT_APP_API_BASE!
    if (process.env.REACT_APP_API_ENDPOINT && process.env.REACT_APP_API_ENDPOINT.length > 0) {
        baseURL = urljoin(process.env.REACT_APP_API_BASE!, process.env.REACT_APP_API_ENDPOINT)
    }
    const url = urljoin(baseURL, ...parts);
    return url;
}

