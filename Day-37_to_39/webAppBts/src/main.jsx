import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
    // <EscapeMediocrity/>
)

function EscapeMediocrity() {
  return (
    <div className="mt-4 p-3 border-start border-5 border-danger">
      <h4>🚨 The Anti-Mediocrity Protocol</h4>
      <ol>
        <li className="mb-2">
          <strong>Embrace the "2-Day Rule":</strong><br />
          Never skip your goal (coding, gym, etc.) twice in a row. 
          Mediocrity thrives on streaks. Break them.
        </li>
        <li className="mb-2">
          <strong>Delete the "Emergency Exits":</strong><br />
          Uninstall Netflix/Instagram after 9PM. Make failure <i>inconvenient</i>.
        </li>
        <li className="mb-2">
          <strong>Become a Time Pirate:</strong><br />
          Steal 15-minute chunks. "I’ll just watch one episode" → "I’ll just code for 15 minutes".
        </li>
        <li className="mb-2">
          <strong>Curate Your Pain:</strong><br />
          Choose: the pain of discipline (now) or the pain of regret (later). 
          <span className="text-muted d-block mt-1">// Hint: Both suck. Pick the one that pays off.</span>
        </li>
      </ol>

      <div className="alert alert-warning mt-3">
        <strong>⚠️ Reality Check:</strong> You won’t "feel like it". Action comes <i>before</i> motivation, not after. Start small. 
        <span className="d-block mt-1">(Your future self will high-five you.)</span>
      </div>
    </div>
  );
}