import Header from './components/header.jsx';
import User from './components/userprofile.jsx';
import userData from './data.js';
import Footer from './components/footer.jsx';

export default function App() {
  let users = userData.map(user => <User key={user.id} {...user} />);
  return (
    <>
      <h1>Users</h1>
      <Header />
      <main>
        {users}
      </main>
      <Footer />
    </>
  )
}