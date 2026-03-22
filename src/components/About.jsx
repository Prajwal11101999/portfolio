import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'> {/* Apply the class to a div */}
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
        className='bg-tertiary rounded-[20px] py-2 px-4 min-h-[180px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-white text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m a Full Stack Developer with a strong focus on building scalable backend systems and intelligent, data-driven applications. I specialize in designing high-performance APIs, optimizing data pipelines, and delivering seamless user experiences using technologies like Python, React, and cloud platforms. From developing real-time systems to integrating AI-powered solutions with OpenAI and LangChain, I enjoy solving complex problems end-to-end. With hands-on experience in production environments, CI/CD workflows, and collaborative Agile teams, I bring both technical depth and practical impact. Ready to build something meaningful? Let’s connect! :D
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