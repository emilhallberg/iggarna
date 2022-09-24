const get = (url: string) => fetch(url).then((res) => res.json());

const service = { get };

export default service;
