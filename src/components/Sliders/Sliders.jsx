import './Sliders.css'
import { Swiper, SwiperSlide  } from "swiper/react";
import { FreeMode, Pagination ,Autoplay,Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { IoMdStar } from "react-icons/io";

const Sliders = () => {
  return (
    <div>
     <Swiper
      autoHeight = {true}
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
        1440: {
          width: 1440,
          slidesPerView: 4,
        },
      }}
        
        freeMode={true}
        slidesPerView={1.5}
        navigation={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
          
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        
        modules={[Autoplay,FreeMode, Pagination,Navigation]}
        className="mySwiper rounded-xl lg:w-[80%]"
      >
        <SwiperSlide className="slide">
        <div className="card-item">
            <img src="/public/assets/pizza1.png" alt="pizza" width={"100%"} />
            <div className="container-item">
              <h4>
                <b>Pepperoni Pizza</b>
              </h4>
              <p>Di napoles</p>
              <p>
                <b>$11.99</b>
              </p>
              <button className="button sm-btn">Add to cart</button>
              <div className="rating">
                <p>
                  <IoMdStar />5
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  ">
        <div className="card-item">
            <img src="/public/assets/pizza2.png" alt="pizza" width={"100%"} />
            <div className="container-item">
              <h4>
                <b>Pepperoni Pizza</b>
              </h4>
              <p>Di napoles</p>
              <p>
                <b>$13.99</b>
              </p>
              <button className="button sm-btn">Add to cart</button>
              <div className="rating">
                <p>
                  <IoMdStar />5
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  ">
        <div className="card-item">
            <img src="/public/assets/pizza3.png" alt="pizza" width={"100%"} />
            <div className="container-item">
              <h4>
                <b>Vegetarian Pizza</b>
              </h4>
              <p>Cosa di Mario
</p>
              <p>
                <b>$12.99</b>
              </p>
              <button className="button sm-btn">Add to cart</button>
              <div className="rating">
                <p>
                  <IoMdStar />5
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  ">
        <div className="card-item">
            <img src="/public/assets/pizza4.png" alt="pizza" width={"100%"} />
            <div className="container-item">
              <h4>
                <b>Mediterranean Pizza</b>
              </h4>
              <p>Milano</p>
              <p>
                <b>$15.99</b>
              </p>
              <button className="button sm-btn">Add to cart</button>
              <div className="rating">
                <p>
                  <IoMdStar />5
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  ">
        <div className="card-item">
            <img src="/public/assets/pizza1.png" alt="pizza" width={"100%"} />
            <div className="container-item">
              <h4>
                <b>Pepperoni Pizza</b>
              </h4>
              <p>Di napoles</p>
              <p>
                <b>$11.99</b>
              </p>
              <button className="button sm-btn">Add to cart</button>
              <div className="rating">
                <p>
                  <IoMdStar />5
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  ">
        <div className="card-item">
            <img src="/public/assets/pizza2.png" alt="pizza" width={"100%"} />
            <div className="container-item">
              <h4>
                <b>Pepperoni Pizza</b>
              </h4>
              <p>Di napoles</p>
              <p>
                <b>$13.99</b>
              </p>
              <button className="button sm-btn">Add to cart</button>
              <div className="rating">
                <p>
                  <IoMdStar />5
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  ">
        <div className="card-item">
            <img src="/public/assets/pizza3.png" alt="pizza" width={"100%"} />
            <div className="container-item">
              <h4>
                <b>Vegetarian Pizza</b>
              </h4>
              <p>Cosa di Mario
</p>
              <p>
                <b>$12.99</b>
              </p>
              <button className="button sm-btn">Add to cart</button>
              <div className="rating">
                <p>
                  <IoMdStar />5
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  ">
        <div className="card-item">
            <img src="/public/assets/pizza4.png" alt="pizza"  />
            <div className="container-item">
              <h4>
                <b>Mediterranean Pizza</b>
              </h4>
              <p>Milano</p>
              <p>
                <b>$15.99</b>
              </p>
              <button className="button sm-btn">Add to cart</button>
              <div className="rating">
                <p>
                  <IoMdStar />5
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
       
      </Swiper>
    </div>
  );
};

export default Sliders;
