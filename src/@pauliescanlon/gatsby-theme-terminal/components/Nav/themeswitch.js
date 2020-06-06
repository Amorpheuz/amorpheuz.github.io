/** @jsx jsx */
import { useColorMode, Button, Flex , jsx, Box, Divider, Text } from 'theme-ui'

export default function ThemeSwitch() {
    const [colorMode, setColorMode] = useColorMode()
    const sun = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="28px"><path sx={{ fill: '#ffffff' }} d="M 15 3 L 15 8 L 17 8 L 17 3 Z M 7.5 6.09375 L 6.09375 7.5 L 9.625 11.0625 L 11.0625 9.625 Z M 24.5 6.09375 L 20.9375 9.625 L 22.375 11.0625 L 25.90625 7.5 Z M 16 9 C 12.144531 9 9 12.144531 9 16 C 9 19.855469 12.144531 23 16 23 C 19.855469 23 23 19.855469 23 16 C 23 12.144531 19.855469 9 16 9 Z M 16 11 C 18.773438 11 21 13.226563 21 16 C 21 18.773438 18.773438 21 16 21 C 13.226563 21 11 18.773438 11 16 C 11 13.226563 13.226563 11 16 11 Z M 3 15 L 3 17 L 8 17 L 8 15 Z M 24 15 L 24 17 L 29 17 L 29 15 Z M 9.625 20.9375 L 6.09375 24.5 L 7.5 25.90625 L 11.0625 22.375 Z M 22.375 20.9375 L 20.9375 22.375 L 24.5 25.90625 L 25.90625 24.5 Z M 15 24 L 15 29 L 17 29 L 17 24 Z" /></svg>
    const moon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="28px"><path sx={{ fill: '#ffffff' }} d="M 5 5 L 5 7 L 3 7 L 3 9 L 5 9 L 5 11 L 7 11 L 7 9 L 9 9 L 9 7 L 7 7 L 7 5 Z M 20.28125 7.9375 L 18.625 8 C 13.28125 8.191406 9 12.578125 9 17.96875 C 9 23.480469 13.488281 27.96875 19 27.96875 C 24.390625 27.96875 28.777344 23.6875 28.96875 18.34375 L 29.03125 16.71875 L 27.5625 17.40625 C 26.78125 17.777344 25.914063 17.96875 25 17.96875 C 21.675781 17.96875 19 15.292969 19 11.96875 C 19 11.054688 19.222656 10.21875 19.59375 9.4375 Z M 17.375 10.3125 C 17.25 10.867188 17 11.375 17 11.96875 C 17 16.375 20.59375 19.96875 25 19.96875 C 25.605469 19.96875 26.121094 19.722656 26.6875 19.59375 C 25.925781 23.21875 22.859375 25.96875 19 25.96875 C 14.570313 25.96875 11 22.398438 11 17.96875 C 11 14.117188 13.757813 11.082031 17.375 10.3125 Z" /></svg>
    return (
        <Box>
            <Divider />
            <Button variant=""
            onClick={e => {
                setColorMode(colorMode === 'default' ? 'light' : 'default')
            }}
        >
            <Flex sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text sx={{ mr: 1 }}>{colorMode === 'default' ? 'Lighten' : 'Darken'}</Text>{colorMode === 'default' ? sun : moon}
            </Flex>
        </Button>
        </Box>
    )
}