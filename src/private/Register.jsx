// import React, { useState } from "react";
// import API from "./Api.js";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Register = () => {
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		email: "",
// 		password: ""
// 	});
// 	const navigate = useNavigate();

// 	const handleChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (!formData.name.trim()) {
// 			toast.error("Name is required");
// 			return;
// 		}
// 		try {
// 			await API.post("/users/register", formData);
// 			toast.success("Registration successful. Please login.");
// 			navigate("/login");
// 		} catch (error) {
// 			toast.error(error.response?.data.message || "Registration failed");
// 		}
// 	};

// 	return (
// 		<div className="p-4 flex justify-center items-center flex-col min-h-screen">
// 			<h2 className="text-2xl mb-4">Register</h2>
// 			<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
// 				<input
// 					type="text"
// 					name="name"
// 					placeholder="Full Name"
// 					value={formData.name}
// 					onChange={handleChange}
// 					required
// 					className="mb-4 px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
// 				/>
// 				<input
// 					type="email"
// 					name="email"
// 					placeholder="Email"
// 					value={formData.email}
// 					onChange={handleChange}
// 					required
// 					className="mb-4 px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
// 				/>
// 				<input
// 					type="password"
// 					name="password"
// 					placeholder="Password"
// 					value={formData.password}
// 					onChange={handleChange}
// 					required
// 					className="mb-4 px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
// 				/>
// 				<button type="submit" className="bg-blue-600 text-white p-2 rounded">
// 					Register
// 				</button>
// 				<span>
// 					Already have an account?{" "}
// 					<Link to="/login" className="text-blue-500">
// 						Login
// 					</Link>
// 				</span>
// 			</form>
// 		</div>
// 	);
// };

// export default Register;


import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register