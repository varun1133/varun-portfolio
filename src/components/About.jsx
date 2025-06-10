import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <div className="mt-4 flex items-center gap-8">
          <motion.img 
            src={`${import.meta.env.BASE_URL}MY.jpeg`}
            alt="Varun Gowda H S"
            whileHover={{ 
              scale: 1.05,
              rotate: 3,
              filter: "brightness(1.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.3
            }}
            className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-tertiary hover:border-[#915EFF] cursor-pointer transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(145,94,255,0.5)] filter hover:brightness-110"
          />
          <div>
            <h3 className="text-white text-[24px] font-bold">Data Analyst,Full Stack Developer & UI/UX Designer</h3>
            <p className="text-secondary mt-2">Bangalore, Karnataka</p>
          </div>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Computer Science student at Malnad College of Engineering, specializing in full-stack development 
        with React.js, Django, and Python. Through internships at Dyashin Technosoft and Plasmid Innovation, 
        I've gained expertise in UI development and data analytics. Passionate about creating efficient, 
        user-friendly solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
