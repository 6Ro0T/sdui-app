import React from "react";
import LoginUI from "./components/Login";

function App() {
    return (
        <div className="App">
            <LoginUI endpoint="/login-ui" />
        </div>
    );
}

export default App;