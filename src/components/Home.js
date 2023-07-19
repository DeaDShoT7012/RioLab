import React,{useEffect, useState} from 'react'
import { ProductLists } from '../action/homeaction'
import { useDispatch,useSelector } from 'react-redux'
import { Row,Col, Card, InputGroup, Form,Dropdown } from 'react-bootstrap'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'




function Home() {
    const dispatch = useDispatch()
    const [currentPage,setcurrentPage] = useState(1)
    const [postPerPage] = useState(8)
    const [search,setsearch] = useState('')

    useEffect(() => {
        dispatch(ProductLists())
      },[dispatch])

     const {products} = useSelector(state=>state.productReducer)
     console.log("result",products);

     

     const indexOfLastPage = currentPage * postPerPage  
     const indexOfFirstPage = indexOfLastPage - postPerPage
     const currentPost =products? products.slice(indexOfFirstPage, indexOfLastPage) :[]

     
      console.log('search',search.length);
    const [low,setlow]= useState([])
    const [high,sethigh]= useState([])
    const assending = ()=>{
      setlow([...products.sort((a, b) => a.price > b.price ? 1 : -1)]);
      setcategory([]);
    }
     console.log('low',low);
    
    const dessending = ()=>{
      sethigh([...products.sort((a, b) => a.price < b.price ? 1 : -1)]);
      setcategory([]);
    }
    console.log('high',high);

    const[category,setcategory]=useState([])
    const mensCloathing=()=>{
      setcategory([...products.filter((a) => a.category === "men's clothing")]);
    }
    const Jewelery=()=>{
      setcategory([...products.filter((a) => a.category === "jewelery")]);
    }
    const electronics=()=>{
      setcategory([...products.filter((a) => a.category === "electronics")]);
    }
    const womensCloathing=()=>{
      setcategory([...products.filter((a) => a.category === "women's clothing")]);
    }
    console.log('category',category);
  
    let display='block'
     if(category.length>0){
      display='d-none'
     }
    


  return (
    <div>
      <div className='sorting p-3'>
            <div className='bg-white sort1'>
                <h3>Showing 1-{currentPost.length} of {products ? products.length:[]} results</h3>
            </div>
            <div className='sort3'>
                <InputGroup >  
                <Form.Control style={{border:'1px solid black'}} onChange={(e)=>setsearch(e.target.value)} placeholder='Search'/>
                </InputGroup>
            </div>
            <div className='sort2'>
            <button className='inc me-3'  onClick={assending}  >low to high</button>
            <button className='inc' onClick={dessending}>high to low</button>
            </div>
           <div>
            <Dropdown className='ms-3'>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" size='lg'>
             Categories
           </Dropdown.Toggle>
  
          <Dropdown.Menu>
          <Dropdown.Item onClick={mensCloathing} >Men's Clothing</Dropdown.Item>
          <Dropdown.Item onClick={Jewelery}>Jewelery</Dropdown.Item>
          <Dropdown.Item  onClick={electronics}>Electronics</Dropdown.Item>
          <Dropdown.Item  onClick={womensCloathing}>Women's Clothing</Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>
           </div>
        </div>
       <Row>
            {
              ((category.length>0?category:currentPost))?.filter((item)=>{
                return search.toLowerCase()===''?item:item.title.toLowerCase().includes(search)
              })
              .map(item => (
            <Col className='py-3 px-5'sm={6} md={4} lg={3} key={item.id}>
              <Link to={`/view-product/${item.id}`}  style={{textDecoration:'none'}}>
                <Card >
                  <Card.Img style={{ height: '350px',borderRadius:'10px'}} className="p-1" variant="top" src={item.image}/>
                  <Card.Body>
                  <Card.Title>{item.title.slice(0,18)}...</Card.Title>
                  <Card.Text>
                  Price: <b>${item.price}</b>   
                  </Card.Text>
                  <Card.Text>   
                  Rating: ☆{item.rating.rate}
                  </Card.Text>
                  </Card.Body>                           
                </Card>
              </Link>
            </Col>
              ))  
            }
       </Row>
      <div className={`${display}`}>
         <Pagination 
              postPerPage={postPerPage}
              totalPosts={products ? products.length : 0} 
              setcurrentPage={setcurrentPage}
              currentPage={currentPage}
          />
      </div>
    </div>
  )
}

export default Home