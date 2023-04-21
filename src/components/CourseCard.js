import coursecard from '../assets/css/coursecard.css';
import Button from 'react-bootstrap/Button';


function CourseCard(){
     return(
               <div className="card-container d-flex flex-column p-5 mx-auto my-4">
                    <h3>HTML</h3>
                    <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet deleniti necessitatibus mollitia unde sed, quasi doloribus officia dolorem ducimus aliquid eos adipisci, voluptas autem possimus accusamus nesciunt obcaecati, libero esse accusantium in. Earum reiciendis itaque ex no</p>
                    <h6>Price:</h6>
                    <p className="card-price">&#8369;2000</p>
                    <Button variant="outline-light" className="custom-bg4 align-self-center">View Schedule</Button>
               </div>
     )
}

export default CourseCard;