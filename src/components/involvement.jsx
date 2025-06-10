import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { involvement } from "../constants";

const InvolvementCard = ({ title, description, year, category, icon, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <p className="text-secondary text-[16px] mt-2">{description}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">{year}</span>
          </p>
          <p className="mt-1 text-secondary text-[12px]">{category}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Involvement = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Extra Curriculars</p>
          <h2 className={styles.sectionHeadText}>Involvement.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {involvement.map((testimonial, index) => (
          <InvolvementCard
            key={testimonial.title}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Involvement, "");
