// @ts-nocheck
import { Flex, Text, Box, Center, Grid, GridItem } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import ReservationDrawer from "./ReservationDrawer"

const FloorPlan = ({ isOpen, onOpen, onClose }: any) => {
  const [selectedTable, setSelectedTable] = useState("")

  const data = {}

  const variants = {
    hover: { scale: 1.05 },
    rest: { scale: 1 },
    clicked: { y: -5 },
  }

  const transition = {
    duration: 0.1,
    ease: "easeInOut",
  }

  const rows = 5
  const cols = 6
  const removeItem = [
    "0-0",
    "0-1",
    "1-1",
    "1-2",
    "1-3",
    "1-4",
    "1-5",
    "2-1",
    "2-2",
    "2-3",
    "2-4",
    "3-0",
    "3-1",
    "3-2",
    "3-3",
    "3-4",
    "3-5",
  ]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const key = `${i}-${j}`
      data[key] = {
        isVisible: !removeItem.includes(key),
        name: "",
      }
    }
  }

  data["0-2"].name = 13
  data["0-3"].name = 14
  data["0-4"].name = 15
  data["0-5"].name = 16
  data["2-0"].name = 12
  data["1-0"].name = 12
  data["2-0"].name = 11
  data["2-5"].name = 17
  data["4-0"].name = 1
  data["4-1"].name = 2
  data["4-2"].name = 3
  data["4-3"].name = 4
  data["4-4"].name = 5
  data["4-5"].name = 6

  const cells = []

  const handleTableClick = (key) => {
    onOpen()
    setSelectedTable(data[key].name)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const key = `${i}-${j}`
      const isVisible = data[key].isVisible
      cells.push(
        <motion.div
          key={key}
          variants={variants}
          initial="rest"
          whileHover="hover"
          whileTap="clicked"
          transition={transition}
        >
          <GridItem
            borderRadius={i === 4 ? "full" : "xl"}
            bg="white"
            borderWidth="1px"
            style={{
              visibility: isVisible ? "visible" : "hidden",
              cursor: "pointer",
            }}
            _hover={{ cursor: "pointer" }}
            onClick={() => handleTableClick(key)}
            h={[50, 75, 100, 125]}
            w={[50, 75, 100, 125]}
          >
            <Center h="100%">
              <Flex direction="column">
                <Center>
                  <Text fontSize={["md", "xl"]} fontWeight="bold">
                    {data[key].name}
                  </Text>
                </Center>
                <Center>
                  <Text fontSize={["xs", "md"]}>
                    {i === 4 ? "Bar " : "Table "}
                    {data[key].name}
                  </Text>
                </Center>
              </Flex>
            </Center>
          </GridItem>
        </motion.div>
      )
    }
  }

  return (
    <Box w="100%">
      <Flex w="100%">
        <Center w="100%">
          <Grid
            templateRows={`repeat(${rows}, 1fr)`}
            templateColumns={`repeat(${cols}, 1fr)`}
            gap={2}
            p="2"
          >
            {cells}
          </Grid>
        </Center>
        <ReservationDrawer
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          selectedTable={selectedTable}
        />
      </Flex>
    </Box>
  )
}

export default FloorPlan
