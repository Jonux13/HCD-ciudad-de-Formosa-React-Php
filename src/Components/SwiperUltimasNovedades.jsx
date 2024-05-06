import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "./swiperUltimasNovedades.css";

function SwiperUltimasNovedades() {

  let swiperInstance;

  useEffect(() => {
    // Control autoplay based on the slide index
    if (swiperInstance) {
      swiperInstance.on("slideChange", function () {
        const currentSlideIndex = swiperInstance.realIndex;

        // Ajustar el delay del autoplay según el slide
        if (currentSlideIndex === 3) { // Slide del video
          swiperInstance.params.autoplay.delay = 8000; // 7 segundos para el video
        } else {
          swiperInstance.params.autoplay.delay = 3000; // Tiempo normal para los otros slides
        }

        swiperInstance.autoplay.start(); // Reiniciar autoplay con el nuevo delay
      });
    }
  }, [swiperInstance]);


   useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
      });

      // Reinicializar AOS cada vez que cambia el slide
      if (swiperInstance) {
        swiperInstance.on('slideChange', () => {
          window.AOS.refresh(); // Refrescar AOS para reactivar animaciones
        });
      }
    }
  }, [swiperInstance]); // Se ejecuta cuando swiperInstance cambia


  return (
    <div className="swiper-container">
      <div className="section-title_swiper_novedades">
        <h2>Últimas Novedades</h2>
      </div>

      <Swiper
        effect="fade"
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperInstance = swiper)}
      >
        <SwiperSlide className="swiper-slide" style={{ height: "400px" }}>
          <div className="slide-content">
            <h2>
              El Gobernador inauguró el nuevo edificio del Concejo Deliberante
              de Formosa
            </h2>
            <p>25 de febrero de 2024</p>
          </div>
          <img
            src="/assets/img/swiper_novedades/insfran2.jpg"
            alt="Slide 1"
            className="swiper-image"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide" style={{ height: "400px" }}>
          <div className="slide-content">
            <h2>
              El Gobernador inauguró el nuevo edificio del Concejo Deliberante
              de Formosa
            </h2>
            <p>25 de febrero de 2024</p>
          </div>
          <img
            src="/assets/img/swiper_novedades/insfraninauguracion.jpg"
            alt="Slide 2"
            className="swiper-image"
          />
        </SwiperSlide>


        <SwiperSlide className="swiper-slide" style={{ height: "400px" }}>
          <div className="slide-content">
            <h2>
              Jorge Jofré inaugura el período de Sesiones Ordinarias del HCD
            </h2>
            <p>25 de febrero de 2024</p>
          </div>
          <img
            src="/assets/img/swiper_novedades/intendente.jpg"
            alt="Slide 3"
            className="swiper-image"
          />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide" style={{ height: "400px" }}>
          <div className="slide-content">
            <h2>
              Bievenida al secretario legislativo Lic. Nestor Mario Barrios{" "}
            </h2>
            <p>25 de abril de 2024</p>
          </div>
          <video
            src="/assets/img/swiper_novedades/WhatsApp Video 2024-04-29 at 19.42.15_1.mp4"
            alt="Video Slide"
            className="swiper-video"
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"   
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperUltimasNovedades;
