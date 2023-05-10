import {
  Spacer,
  Text,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Flex,
  Textarea,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  useToast,
} from "@chakra-ui/react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"

const ReservationDrawer = ({
  btnRef,
  isOpen,
  onOpen,
  onClose,
  selectedTable,
}: any) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDuration, setSelectedDuration] = useState(1)
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const toast = useToast()

  const handleReset = () => {
    reset()
  }

  const onSubmit = (data: any) => {
    console.log(data)
    toast({
      title: "Booking successful!",
      description: `Name: ${data.name}, Email: ${data.email}, Date: ${
        data.date
      }, Message: ${data.message}, Duration: ${data.duration * 60} minutes`,
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    handleReset()
    onClose()
  }

  return (
    <>
      <Drawer
        size={["full", "sm"]}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#FBF8F2">
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              <Text fontSize="6xl" fontWeight="bold">
                Table {selectedTable}
              </Text>
            </Center>
          </DrawerHeader>
          <DrawerBody>
            <Center w="100%">
              <Flex w="100%" direction="column">
                <Box>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4}>
                      <Flex direction="column" h="calc(100vh - 10rem)">
                        <Box>
                          <FormControl isInvalid={Boolean(errors.name)}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                              variant="outline"
                              mb="4"
                              bg="#f7f7f5"
                              borderRadius="md"
                              shadow="sm"
                              id="name"
                              placeholder="Enter your name"
                              {...register("name", { required: true })}
                            />
                          </FormControl>

                          <FormControl isInvalid={Boolean(errors.email)}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                              variant="outline"
                              mb="4"
                              bg="#f7f7f5"
                              borderRadius="md"
                              shadow="sm"
                              type="email"
                              id="email"
                              placeholder="Enter your email"
                              {...register("email", { required: true })}
                            />
                          </FormControl>

                          <FormControl isInvalid={Boolean(errors.message)}>
                            <FormLabel htmlFor="email">Message</FormLabel>
                            <Textarea
                              variant="outline"
                              bg="#f7f7f5"
                              mb="4"
                              borderRadius="md"
                              shadow="sm"
                              id="message"
                              placeholder="Enter your message"
                              {...register("message", { required: true })}
                            />
                          </FormControl>

                          <FormControl isInvalid={Boolean(errors.duration)}>
                            <FormLabel htmlFor="duration">
                              Duration (min)
                            </FormLabel>
                            <Controller
                              control={control}
                              name="duration"
                              rules={{ required: true, min: 0.5, max: 24 }}
                              defaultValue={1}
                              render={({
                                field: { onChange, value },
                                fieldState: { error },
                              }) => (
                                <Box mb="2" mx="2">
                                  <Slider
                                    id="duration"
                                    aria-label="Duration"
                                    value={selectedDuration}
                                    min={0.5}
                                    max={4}
                                    step={0.5}
                                    onChange={(value) => {
                                      setSelectedDuration(value)
                                      onChange(value)
                                    }}
                                  >
                                    <SliderTrack bg="#cdba63">
                                      <SliderFilledTrack bg="#502111" />
                                    </SliderTrack>
                                    <SliderThumb boxSize="6" bg="#cdba63">
                                      <Box>
                                        <Text fontSize="xs">
                                          {selectedDuration * 60}
                                        </Text>
                                      </Box>
                                    </SliderThumb>
                                  </Slider>
                                </Box>
                              )}
                            />
                          </FormControl>

                          <FormControl isInvalid={Boolean(errors.date)}>
                            <FormLabel htmlFor="date">Date</FormLabel>
                            <Controller
                              control={control}
                              name="date"
                              rules={{ required: true }}
                              render={({
                                field: { onChange, value },
                                fieldState: { error },
                              }) => (
                                <DatePicker
                                  selected={selectedDate}
                                  onChange={(date) => {
                                    // @ts-ignore
                                    setSelectedDate(date)
                                    // @ts-ignore
                                    onChange(date.toISOString())
                                  }}
                                  minDate={new Date()}
                                  dateFormat="yyyy/MM/dd HH:mm"
                                  showTimeSelect
                                  timeFormat="HH:mm"
                                  timeIntervals={30}
                                  timeCaption="Time"
                                  placeholderText="Select a date and time"
                                  className="date-picker"
                                />
                              )}
                            />
                          </FormControl>
                        </Box>
                        <Spacer />
                        <Box>
                          <Button
                            borderRadius="md"
                            shadow="sm"
                            w="100%"
                            type="submit"
                            bg="#502111"
                            color="#cdba63"
                            _hover={{ bg: "#cdba63", color: "#502111" }}
                            isDisabled={Boolean(
                              errors.name ||
                                errors.email ||
                                errors.message ||
                                errors.date ||
                                errors.duration
                            )}
                          >
                            Submit
                          </Button>
                        </Box>
                      </Flex>
                    </Stack>
                  </form>
                </Box>
              </Flex>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ReservationDrawer
