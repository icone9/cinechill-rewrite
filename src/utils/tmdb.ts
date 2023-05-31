export async function fetchTMDB<T = unknown>(url: string, query = '') {
  const fullUrl = `https://api.themoviedb.org/3${url}${query}${query ? '&' : '?'}api_key=f8e27e529c82f81d860a62ae5d3878aa`
// console.log(fullUrl, 'fullUrl')
  const response = await fetch(fullUrl, {
	    method: 'GET',
	    headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  return response.json() as T; 
}