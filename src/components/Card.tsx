import { Box } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="15px"
      display="grid"
      gridGap={2}
      w='50%'
      minW="300px"
    >
      {children}
    </Box>
  );
};
