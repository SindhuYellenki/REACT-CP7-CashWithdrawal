import './index.css'

const DenominationItem = props => {
  const {amountWithDrawed, details, key} = props
  const {value} = details

  const returnAmount = () => {
    amountWithDrawed(value)
  }

  return (
    <button className="button" type="button" onClick={returnAmount}>
      {value}
    </button>
  )
}

export default DenominationItem
