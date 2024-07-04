import React, { useState } from 'react'
import Nav from '../../Components/Nav'
import Img from '../../Assets/Images/Group-6631.svg'
import { CreateMeeting, CheckMeetingLink } from '../../Service/meeting.service'

function Meeting() {
    const [link, setLink] = useState()
    const [scroll, setScroll] = useState(false)

    const allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789";

    function generateRandomString(length) {
        let randomString = "";
        for (let i = 0; i < length; i++) {
            randomString += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
        }
        return randomString;
    }

    const Meeting = (e) => {
        setScroll(true)
        const meetingID = generateRandomString(15)
        if (meetingID) {
            window.location.href = `https://13.246.5.190/${meetingID}`
        }
    }

    return (
        <div>
            <div className="Meeting">
                <Nav />
                <div className="container">
                    <div className="row text-align-center mt-5">
                        <div className="col-md-5 mt-5">
                            <div className="text">
                                <h1>Revolutionize your radiology
                                    practice with our
                                    tele-radiology platform</h1>
                                <p>Our platform offers a range of benefits that enhance collaboration, streamline workflows, and improved patient care. Join XolaniBridge today and experience a new era of radiology excellence.</p>
                            </div>
                            <div className="input">
                                <div className="join">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" onChange={(e) => setLink(e.target.value)} placeholder="https//:xolani-health.ewrutewyruiriuturriwrturw" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button class="btn btn-success" type="button" id="button-addon2" onClick={() => CheckMeetingLink(link)}>Join Meeting</button>
                                    </div>
                                </div>
                                <div className="create">
                                    <button className='btn btn-success' onClick={Meeting}> {scroll ? <div class="spinner-border spinner-border-sm" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div> : null} Create Meeting</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 mt-5">
                            <div className="img">
                                <img src={Img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meeting