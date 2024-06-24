import axios from 'axios'

const CreateMeeting = (e) => {
    e.preventDefault()

    axios.get('https://cr-server-dxyn.onrender.com/getMeetingData')
        .then(response => {
            if (response.data.hostRoomUrl) {
                window.location.href = `${response.data.hostRoomUrl}`
            } else {
                alert('Couldn\'t connect to the server, Try again')
            }
        })
        .catch(error => {
            console.error(error);
        });
}

const CheckMeetingLink = (id) => {

    axios.get(`https://cr-server-dxyn.onrender.com/check/meeting/${id}`)
        .then(response => {
            if (response.data.roomUrl) {
                window.location.href = `${response.data.roomUrl}`
            } else {
                alert('Invalid Link')
            }
        })
        .catch(error => {
            console.error(error);
        });
}

export { CreateMeeting, CheckMeetingLink }