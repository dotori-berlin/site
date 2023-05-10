import { useState } from "react"
import { Text, Box, Center, Flex } from "@chakra-ui/react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import setHours from "date-fns/setHours"
import setMinutes from "date-fns/setMinutes"
import { format } from "date-fns"

const SelectedTable = ({ selectedTable }: any) => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  )
  return (
    <Box bg="white" borderRadius="xl" h="100%" ml={[0, 4]} mt={[4, 0]}>
      {selectedTable !== "" && (
        <>
          <Center>
            <Center>
              <Text my="4" fontWeight="bold" fontSize={[400]}>
                Table {selectedTable}
              </Text>
            </Center>
            <DatePicker
              selected={startDate}
              // @ts-ignore
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              excludeTimes={[
                setHours(setMinutes(new Date(), 0), 17),
                setHours(setMinutes(new Date(), 30), 18),
                setHours(setMinutes(new Date(), 30), 19),
                setHours(setMinutes(new Date(), 30), 17),
              ]}
              dateFormat="MMMM d, yyyy h:mm"
              inline
              id="published-date"
              showPopperArrow={false}
              className="react-datapicker"
            />
          </Center>

          <Center>{format(startDate, "MMM d, yyyy h:mm a")}</Center>
        </>
      )}
    </Box>
  )
}

export default SelectedTable
