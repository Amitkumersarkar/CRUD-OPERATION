
const ClientSide = () => {
    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);
        // send data in server side
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="text-center mt-10">
            <h2>SIMPLE CRUD</h2>
            <form onSubmit={handleAddUser} className="space-y-4 mt-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    className="border border-gray-400 px-3 py-2 rounded"
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="border border-gray-400 px-3 py-2 rounded"
                />
                <br />
                <input
                    type="submit"
                    value="Add user"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                />
            </form>
        </div>
    );
};

export default ClientSide;