import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const LoadedUsers = useLoaderData();
    const [users, setUsers] = useState(LoadedUsers);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Add user function
    const handleAddUser = (e) => {
        e.preventDefault();
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    alert('User added successfully');
                    setUsers([...users, data]); // add new user to state
                    setName("");
                    setEmail("");
                }
            })
    }

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div className="text-center mt-10">
            <h2 className="font-bold">Users Length : {users.length}</h2>

            {/* Add User Form */}
            <form onSubmit={handleAddUser} className="mb-6 space-y-2">
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-400 px-3 py-2 rounded"
                    required
                />
                <br />
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 px-3 py-2 rounded"
                    required
                />
                <br />
                <input
                    type="submit"
                    value="Add User"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                />
            </form>

            {/* Users List */}
            <div>
                {users.map((user) => (
                    <p key={user._id}>
                        {user.name}:{user.email} : {user._id}  
                        <button className="btn btn-ghost font-bold " onClick={() => handleDelete(user._id)}>X</button>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Users;
