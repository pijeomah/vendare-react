import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
    name: string,
    id: number,
    price: number,
    imgUrl: string,
    author: string,
}

export function StoreItem({name,id,price,imgUrl,author} : StoreItemProps){
    const quantity = 3
    return(
        <Card className='h-100'>
            <Card.Img variant='top' src={imgUrl}
            height="200px" style={{objectFit: "contain"}}/>
            <Card.Body className='d-flex flex-column'>
            <div className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className='h5'>{name}</span>
                <span className='fs-3 text-muted'>{formatCurrency(price)}</span>
            </div>
            <span className='h6'>{author}</span>

            <div>
                {quantity === 0 ? (<Button className='w-100'>
                    + Add to Cart
                </Button>) : (
                    <div className='d-flex align=items-center flex-column' style={{gap: '.5rem'}}>
                        <div className='d-flex align-items-center justify-content-center' style={{gap: '.5rem'}}>
                        <Button>-</Button>
                        <div>
                            <span className='fs-2'>{quantity}</span> in cart
                        </div>
                        <Button>+</Button>
                        </div> 
                       <Button variant='danger' size='sm'>Remove</Button>
                    </div>
                )}
            </div>
            </Card.Body>

        </Card>
    )

}