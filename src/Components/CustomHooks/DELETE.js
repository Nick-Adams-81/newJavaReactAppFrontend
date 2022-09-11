

const deleteUser = (id) => {
    fetch(`http://localhost:8080/delete/${id}`, {
        method: "DELETE",
        headers: {"Content-type" : "application/json"},
    })
    .then(() => console.log("user deleted successfully!"))
    .catch((err) => console.log(err))

    // const removeUser = (id) => {
    //     setData(current => current.filter(user => {return user.id !== id}));
    //   }
}
export default deleteUser;