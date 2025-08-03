import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>
      <p>{repo.description || "No description"}</p>
      <p>⭐ Stars: {repo.stargazers_count} | 🍴 Forks: {repo.forks_count}</p>
      <p>🛠 Language: {repo.language || "N/A"}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  );
};

export default RepoCard;
