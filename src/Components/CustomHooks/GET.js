

const get = (url, data) => {
    fetch(url)
    .then(res => res.json())
    .then(result => data(result))
}
export default get;