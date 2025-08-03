import React from 'react';
import RepoCard from './RepoCard';

const RepoList = ({ repos }) => {
  if (!repos.length) return <p>No repositories found.</p>;

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
