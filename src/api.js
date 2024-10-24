export async function getData(url, dt) {
  const dataRequest = {
    method: "POST",
    body: JSON.stringify(dt),
    headers: {
      "Content-type": "application/json; charset= UTF-8",
    },
  };

  if (Object.values(dt)[0].length > 8) {
    let resp;
    resp = await fetch(url, dataRequest);

    if (!resp.ok) {
      throw {
        status: resp.status,
        resText: resp.statusText,
        message: "Error while fetching data",
      };
    }

    return await resp.json();
  }

  return {
    message: "Error",
    isLogged: false,
  };
}

export async function Authenider(url, token) {
  const toReq = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const result = await fetch(url, toReq);

  if (!result.ok) {
    throw {
      status: result.status,
      resText: result.statusText,
      message: "Error while fetching data",
    };
  }

  return result;
}
