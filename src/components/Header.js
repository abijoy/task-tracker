import PropTypes from 'prop-types'
import Button from './Button';

export default function Header({ title, onAdd, showAdd }){
	return ( 
		<header className="header">
			<h1> {title}</h1>
			<Button
				label={showAdd?'Close':'Add'}
				color={showAdd?'red':'green'}
				onClick={onAdd}
			/>	
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker'
}