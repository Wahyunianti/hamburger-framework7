import { Link, Block, ListItem } from "framework7-react";
import React from 'react';

interface CardProps {
    product: {
        id: number;
        title: string;
        desc: string;
        price: number;
        img: string;
    };
}

const Cards: React.FC<CardProps> = ({ product }) => {
    return (
        <Link href="/detail" className="card-link">
            <Block className='cardsd'>
                <img className='cardimg' src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <h4>{product.desc}</h4>
                <h3 className='prices'><span>$</span>{product.price.toFixed(2)}</h3>
            </Block>
        </Link>
    );
}

export default Cards;
