import { FC } from 'react';
import Card from '../Card/Card';
import './cardList.css';

const CardList: FC<CardListProps> = ({ robots }) => {
        return (
            <div className="card-list">
                {
                    robots.map((robot) => {
                        return <Card key={robot.id} robot={robot} />
                    })
                }
            </div>
        );
}

export default CardList;