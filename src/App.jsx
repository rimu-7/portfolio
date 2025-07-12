import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./private/Login.jsx";
import Profile from "./private/Profile.jsx";
import { ToastContainer, Zoom } from "react-toastify";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Count = lazy(() => import("./pages/Count"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <Layout>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <span className="loading loading-dots flex justify-center items-center min-h-screen loading-xl"></span>
            </div>
          }
        >
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/count" element={<Count />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* Error Handling */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
