import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, onClick} = props
  const {value} = denominationsDetails

  const handleOnClick = () => {
    const event = {target: {value}}
    onClick(event)
  }

  return (
    <li className="list-items">
      {/* <button type="button" className="button" onClick={handleOnClick}>
        {value}
      </button> */}
      <p onClick={handleOnClick}>{value}</p>
    </li>
  )
}

export default DenominationItem
