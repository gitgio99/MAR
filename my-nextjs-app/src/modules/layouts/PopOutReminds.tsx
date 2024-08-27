// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   Text,
//   Box,
//   Flex,
  
//   Divider,
// } from "@chakra-ui/react";
// import { BsFillBellFill } from "react-icons/bs";
// import { useFridge } from "../swr/useFridge";
// export default function PopOutReminds() {
//   const { data } = useFridge();

//   return (
//     <Menu>
//       <MenuButton as="button" transition="all 0.2s">
//         <BsFillBellFill size={20} />
//       </MenuButton>
//       <MenuList w="80vw" float={"right"}>
//         {data?.notification.map((item: string, index: number) => (
//           <MenuItem key={index}>{item}</MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// }




// import React from 'react';
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   Text,
//   Box,
//   Flex,
//   Badge,
// } from "@chakra-ui/react";
// import { BsFillBellFill } from "react-icons/bs";
// import { useFridge } from "../swr/useFridge";

// interface NotificationItem {
//   id: number;
//   message: string;
//   read: boolean;
//   date: string;
// }

// export default function PopOutReminds() {
//   const { data } = useFridge();

//   // Process notifications to handle both string array and object array
//   const processNotifications = (notifications: any): NotificationItem[] => {
//     if (!Array.isArray(notifications)) return [];
    
//     return notifications.map((item, index) => {
//       if (typeof item === 'string') {
//         return {
//           id: index,
//           message: item,
//           read: false,
//           date: new Date().toISOString()
//         };
//       } else if (typeof item === 'object' && item !== null) {
//         return {
//           id: item.id ?? index,
//           message: item.message ?? 'No message',
//           read: item.read ?? false,
//           date: item.date ?? new Date().toISOString()
//         };
//       }
//       return null;
//     }).filter((item): item is NotificationItem => item !== null);
//   };

//   const notifications = processNotifications(data?.notification);
//   const unreadCount = notifications.filter(item => !item.read).length;

//   const handleReadNotification = (id: number) => {
//     console.log(`Notification ${id} marked as read`);
//     // Implement logic to mark notification as read
//   };

//   return (
//     <Menu>
//       <MenuButton as="button" position="relative" transition="all 0.2s">
//         <BsFillBellFill size={20} />
//         {unreadCount > 0 && (
//           <Badge 
//             colorScheme="red" 
//             position="absolute" 
//             top="-5px" 
//             right="-5px" 
//             borderRadius="full"
//           >
//             {unreadCount}
//           </Badge>
//         )}
//       </MenuButton>
//       <MenuList maxW="350px" maxH="400px" overflowY="auto">
//         <Text p={2} fontWeight="bold">Notifications</Text>
//         <MenuDivider />
//         {notifications.length > 0 ? (
//           notifications.map((item) => (
//             <MenuItem key={item.id} onClick={() => handleReadNotification(item.id)}>
//               <Flex justifyContent="space-between" alignItems="center" width="100%">
//                 <Box flex={1}>
//                   <Text>{item.message}</Text>
//                   <Text fontSize="xs" color="gray.500">{item.date}</Text>
//                 </Box>
//                 {!item.read && <Badge colorScheme="blue">New</Badge>}
//               </Flex>
//             </MenuItem>
//           ))
//         ) : (
//           <MenuItem>No new notifications</MenuItem>
//         )}
//       </MenuList>
//     </Menu>
//   );
// }




import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  Box,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { BsFillBellFill } from "react-icons/bs";
import { useFridge } from "../swr/useFridge";

interface NotificationItem {
  id: number;
  message: string;
  read: boolean;
  date: string;
}

export default function PopOutReminds() {
  const { data } = useFridge();

  // Process notifications to handle both string array and object array
  const processNotifications = (notifications: any): NotificationItem[] => {
    if (!Array.isArray(notifications)) return [];
    
    return notifications.map((item, index) => {
      if (typeof item === 'string') {
        return {
          id: index,
          message: item,
          read: false,
          date: new Date().toISOString()
        };
      } else if (typeof item === 'object' && item !== null) {
        return {
          id: item.id ?? index,
          message: item.message ?? 'No message',
          read: item.read ?? false,
          date: item.date ?? new Date().toISOString()
        };
      }
      return null;
    }).filter((item): item is NotificationItem => item !== null);
  };

  const notifications = processNotifications(data?.notification);
  const unreadCount = notifications.filter(item => !item.read).length;

  const handleReadNotification = (id: number) => {
    console.log(`Notification ${id} marked as read`);
    // Implement logic to mark notification as read
  };

  return (
    <Menu>
      <MenuButton as="button" position="relative" transition="all 0.2s" zIndex={1001}> 
        <BsFillBellFill size={20} />
        {unreadCount > 0 && (
          <Badge 
            colorScheme="red" 
            position="absolute" 
            top="-5px" 
            right="-5px" 
            borderRadius="full"
          >
            {unreadCount}
          </Badge>
        )}
      </MenuButton>
      <MenuList 
        maxW="350px" 
        maxH="400px" 
        overflowY="auto" 
        zIndex={999}
      >
        <Text p={2} fontWeight="bold">Notifications</Text>
        <MenuDivider />
        {notifications.length > 0 ? (
          notifications.map((item) => (
            <MenuItem key={item.id} onClick={() => handleReadNotification(item.id)}>
              <Flex justifyContent="space-between" alignItems="center" width="100%">
                <Box flex={1}>
                  <Text>{item.message}</Text>
                  <Text fontSize="xs" color="gray.500">{item.date}</Text>
                </Box>
                {!item.read && <Badge colorScheme="blue">New</Badge>}
              </Flex>
            </MenuItem>
          ))
        ) : (
          <MenuItem>No new notifications</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}