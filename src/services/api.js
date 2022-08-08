const { REACT_APP_API_URL } = process.env;

export const fetchAPI = async (data) => {
  fetch(`${REACT_APP_API_URL}/movies`, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => {
      if (response.status !== 200)
        throw new Error(
          "Estamos experimentando problemas con nuestra plataforma. Vuelva a intentarlo en algunos minutos."
        );

      return response.json();
    })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      alert(error.message);
    })
    .finally(() => {});
};
