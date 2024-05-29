import { Divider, Flex, Text } from "@chakra-ui/react";
import { BsThermometerHigh } from "react-icons/bs";
import { FiWind } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { PiDropBold } from "react-icons/pi";
import { RiCheckboxBlankCircleLine, RiSearch2Line } from "react-icons/ri";
import { Box } from "../components/Box";
import { Input } from "../components/Input";
import { BoxItem } from "./BoxItem";

// import { useCoordsStore } from "../stores/coords";
// type WeatherInfo = {
//   label: string;
//   value: string;
// };

export const HomePage = () => {
  // const {
  //   states: { latitude, longitude },
  // } = useCoordsStore();

  return (
    <Flex
      height="100vh"
      justify="center"
      align="center"
      bg="previsao.cinza_imagem"
    >
      <Box
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p={8}
        bg="linear-gradient(175deg, rgba(202,77,38,1) 0%, rgba(128,31,0,1) 100%);"
      >
        <Flex alignItems="center" gap={2}>
          <Input label="" placeholder="localização..." w="350px" mr={2} p={6} />
          <Flex>
            <RiSearch2Line size="25px" color="#fff" />
          </Flex>
          <Flex>
            <GrLocation size="25px" color="#fff" />
          </Flex>
        </Flex>

        <Text>Sexta, 8 Dez 2023 | Horário Local: 09:26 AM</Text>
        <Text textTransform="uppercase">Cariacica, ES</Text>
        <Text>30 º C</Text>
        <Text>Limpo</Text>

        <Divider />

        <Flex alignItems="center" justifyContent="center" gap={3} p={5}>
          <BoxItem
            icon={<BsThermometerHigh />}
            label={"Temperatura"}
            value={"32%"}
          />
          <BoxItem
            icon={<RiCheckboxBlankCircleLine />}
            label={"Ìndice UV"}
            value={"Extremo"}
          />
          <BoxItem icon={<PiDropBold />} label={"Umidade"} value={"20%"} />
          <BoxItem icon={<FiWind />} label={"Vento"} value={"12%"} />
        </Flex>
      </Box>
    </Flex>
  );
};
