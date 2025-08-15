
const ClientSide = () => {
    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target.from;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);
    }
    return (
        <div className="text-center mt-10">
            <h2>Simple CRUD</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="add users" />
            </form>
        </div>
    );
};

export default ClientSide;