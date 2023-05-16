const backendApi = "https://nodemailer-xayrulloh.koyeb.app/nemomensshirt"

async function requestJSON(route, method, body) {
  try {
    let response = await fetch(backendApi + route, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    })

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
