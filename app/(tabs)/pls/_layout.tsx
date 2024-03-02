import { Stack } from "expo-router";

export default function MenuStack() {
    return <Stack>
        <Stack.Screen name="chats" options={ {title: 'Home'} } />
    </Stack>
}