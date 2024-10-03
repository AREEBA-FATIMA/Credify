import Image from 'next/image'

function CreditCard() {
  return (
    <div>
      <div className="home" id="home">
        <section className="flex">
          <div className="content">
            <h3>
              The best choice for online <span>credit card</span> payment
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus, pariatur magni vel aliquam distinctio?</p>
            <a href="#" className="btn">
              apply now <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="image">
            <img
              src="/images/img1.png"
              alt="Credit Card Mockup"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="partners">
          <div className="box-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9f1eyIV-u8JoGGuX83IKwu8pko4akrsjNDzIDwX4T7h37VPK" alt="Partner 1" className="box" />
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9qxXulQi-y9LjT7JXX5iy9F0TJw1ChMucBmtpICrsaw4U0gFn" alt="Partner 2" className="box" />
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXjBFln1mK5EnveWybcGeHHsWhaCChJYCsnIaRRMQbnjoakxDG" alt="Partner 3" className="box" />
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTapO1qnmEH1fIwEUJpvkuZyrPWfNSZzSM4MbwBhm_wOu5NuLXC" alt="Partner 4" className="box" />
          </div>
        </section>

      </div>
        <section className="about" id="about">
          <div className="heading">why <span>choose</span> us ?</div>
          <div className="row">
          <div className="image">
          <Image  
            className='img'
            src="/images/img2.png" 
            alt="Sample Image"
            width={1000} 
            height={1000}
          />
          </div>

          <div className="content">
              <h3>customize and control your own <span>credit card</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium quibusdam illum iusto aspernatur iure!</p>
              <a href="#" className="btn">apply now <i className="fas fa-arrow-right"></i></a>
          </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="info">
              <Image  
                className='img'
                src="/images/img3.png" 
                alt="Sample Image"
                width={500} 
                height={300}
              />
                <h3>certified</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, laboriosam.</p>
              <a href="#" className="btn-2">learn more <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="box">
              <div className="info">
              <Image  
                className='img'
                src="/images/img4.png" 
                alt="Sample Image"
                width={500} 
                height={300}
              />
                <h3>transparent</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, laboriosam.</p>
              <a href="#" className="btn-2">learn more <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="box">
              <div className="info">
              <i id="clock" className="far fa-clock"></i>
                <h3>fast apply</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, laboriosam.</p>
              <a href="#" className="btn-2">learn more <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="box">
              <div className="info">
              <Image  
                className='img'
                src="/images/img6.png" 
                alt="Sample Image"
                width={50} 
                height={60}
              />
                <h3>24/7 support</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, laboriosam.</p>
              <a href="#" className="btn-2">learn more <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </section>
              
        <div className="options" id="options">
        <section>
          <div className="heading">credit card <span>options</span></div>
          <div className="box-container">
            <div className="box">
            <Image  
                className='img'
                src="/images/img7.png" 
                alt="Sample Image"
                width={1000} 
                height={1000}
              />
              <h3>green</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, distinctio.</p>
              <div className="info">
                <p>accepts: <span>USD</span></p>
                <p>valid in: <span>your country</span></p>
                <p>transaction: <span>unlimited</span></p>
              </div>
              <a href="#" className="btn">get started</a>
            </div>

            <div className="box">
            <Image  
                className='img'
                src="/images/img8.png" 
                alt="Sample Image"
                width={1000} 
                height={1000}
              />
              <h3>silver</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, distinctio.</p>
              <div className="info">
                <p>accepts: <span>USD</span></p>
                <p>valid in: <span>your country</span></p>
                <p>transaction: <span>unlimited</span></p>
              </div>
              <a href="#" className="btn">get started</a>
            </div>

            <div className="box">
            <Image  
                className='img'
                src="/images/img9.png" 
                alt="Sample Image"
                width={1000} 
                height={1000}
              />
              <h3>black</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, distinctio.</p>
              <div className="info">
                <p>accepts: <span>USD</span></p>
                <p>valid in: <span>your country</span></p>
                <p>transaction: <span>unlimited</span></p>
              </div>
              <a href="#" className="btn">get started</a>
            </div>
            
          </div>
        </section>
        </div>

        <section className="steps">
          <div className="heading">how to <span>get</span> card</div>
            <div className="box-container">
              <div className="box">
              <Image  
                className='img'
                src="/images/img10.png" 
                alt="Sample Image"
                width={1000} 
                height={1000}
              />
                <h3>download the app</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet tempora ipsam libero quasi suscipit?</p>
              </div>

              <div className="box">
              <Image  
                className='img'
                src="/images/img11.png" 
                alt="Sample Image"
                width={1000} 
                height={1000}
              />
                <h3>Submit the form</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet tempora ipsam libero quasi suscipit?</p>
              </div>

              <div className="box">
              <Image  
                className='img'
                src="/images/img12.png" 
                alt="Sample Image"
                width={1000} 
                height={1000}
              />
                <h3>Wait tll approved</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet tempora ipsam libero quasi suscipit?</p>
              </div>
            </div>
        </section>

        <div className="reviews">
          <section className="row">
            <div className="content">
              <h3>What users says about our services</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quis, veniam quod voluptates expedita nemo?</p>
            </div>
            <div className="slider-container">
              <div className="slider">
                <div className="slide active">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus minus quae esse illum voluptatibus consectetur maxime. Quam, delectus.</p>
                  <div className="user">
                  <Image  
                    className='img'
                    src="/images/img13.png" 
                    alt="Sample Image"
                    width={1000} 
                    height={1000}
                  />    
                    <div>
                      <h3>Sir Hamzah Syed</h3>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>

                <div className="slide">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus minus quae esse illum voluptatibus consectetur maxime. Quam, delectus.</p>
                  <div className="user">
                  <Image  
                    className='img'
                    src="/images/img14.png" 
                    alt="Sample Image"
                    width={1000} 
                    height={1000}
                  />    
                    <div>
                      <h3>Aliza Yaseen</h3>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-stroke"></i>
                      </div>
                    </div>
                  <i className="fas fa-quote-right"></i>
                  </div>
                </div>

                <div className="slide">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus minus quae esse illum voluptatibus consectetur maxime. Quam, delectus.</p>
                  <div className="user">
                  <Image  
                    className='img'
                    src="/images/img15.jpg" 
                    alt="Sample Image"
                    width={1000} 
                    height={1000}
                  />    
                    <div>
                      <h3>Areeba Fatima</h3>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>

                <div className="slide">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus minus quae esse illum voluptatibus consectetur maxime. Quam, delectus.</p>
                  <div className="user">
                  <Image  
                    className='img'
                    src="/images/img16.png" 
                    alt="Sample Image"
                    width={1000} 
                    height={1000}
                  />    
                    <div>
                      <h3>Taliyah Muraad</h3>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-stroke"></i>
                      </div>
                    </div>
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
              <div className="controls">
                <div id="prev" className="fas fa-angle-left" ></div>
                <div id="next" className="fas fa-angle-right" ></div>
              </div>
            </div>
          </section>
        </div>

        <section className="download">
          <div className="heading"><span>download</span> now!</div>
          <div className="row">
              <div className="box-container">
              <div className="box">
                <i className="fab fa-windows icon"></i>
                <h3>for windows</h3>
                <a href="#" className="btn-2">download now <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="box">
                <i className="fab fa-apple icon"></i>
                <h3>for mac</h3>
                <a href="#" className="btn-2">download now <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="box">
                <i className="fab fa-app-store-ios icon"></i>
                <h3>for iphone</h3>
                <a href="#" className="btn-2">download now <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="box">
                <i className="fab fa-google-play icon"></i>
                <h3>for android</h3>
                <a href="#" className="btn-2">download now <i className="fas fa-arrow-right"></i></a>
              </div>
              </div>

              <div className="content">
                <h3>Banking Solution That Works Around You in <span>Easy Way</span></h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maiores eaque dolorum veniam possimus ratione dignissimos quis dolor! Eveniet ipsa architecto inventore voluptates magnam dolore quis consequuntur tenetur, qui harum ex amet officia perspiciatis vitae omnis! Autem ab et quia?</p>
                <a href="#" className="btn">learn more <i className="fas fa-arrow-right"></i></a>
              </div>
          </div>
      </section>

      <div className="contact" id="contact">
        <div className="row">
          <form action="" className="form">
            <div className="box">
              <h3>get in touch</h3>
              <div className="flex">
                <input type="text" placeholder="your name" className="input" />
                <input type="number" placeholder="your number" className="input" />
                <input type="email" placeholder="your email" className="input" />
                <input type="text" placeholder="your country" className="input" />
              </div>

              <textarea name="" placeholder="your message"></textarea>
              <input type="submit" value="send message" className="btn"></input>
            </div>
          </form>
          <div className='image'>
          <Image  
            className='img'
            src="/images/img18.png" 
            alt="Sample Image"
            width={1000} 
            height={1000}
          />
          </div>
        </div>
      </div>

      <section className="blogs" id="blogs">
        <div className="heading">our <span>blogs</span></div>
        <div className="box-container">
          <div className="box">
            <Image  
            className='img'
            src="/images/img19.png" 
            alt="Sample Image"
            width={1000} 
            height={1000}
            />
            <div className="info">
              <a href="#"><i className="far fa-calendar"></i><span>1st jan, 2024</span></a>
              <a href="#"><i className="far fa-user"></i><span>by admin</span></a>
            </div>
          <h3>blog title 01</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque labore ipsa qui nam facere?</p>
          <a href="#" className="btn-2">learn more <i className="fas fa-arrow-right"></i></a>
          </div>

          <div className="box">
            <Image  
            className='img'
            src="/images/img20.png" 
            alt="Sample Image"
            width={1000} 
            height={1000}
            />
            <div className="info">
              <a href="#"><i className="far fa-calendar"></i><span>1st jan, 2024</span></a>
              <a href="#"><i className="far fa-user"></i><span>by admin</span></a>
            </div>
          <h3>blog title 02</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque labore ipsa qui nam facere?</p>
          <a href="#" className="btn-2">learn more <i className="fas fa-arrow-right"></i></a>
          </div>

          <div className="box">
            <Image  
            className='img'
            src="/images/img21.png" 
            alt="Sample Image"
            width={1000} 
            height={1000}
            />
            <div className="info">
              <a href="#"><i className="far fa-calendar"></i><span>1st jan, 2024</span></a>
              <a href="#"><i className="far fa-user"></i><span>by admin</span></a>
            </div>
          <h3>blog title 03</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque labore ipsa qui nam facere?</p>
          <a href="#" className="btn-2">learn more <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <div className="newsletter">
        <section>
          <form action="">
            <h3>get newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus dolor suscipit natus illum error?</p>
            <div className="flex">
              <input type="text" className='input' placeholder='enter your email' maxLength={30} />
              <input type="submit" value="Subscribe" />
            </div>
          </form>
        </section>
      </div>

      <footer className="footer">
        <section>
          <div className="flex">
          <a href="#" className="logo"><i className="fas fa-credit-card"></i> CREDIFY</a>
            <nav className="links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#options">Options</a>
              <a href="#contact">Contact</a>
              <a href="#blogs">Blogs</a>
            </nav>
            <a href="#" className="extra-link">apply now</a>
          </div>
          <div className="credit">
            <p>&copy; 2024 by <span>Areeba Fatima</span> | all rights reserved!</p>
            <div className="share">
              <a href="#" className="fab fa-youtube"></a>
              <a href="#" className="fab fa-linkedin"></a>
              <a href="#" className="fab fa-whatsapp"></a>
              <a href="#" className="fab fa-pinterest"></a>
            </div>
          </div>
        </section>
      </footer>
    </div>


    
  );
}

export default CreditCard;


