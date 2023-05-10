import { Box, Image } from "@chakra-ui/react"

const ImageBox = () => {
  return (
    <Box>
      <Image
        src="/images/Illustraion_RGB.png"
        alt="main logo"
        objectFit="fill"
      />
      <Image src="/images/Logo_Text_RGB.png" alt="main logo" objectFit="fill" />
    </Box>
  )
}

export default ImageBox
