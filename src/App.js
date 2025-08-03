import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';

function App() {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRepos = async () => {
    if (!username) return;

    setLoading(true);
    setError('');
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!res.ok) throw new Error('User not found');
      const data = await res.json();
      setRepos(data);
    } catch (err) {
      setError(err.message);
      setRepos([]);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>GitHub Repo Explorer</h1>
      <SearchBar username={username} setUsername={setUsername} onSearch={fetchRepos} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <RepoList repos={repos} />
    </div>
  );
}

export default App;
