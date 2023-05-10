import { Box, Button, Center, Spacer, Image } from "@chakra-ui/react"
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()

  return (
    <Box w="100vw" h="4rem" borderBottom="1px solid" borderColor="#aba99b50">
      <Center h="100%">
        <Box
          mx="4"
          w="75px"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        >
          <Image src="/images/Logo_Text_RGB.png" alt="logo" />
        </Box>
        <Spacer />

        <Box mx="4">
          <Button variant="link" color="" onClick={() => router.push("/menu")}>
            Menu
          </Button>
        </Box>
        <Box mx="4">
          <Button
            variant="link"
            color=""
            onClick={() => router.push("/reservation")}
          >
            Reservation
          </Button>
        </Box>
      </Center>
    </Box>
  )
}

export default Navbar
