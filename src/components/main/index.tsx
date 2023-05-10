import { Box, Center } from "@chakra-ui/react"
import ImageBox from "./ImageBox"
import TextBox from "./TextBox"

const MainBox = () => {
  return (
    <Center mt={["4rem", "2rem", "4rem"]}>
      <Box w={[250, 300, "500px"]}>
        <ImageBox />
        <TextBox />
      </Box>
    </Center>
  )
}

export default MainBox
