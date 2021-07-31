import { FC } from 'react'
import './Card.css';

const Card: FC<CardProps> = ({ robot }) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${robot.id}?set=set2&size=180x180`} alt={robot.name} />
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
        </div>
    )
}

export default Card
