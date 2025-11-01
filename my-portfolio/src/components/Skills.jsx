import { memo, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useData } from '../context/DataContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Skills.css';

function Skills() {
  const { data } = useData();
  const { skills } = data;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        <p className="section-subheading">
          Technologies and tools I use to create modern web experiences.
        </p>

        {isDesktop ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-skills',
              prevEl: '.swiper-button-prev-skills',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: { slidesPerView: 4, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 15 },
            }}
            className="skills-swiper"
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill.id}>
                <div className="skill-card">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-level">{skill.level}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev swiper-button-prev-skills"></div>
            <div className="swiper-button-next swiper-button-next-skills"></div>
          </Swiper>
        ) : (
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(Skills);
