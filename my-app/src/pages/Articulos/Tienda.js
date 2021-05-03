import React, {Component} from 'react';
import {CardColumns, Card} from 'react-bootstrap';
import loza from './img/vela-concha.png';
import heart from './img/heart.png';

class Tienda extends Component{

    render(){  //este metodo render el que se encarga de mostrar lavista del componenete y siempre tiene que llevar un return
        return(//la etiqueta React.Fragmentes para poder añadir por ejemplo 2 h2 , sino solo te deja poner 1 y se recomienda meterlo dentro de un DIV
               <section className="mt-5 col-12 mx-auto">
                <h2 className="text-center tittle_cami">Velas</h2>
                <p className="text-center">velas personalizadas</p>
               <CardColumns className="columnas">
                 <a href="#">
                   <Card className="text-center mt-2">
                       <Card.Body>
                           <span className="badge new">Top venta</span>
                           <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                         <Card.Img className="img_product" src={loza}/>
                         <Card.Footer className="text-center text-dark">
                         <Card.Text className="small text-dark font-weight-light">
                             Descripcion del articulo 
                         </Card.Text>
                           <small>51.99€</small>
                         </Card.Footer>
                       </Card.Body>
                   </Card>
                 </a>
                 <a href="#">
                   <Card className="text-center mt-2">
                       <Card.Body>
                           <span className="badge new">Top venta</span>
                           <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                         <Card.Img className="img_product" src={loza}/>
                         <Card.Footer className="text-center text-dark">
                         <Card.Text className="small text-dark font-weight-light">
                             Descripcion del articulo 
                         </Card.Text>
                           <small>51.99€</small>
                         </Card.Footer>
                    
                       </Card.Body>
                   </Card>
                 </a>
                 <a href="#">
                   <Card className="text-center mt-2">
                       <Card.Body>
                           <span className="badge new">Top venta</span>
                           <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                         <Card.Img className="img_product" src={loza}/>
                         <Card.Footer className="text-center text-dark">
                         <Card.Text className="small text-dark font-weight-light">
                             Descripcion del articulo 
                         </Card.Text>
                           <small>51.99€</small>
                         </Card.Footer>
                       </Card.Body>
                   </Card>
                 </a>
                 <a href="#">
                   <Card className="text-center mt-2">
                       <Card.Body>
                         <span className="badge new">Top venta</span>
                         <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                       <Card.Img className="img_product" src={loza}/>
                       <Card.Footer className="text-center text-dark">
                       <Card.Text className="small text-dark font-weight-light">
                           Descripcion del articulo 
                       </Card.Text>
                         <small>51.99€</small>
                       </Card.Footer>
                       </Card.Body>
                   </Card>  
                 </a>   
                 <a href="#">
                   <Card className="text-center mt-2">
                       <Card.Body>
                         <span className="badge new">Top venta</span>
                         <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                       <Card.Img className="img_product" src={loza}/>
                       <Card.Footer className="text-center text-dark">
                       <Card.Text className="small text-dark font-weight-light">
                           Descripcion del articulo 
                       </Card.Text>
                         <small>51.99€</small>
                       </Card.Footer>
                       </Card.Body>
                   </Card>
                 </a>
            {/*      <Card text="warning" className="text-center p-1">
                     <blockquote className="blockquote mb-1 card-body">
                     <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                         erat a ante.
                     </p>
                     <footer className="blockquote-footer">
                         <small className="text-muted">
                         Someone famous in <cite title="Source Title">Source Title</cite>
                         </small>
                     </footer>
                     </blockquote>
                 </Card> */}
                 <a href="#">
                   <Card className="text-center mt-2">
                       <Card.Body>
                         <span className="badge new">Top venta</span>
                         <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                       <Card.Img className="img_product" src={loza}/>
                       <Card.Footer className="text-center text-dark">
                       <Card.Text className="small text-dark font-weight-light">
                           Descripcion del articulo 
                       </Card.Text>
                         <small>51.99€</small>
                       </Card.Footer>
                       </Card.Body>
                   </Card>
                 </a>
                 <a href="#">
                   <Card className="text-center mt-2">
                       <Card.Body>
                         <span className="badge new">Top venta</span>
                         <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                       <Card.Img className="img_product" src={loza}/>
                       <Card.Footer className="text-center text-dark">
                       <Card.Text className="small text-dark font-weight-light">
                           Descripcion del articulo 
                       </Card.Text>
                         <small>51.99€</small>
                       </Card.Footer>
                       </Card.Body>
                   </Card>
                 </a>
                 <a href="#">
                   <Card className="text-center mt-2">
                       <Card.Body>
                         <span className="badge new">Top venta</span>
                         <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                       <Card.Img className="img_product"src={loza}/>
                       <Card.Footer className="text-center text-dark">
                       <Card.Text className="small text-dark font-weight-light">
                           Descripcion del articulo 
                       </Card.Text>
                         <small>51.99€</small>
                       </Card.Footer>
                       </Card.Body>
                   </Card>
                 </a>
               </CardColumns>
             </section>
        );
    }

}

export default Tienda;

/*
           <div className="col-12">
                <br/>
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card bg="primary" text="white" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src="holder.js/100px160" />
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>
                    <Card>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardColumns>
            </div>
*/