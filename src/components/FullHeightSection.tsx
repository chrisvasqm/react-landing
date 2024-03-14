import { Box } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

function FullHeightSection({ children }: Props) {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box height={height} minHeight="100vh">
            {children}
        </Box>
    );
}

export default FullHeightSection;
