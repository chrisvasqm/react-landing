import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode,
    bgColor: string
}
function SectionContent({ bgColor, children }: Props) {
    return <Box width={'100%'} height={'100%'} bg={bgColor}>{children}</Box>;
}

export default SectionContent;
