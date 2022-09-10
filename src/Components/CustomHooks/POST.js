

const post = (url, data) => {
    fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)

    })
        .then(() => {
            console.log("new user added")
        })

}

export default post;