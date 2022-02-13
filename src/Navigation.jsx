import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <motion.li
          whileHover={{
            scale: [1, 1.4, 1.2],
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 0.2,
            },
          }}
        >
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li
          whileHover={{
            scale: [1, 1.4, 1.2],
            rotate: [0, 10, -10, 0],
            transition: {
              duration: 0.2,
            },
          }}
        >
          <Link to="/about">About</Link>
        </motion.li>
      </ul>
    </nav>
  );
}
