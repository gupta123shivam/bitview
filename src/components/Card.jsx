/* eslint-disable react/prop-types */
function Card({ img, title, text }) {
  return (
    <div className='choose-box'>
      <div className=''>
        <i>{img}</i>
      </div>
      <div className='choose-box__text'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
