const url = "http://192.168.1.154:9000/contactus";

export async function getSortedContactusData() {
  try {
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
}
