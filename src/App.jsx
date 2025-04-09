import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 w-[350px] text-center"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        whileHover={{ rotateY: 5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-white mb-6 tracking-wide"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ⚡ Super Counter
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            className="text-[5rem] font-extrabold text-cyan-300 drop-shadow-lg"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {count}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-6 gap-6">
          <motion.button
            onClick={decrement}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px #f87171' }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 animate-pulse hover:bg-red-600"
          >
            - Decrement
          </motion.button>

          <motion.button
            onClick={increment}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px #4ade80' }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 animate-pulse hover:bg-green-600"
          >
            + Increment
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default App
