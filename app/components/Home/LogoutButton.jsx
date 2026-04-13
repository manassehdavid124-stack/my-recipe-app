const handleLogout = () => {
  localStorage.removeItem("token"); // remove token
  window.location.href = "/login";  // redirect to login
};
<button onClick={handleLogout}>
  Log out
</button>