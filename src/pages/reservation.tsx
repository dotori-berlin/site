import Layout from "@/components/layout"
import FloorPlan from "@/components/reservation/FloorPlan"
import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const ReservationPage = () => {
  const [startDate, setStartDate] = useState(new Date())
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Layout>
      <Center w="100%" mt="4rem" px={[4, 4]}>
        <FloorPlan isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Center>
    </Layout>
  )
}

export default ReservationPage
