export const fetchAPI = async (apiUrl = {}) => {
    return new Promise((resolve, reject) => {
        fetch(apiUrl, {
            method: "GET",
        })
            .then((response) => {
                if (response.status !== 200)
                    reject(
                        "Estamos experimentando problemas con nuestra plataforma. Vuelva a intentarlo en algunos minutos."
                    );

                return response.json();
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error.message);
            });
    });
};
