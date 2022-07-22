export const helpHttp = () => {

  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    //Si esta caido servidor llama a AbortController, tipo manejador de errores
    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    //Para que corte la comunicacion despues del tiempo especificado
    //Si no encuentra devuelve: DOMException: The operation was aborted. 
    setTimeout(() => controller.abort(), 3000);

    //retorna una promesa
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrió un error",
          })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};