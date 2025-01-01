const Login = () => {
    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '/profile';
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};
export default Login;