

const get = (url, data) => {
    fetch(url)
    .then(res => res.json())
    .then(result => data(result))
    .catch(err => console.log(err))
}
export default get;