import Profile from './images/Radu.jpg'

function Info() {
    return(
        <div className='info-container'>
            <img src={Profile} alt="Profile pic" className='profile'/>
            <div className='personal-details'>
                <h3>Radu Ciocan</h3>
                <h6>Full-Stack Web Developer (soon)</h6>
                <p>raducn.website</p>
            </div>
            <div className='icon-container'>
                <div className='mail button'>
                    <i class="fa-solid fa-at fa-2xs"></i>
                    <p>Email</p>
                </div>
                <div className='linkedin button'>
                    <i class="fa-brands fa-linkedin fa-2xs"></i>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}

export default Info