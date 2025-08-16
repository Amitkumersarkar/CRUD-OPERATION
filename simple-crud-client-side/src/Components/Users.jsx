import { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    // Fetch users from backend
    const fetchUsers = () => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    // Log users whenever state changes
    useEffect(() => {
        console.log("Current users:", users);
    }, [users]);

    // Delete user
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
            .catch(err => console.error(err));
    }

    return (
        <div className="text-center mt-10">
            <h2 className="font-bold">Users Length : {users.length}</h2>
            <div>
                {users.map((user) => (
                    <p key={user._id}>
                        {user.name}:{user.email} : {user._id}  
                        <button
                            className="btn btn-ghost font-bold ml-2"
                            onClick={() => handleDelete(user._id)}
                        >
                            X
                        </button>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Users;
