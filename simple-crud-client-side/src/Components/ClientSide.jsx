import { Outlet } from "react-router-dom";

const ClientSide = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    console.log("sending user:", user);

    // send data to backend
    fetch("http://localhost:3500/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("server response:", data);

        // ✅ check for `id` instead of insertedId
        if (data.id) {
          alert("User added successfully");
          form.reset();
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="text-center mt-10">
      <h2>SIMPLE CRUD</h2>
      <div>
        <Outlet></Outlet>
      </div>
      <form onSubmit={handleAddUser} className="space-y-4 mt-5">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          className="border border-gray-400 px-3 py-2 rounded"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
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
