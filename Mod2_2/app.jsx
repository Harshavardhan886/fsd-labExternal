const { useState } = React;

function App() {
  const [votes, setVotes] = useState({
    CandidateA: 0,
    CandidateB: 0,
    CandidateC: 0,
  });

  const vote = (candidate) => {
    setVotes((currentVotes) => ({
      ...currentVotes,
      [candidate]: currentVotes[candidate] + 1,
    }));
  };

  const totalVotes =
    votes.CandidateA + votes.CandidateB + votes.CandidateC;

  return (
    <div>
      <h1>Voting System</h1>

      <h3>Vote for your favourite candidate</h3>

      <button onClick={() => vote("CandidateA")}>Vote Candidate A</button>
      <p>Candidate A: {votes.CandidateA} votes</p>

      <button onClick={() => vote("CandidateB")}>Vote Candidate B</button>
      <p>Candidate B: {votes.CandidateB} votes</p>

      <button onClick={() => vote("CandidateC")}>Vote Candidate C</button>
      <p>Candidate C: {votes.CandidateC} votes</p>

      <h3>Total Votes: {totalVotes}</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
