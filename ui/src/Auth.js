const loginServer = 'http://localhost:8080/verify'

async function authenicate( username, password, requestType ) {
  const response = fetch(`${loginServer}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: username, 
      pass: password, 
      type: requestType})
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      return res;
    })
    .catch((error) => {
      console.log(error);
      return 'Error Connecting to the Server';
    })

  return response;
}

export default authenicate;