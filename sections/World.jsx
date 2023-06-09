import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts';

const World = () => (

  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Play with friends around the world" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Find, compete and collaborate with gamers from all over the world
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variant={fadeIn('up', 'tween', 0.1, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-[77%] right-[77%] w-[175px] h-[175px] p-[6px] rounded-full">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[30%] lg:left-[70%] left-[80%] w-[175px] h-[175px] p-[6px] rounded-full">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute bottom-[50%] left-[40%] w-[175px] h-[175px] p-[6px] rounded-full">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute bottom-[55%] left-[55%] lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] p-[6px] rounded-full">
          <img src="/map-card-1.png" alt="card on map" className="w-full h-full" />
        </div>
        <div className="absolute top-[25%] right-[55%] lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] p-[6px] rounded-full">
          <img src="/map-card-2.png" alt="card on map" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;