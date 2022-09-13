

const deleteUser = (id) => {
    fetch(`http://localhost:8080/users/delete/${id}`, {
        method: "DELETE"
    })
    .then(() => console.log("user deleted successfully!"))
    .catch((err) => console.log(err))

}
export default deleteUser;