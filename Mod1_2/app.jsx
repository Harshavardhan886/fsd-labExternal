class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  displayDetails() {
    return `${this.name} is learning ${this.course}`;
  }
}

const student1 = new Student("Madhu", "ReactJS");
const student2 = new Student("Ravi", "Java");

function App() {
  return (
    <main>
      <h1>ReactJS Class and Instance</h1>
      <p>{student1.displayDetails()}</p>
      <p>{student2.displayDetails()}</p>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
