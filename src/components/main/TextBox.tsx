import { Text, Box, Center, Flex, Image } from "@chakra-ui/react"
import Link from "next/link"

const TextBox = () => {
  return (
    <Box>
      <Center>
        <Text fontSize={["3xl", "5xl"]} fontWeight="bold">
          Korean Anju Bar
        </Text>
      </Center>
      <Center textAlign="center">
        <Flex direction="column">
          <Box my="4">
            <Text>
              <b>Thursday - Sunday 17:30-23h</b>
              <br />
              Gustav-Adolf-Str 159, 13086 Berlin
            </Text>
          </Box>
          <Box>
            <Text>
              Cash only - card payments coming soon!
              <br />
              Last food order at 21:45
              <br />
              <Link
                href="https://www.instagram.com/dotori.berlin/"
                target="_blank"
              >
                <u>@dotori.berlin</u>
              </Link>
            </Text>
          </Box>
        </Flex>
      </Center>
    </Box>
  )
}

export default TextBox
