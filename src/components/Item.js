import {Button} from "semantic-ui-react";

export default function Item({item}){

    const{
        image_link,
        name,
        price,
        description
    } = item

    return (
        <>
        <div>
            <img src={image_link} alt=""/>
        </div>
            <div>
                <strong>{name}</strong>
                <strong>${price}</strong>
            </div>
            <Button>구매하기</Button>
            <div>{description}</div>
        </>
    )
}