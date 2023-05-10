import Navbar from "../navbar"
import { motion } from "framer-motion"

const Layout = ({ children }: any) => {
  return (
    <main>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        {children}
      </motion.div>
    </main>
  )
}

export default Layout
