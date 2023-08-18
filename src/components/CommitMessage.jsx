import React, { useState, useEffect } from 'react';

function CommitMessage() {
  const [commitMessage, setCommitMessage] = useState('');

  useEffect(() => {
    const fetchCommitMessage = async () => {
      const response = await fetch('https://whatthecommit.com/index.json');
      const json = await response.json();
      setCommitMessage(json.commit_message);
    };

    fetchCommitMessage();
  }, []);

  return (
    <div>
      <h1>Random Commit Message</h1>
      <p>{commitMessage}</p>
    </div>
  );
}

export default CommitMessage;