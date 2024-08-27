import FoodList from "@/modules/home/FoodList";
import FunctionMenu from "@/modules/home/FunctionMenu";
import Top from "@/modules/layouts/Top";
import { Box, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import FridgeState from "@/modules/home/FridgeState";
export default function Home() {
  return (
    <Box
    // bgGradient="linear(to-r, gray.200, rgb(205,205,128,0.1))"
    >
      <Top>
        <FoodList />
      </Top>
    </Box>
  );
}

// import FoodList from "@/modules/home/FoodList";
// import FunctionMenu from "@/modules/home/FunctionMenu";
// import Top from "@/modules/layouts/Top";
// import { Box, Flex } from "@chakra-ui/react";

// export default function Home() {
//   return (
//     <Box>
//       <Top>
//         <Flex direction="row" justifyContent="space-between" alignItems="flex-start">
//           <Box flex="1" mr="10px">
//             <FunctionMenu />
//           </Box>
//           <Box flex="2" ml="10px">
//             <FoodList />
//           </Box>
//         </Flex>
//       </Top>
//     </Box>
//   );
// }