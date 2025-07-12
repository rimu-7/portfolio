import React, { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = "https://personal-portfolio-backend-weld.vercel.app";

const CountManager = () => {
  const [counts, setCounts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    exprience: "",
    projects: "",
    customers: "",
  });

  // Fetch counts from backend
  const fetchCounts = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/counts`);
      if (Array.isArray(res.data)) {
        setCounts(res.data);
      } else {
        console.error("Invalid response format:", res.data);
        setCounts([]);
      }
    } catch (error) {
      console.error("Error fetching counts:", error);
      setCounts([]);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  const handleEdit = (item) => {
    setEditId(item._id);
    setFormData({
      exprience: item.exprience,
      projects: item.projects,
      customers: item.customers,
    });
  };

  const handleCancel = () => {
    setEditId(null);
    setFormData({
      exprience: "",
      projects: "",
      customers: "",
    });
  };

  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(`${BACKEND_URL}/api/counts/${id}`, formData);
      console.log("Updated:", res.data);
      await fetchCounts();
      handleCancel();
    } catch (error) {
      console.error("Update failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 py-20">
      <h1 className="text-2xl font-bold mb-6">Counts Dashboard</h1>

      {Array.isArray(counts) && counts.length > 0 ? (
        counts.map((item) => (
          <div
            key={item._id}
            className="border p-4 mb-4 rounded-lg shadow-md "
          >
            {editId === item._id ? (
              <>
                <div className="mb-3">
                  <label className="block font-semibold">Experience</label>
                  <input
                    type="text"
                    value={formData.exprience}
                    onChange={(e) =>
                      setFormData({ ...formData, exprience: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="mb-3">
                  <label className="block font-semibold">Projects</label>
                  <input
                    type="text"
                    value={formData.projects}
                    onChange={(e) =>
                      setFormData({ ...formData, projects: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="mb-3">
                  <label className="block font-semibold">Customers</label>
                  <input
                    type="text"
                    value={formData.customers}
                    onChange={(e) =>
                      setFormData({ ...formData, customers: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>
                  <strong>Experience:</strong> {item.exprience}
                </p>
                <p>
                  <strong>Projects:</strong> {item.projects}
                </p>
                <p>
                  <strong>Customers:</strong> {item.customers}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Created at: {new Date(item.createdAt).toLocaleString()}
                </p>
                <button
                  onClick={() => handleEdit(item)}
                  className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-600">No count data available.</p>
      )}
    </div>
  );
};

export default CountManager;
