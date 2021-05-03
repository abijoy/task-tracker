
export default function Button({ label, color, onClick }) {
	return (
		<button 
			onClick={onClick}
			className="btn"
			style = {{ backgroundColor: color }}
		>
			{label}
		</button>
	)
}