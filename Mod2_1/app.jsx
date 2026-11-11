const { useState } = React;

function App() {
  const [message, setMessage] = useState("Waiting for an event...");

  const handleClick = () => {
    setMessage("Button clicked successfully!");
  };

  const handleMouseOver = () => {
    setMessage("Mouse is over the button!");
  };

  const handleChange = (event) => {
    setMessage("You typed: " + event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Form submitted successfully!");
  };

  return (
    <div>
      <h1>ReactJS Events</h1>

      <h3>1. Click Event</h3>
      <button onClick={handleClick}>Click Me</button>

      <h3>2. Mouse Event</h3>
      <button onMouseOver={handleMouseOver}>Move Mouse Here</button>

      <h3>3. Change Event</h3>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter text"
      />

      <h3>4. Submit Event</h3>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <h3>Event Result</h3>
      <p>{message}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
