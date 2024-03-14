import { Flex } from '@chakra-ui/react';
import FullHeightSection from './FullHeightSection';
import SectionContent from './SectionContent';

function LandingPageTemplate() {
    return (
        <Flex direction="column">
            <FullHeightSection>
                <SectionContent bgColor="blue.500">Section 1</SectionContent>
            </FullHeightSection>
            <FullHeightSection>
                <SectionContent bgColor="red.500">Section 2</SectionContent>
            </FullHeightSection>
            <FullHeightSection>
                <SectionContent bgColor="green.500">Section 3</SectionContent>
            </FullHeightSection>
            <FullHeightSection>
                <SectionContent bgColor="yellow.500">Section 4</SectionContent>
            </FullHeightSection>
            <FullHeightSection>
                <SectionContent bgColor="orange.500">Section 5</SectionContent>
            </FullHeightSection>
        </Flex>
    );
}

export default LandingPageTemplate;
