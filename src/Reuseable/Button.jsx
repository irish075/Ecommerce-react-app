
function Button({ label, onClick , className}) {

  return (
    <div>
      <button className={`button ${className}`}  onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button
