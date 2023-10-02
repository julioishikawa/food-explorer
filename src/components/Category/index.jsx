import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { Card } from "../Card";
import { Container } from "./styles";

export function Category({ title, dishes }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Swiper
        slidesPerView="auto"
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
      >
        {dishes &&
          dishes.map((dish) => (
            <SwiperSlide key={dish.id}>
              <Card
                id={dish.id}
                image={dish.image}
                title={dish.name}
                price={dish.price}
                description={dish.description}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
}
