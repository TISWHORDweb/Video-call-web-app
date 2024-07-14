import { JitsiMeeting } from '@jitsi/react-sdk'
import React from 'react'

function JitsiMeet() {
    const roomName= "myroom"
    const domain = "meet.jitsi.si"
  return (
    <div>
        <div className="JitsiMeet" style={{height:"100vh", display: "grid", flexDirection: "column"}}>
            <JitsiMeeting
            roomName={roomName}
            displayName={"hdhhdhdd"}
            domain={domain}
            containerStyles={{display:"flex", flex: 1}}
            ></JitsiMeeting>

        </div>
    </div>
  )
}

export default JitsiMeet