import { Flex } from "antd"
import { Card } from "./Card"

export const ReactTransitionGroup = () => {
    return (
        <Flex style={{padding: '50px'}} vertical align="flex-start" gap={30}>
            <Card />
        </Flex>
    )
}