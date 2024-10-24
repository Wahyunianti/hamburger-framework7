import { Link, Block } from "framework7-react";
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
    const queryParams = new URLSearchParams({
        title: product.title,
        desc: product.desc,
        price: product.price.toString(),
        img: product.img,
    }).toString();

    return (
        <Link href={`/detail?${queryParams}`} className="card-link">
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
