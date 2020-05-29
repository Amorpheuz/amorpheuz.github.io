/** @jsx jsx */

import { jsx, Flex, Box, Text, Divider, Link } from 'theme-ui';
import { lighten } from '@theme-ui/color'

export default function Footer() {
    return (
        <Box sx={{mb:-32}}>
            <Divider/>
            <Flex 
            sx={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Made with </Text>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 64 64" height="48px" sx={{p:1}}><path sx={{fill:lighten('primary',0.875)}}d="M41 20h-6v6h6v6h6V20z"/><path sx={{fill:'primary'}}d="M47 20v12h6V20zM47 20v-6H35v6h6z"/><path sx={{fill:'primary'}}d="M41 26h-6v-6h-6v-6H17v6h-6v12h6v6h6v6h6v6h6v-6h6v-6h6v-6h-6z"/><path d="M53 20h6v6h-6z"/><g><path d="M29 14h6v6h-6zM29 50h6v6h-6zM23 44h6v6h-6zM17 38h6v6h-6zM11 32h6v6h-6zM11 20H5v12h6v-6zM11 14h6v6h-6zM29 14V8H17v6h6zM35 44h6v6h-6zM41 38h6v6h-6zM47 32h6v6h-6zM53 20v12h6V20zM47 14h6v6h-6zM47 14V8H35v6h6z"/></g></svg>
                <Text> by Yash Dave</Text>
            </Flex>
            <Flex sx={{justifyContent: 'center'}}>
                <Text variant="styles.small">Based on <Link href="https://github.com/PaulieScanlon/gatsby-theme-terminal">Terminal</Link> by <Link href="https://twitter.com/PaulieScanlon/">Paul Scanlon</Link></Text>
            </Flex>
        </Box>
    )
}