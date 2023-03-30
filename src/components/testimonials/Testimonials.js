import React from 'react'
import CLENT_AVATAR1 from './../../assets/avatar1.jpg'
import CLENT_AVATAR2 from './../../assets/avatar2.jpg'
import CLENT_AVATAR3 from './../../assets/avatar3.jpg'
import CLENT_AVATAR4 from './../../assets/avatar4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import './Testimonials.css'


const tsms = [
  {
    id: 't1',
    avatar: CLENT_AVATAR1,
    name: 'Tina Snow',
    review: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dolor non leo fermentum euismod sit amet ac tortor. Ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dolor non leo fermentum euismod sit amet ac tortor. Ut."
  },
  {
    id: 't2',
    avatar: CLENT_AVATAR2,
    name: 'Tina Snow',
    review: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dolor non leo fer amet ac tortor. Ut. Lorem ipsum dolorctetur adipiscing elit. Morbi nec dolor non leo fermentum euismod sit amet ac tortor. Ut."
  },
  {
    id: 't3',
    avatar: CLENT_AVATAR3,
    name: 'Tina Snow',
    review: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dolor non leo fermentum euismod sit amet ac tortor. Ut."
  },
  {
    id: 't4',
    avatar: CLENT_AVATAR4,
    name: 'Tina Snow',
    review: " Lorem ipsum dolor sit amet, consm ipsum dolor sit amet, consm ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dolor non leo fermentum euismod sit amet ac tortor. Ut."
  },
  {
    id: 't5',
    avatar: CLENT_AVATAR1,
    name: 'Tina Snow',
    review: " Lorem i elit. Morbi nec dolor non leo fermentum euismod sit amet ac tortor. Ut."
  },
]
function Testimonials() {
  return <section id='testimonials'>
    <h5>Reviews from clients</h5>
    <h2>Testimonials</h2>
    <Swiper
      className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {tsms.map((testimonial) => {
        return <SwiperSlide id={testimonial.id} className='testimonial'>
          <div className='client__avatar'>
            <img src={testimonial.avatar} alt={testimonial.name} />

          </div>
          <h5 className='client__name'>{testimonial.name}</h5>
          <small className='client__review'>{testimonial.review}</small>
        </SwiperSlide>
      })}
    </Swiper>
  </section>
}

export default Testimonials