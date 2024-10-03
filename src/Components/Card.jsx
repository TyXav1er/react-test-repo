import profilePic from '../Assets/Yuji.jpeg'

function Card() {
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="pfp" />
            <h2 className='card-title'>Tech Savvy</h2>
            <p className='card-text'>I make websites and do calisthenics</p>
        </div>
    )
}
export default Card