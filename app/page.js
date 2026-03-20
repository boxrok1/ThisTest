"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: "Failed to send data" });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Form V4</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h3>Response:</h3>
          <h4>Name received:</h4>
          <p>{response.receivedData?.name || "No data"}</p>
        </div>
      )}
    </div>
  );
}
