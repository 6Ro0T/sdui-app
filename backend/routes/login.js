const express = require("express");
const router = express.Router();

const LOGIN_UI_SCHEMA = {
    "layout": "vertical",
    "styles": {
        "container": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "height": "100vh",
            "backgroundColor": "#f4f4f4"
        },
        "box": {
            "background": "white",
            "padding": "30px",
            "borderRadius": "8px",
            "boxShadow": "0 0 10px rgba(0, 0, 0, 0.1)",
            "width": "350px",
            "textAlign": "center"
        },
        "input": {
            "width": "100%",
            "padding": "10px",
            "margin": "10px 0",
            "border": "1px solid #ccc",
            "borderRadius": "5px"
        },
        "button": {
            "width": "100%",
            "padding": "10px",
            "backgroundColor": "#007BFF",
            "color": "white",
            "border": "none",
            "borderRadius": "5px",
            "cursor": "pointer"
        },
        "buttonHover": {
            "backgroundColor": "#0056b3"
        },
        "link": {
            "display": "block",
            "marginTop": "10px",
            "color": "#007BFF",
            "textDecoration": "none"
        }
    },
    "components": [
        {"type": "text", "content": "Login to Your Account", "style": {"fontSize": 24, "fontWeight": "bold"}},
        {"type": "input", "name": "email", "placeholder": "Enter your email", "inputType": "email"},
        {"type": "input", "name": "password", "placeholder": "Enter your password", "inputType": "password"},
        {"type": "button", "label": "Login", "action": "/authenticate", "method": "POST"},
        {"type": "link", "label": "Forgot Password?", "action": "/reset-password"},
        {"type": "toggle", "feature": "showSignup", "components": [
            {"type": "button", "label": "Create Account", "action": "/signup"}
        ]}
    ]
};

router.get("/", (req, res) => {
    res.json(LOGIN_UI_SCHEMA);
});

module.exports = router;
