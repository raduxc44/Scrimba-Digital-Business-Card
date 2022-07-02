import Profile from './images/Radu.jpg'

function Info() {
    return(
        <div className='info-container'>
            <h1>Info</h1>
            <img src={Profile} alt="Profile pic" />
        </div>
    )
}

export default Info