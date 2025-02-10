import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [uiSchema, setUiSchema] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/login-ui")
      .then(response => setUiSchema(response.data))
      .catch(error => console.error("Error fetching UI schema:", error));
  }, []);

  return (
    <div style={uiSchema?.styles?.container}>
      <div style={uiSchema?.styles?.box}>
        {uiSchema?.components.map((component, index) => {
          if (component.type === "text") return <h2 key={index} style={component.style}>{component.content}</h2>;
          if (component.type === "input") return <input key={index} type={component.inputType} name={component.name} placeholder={component.placeholder} style={uiSchema?.styles?.input} />;
          if (component.type === "button") return <button key={index} onClick={() => window.location.href = component.action} style={uiSchema?.styles?.button}>{component.label}</button>;
          if (component.type === "link") return <a key={index} href={component.action} style={uiSchema?.styles?.link}>{component.label}</a>;
          if (component.type === "toggle" && component.feature === "showSignup") return component.components.map((subComp, i) => <button key={i} onClick={() => window.location.href = subComp.action} style={uiSchema?.styles?.button}>{subComp.label}</button>);
          return null;
        })}
      </div>
    </div>
  );
};

export default Login;
