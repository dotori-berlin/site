import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  )
}
