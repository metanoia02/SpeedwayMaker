/**
 * Fetch from the api
 */
export async function fetchApi(endpoint) {
  try {
    const result = await fetch(`https://orange.zapto.org:3900/api/${endpoint}`);
    const resultJson = await result.json();
    return resultJson;
  } catch (error) {
    console.error(error);
  }
}