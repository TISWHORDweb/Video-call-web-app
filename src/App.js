import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Config/routes';
import React, { useState } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

function App() {
  const [meetingId, setMeetingId] = useState('');

  const handleCreateMeeting = () => {
    // Generate a unique meeting ID
    const newMeetingId = "generateUniqueId()";
    setMeetingId(newMeetingId);
  };

  const handleJoinMeeting = (id) => {
    setMeetingId(id);
  };

  const jwtToken = null;

  return (
    <div style={{height:"100vh", display: "grid", flexDirection: "column"}}>
      {meetingId ? (
        <JitsiMeeting roomName={meetingId} jwt={jwtToken} />
      ) : (
        <div>
          <button onClick={handleCreateMeeting}>Create Meeting</button>
          {/* Input field for joining existing meeting */}
        </div>
      )}
    </div>
  );
}


export default App;
