import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.name.value;
        console.log(name, email);
        const updatedUser = { name, email };
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(updatedUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('user updated successfully');
                }
            })
    }
    return (
        <div className="text-center font-bold mt-10">
            <h1>Updated information of {loadedUser.name}</h1>
            <div className="mt-5">
                <form onSubmit={handleUpdate}>
                    <input className="border border-gray-400 px-3 py-2 rounded mb-2" type="text" name="name" defaultValue={loadedUser?.name} id="" />
                    <br />
                    <input className="border border-gray-400 px-3 py-2 rounded mb-2" type="email" name="email" defaultValue={loadedUser?.email} id="" />
                    <br />
                    <input className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" type="submit" value="Update User" />
                </form>
            </div>
        </div>
    );
};

export default Update;