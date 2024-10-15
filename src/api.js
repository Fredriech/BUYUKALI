import loadedData from "./ServerData.json";

export async function getData(url) {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw {
      status: resp.status,
      resText: resp.statusText,
      message: "Error while fetching data",
    };
  }
  const data = await resp.json();
  return data;
}
export function Loader() {
  return loadedData;
}
