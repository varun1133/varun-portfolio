import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { involvement } from "../constants";

const InvolvementCard = ({ index, title, description, year, category, icon }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <h3 className='text-white font-bold text-[24px]'>{title}</h3>
      <p className='text-secondary text-[16px] mt-2'>{description}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            {category}
          </p>
          <p className='mt-1 text-secondary text-[14px]'>
            {year}
          </p>
        </div>

        <img
          src={icon}
          alt={title}
          className='w-10 h-10 rounded-full object-contain bg-white/10 p-1'
        />
      </div>
    </div>
  </motion.div>
);

const Involvement = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Extra-curricular</p>
          <h2 className={styles.sectionHeadText}>Involvements & Hobbies.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {involvement.map((item, index) => (
          <InvolvementCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Involvement, "");
