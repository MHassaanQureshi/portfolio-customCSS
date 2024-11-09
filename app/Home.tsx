import { motion } from "framer-motion";
import "./Homepage.css"
const Home = () => {
  return (
    <div className="flex-container">
      <motion.div
        className="motion-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="heading">M. Hassaan Qureshi</h1>
        <p className="subheading">I build things on the internet</p>
      </motion.div>
    </div>
  );
};

export default Home;
