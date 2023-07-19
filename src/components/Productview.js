import React,{useEffect} from 'react'
import { ProductLists } from '../action/homeaction'
import { useDispatch,useSelector } from 'react-redux'
import { Row,Col,Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


function Productview() {
    
    const params= useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ProductLists())
      },[dispatch])

  const {products} = useSelector(state=>state.productReducer)
  const product =products ? products.find(item=>item.id==params.id):[]
  console.log('product',product);


  return (
    <>
    <Row className='p-5'>
        <Col md={4}>
        <Image className='rounded border p-1' src={product.image}  fluid></Image>
        </Col>
        <Col md={8}>
        <h1 className='mb-5'>{product.title}</h1>
        <h2 className='mb-5'>${product.price}</h2>
        <h5>Product Features:</h5>
        <p className='mb-3'>{product.description}</p>
        <h6>Ratting: {product.rating.rate}☆</h6>
        </Col>
    </Row>
    </>
  )
}

export default Productview