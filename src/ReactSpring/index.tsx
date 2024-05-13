import { Flex, Typography } from "antd"
import { HelloComponent } from "./HelloComponent"

export const ReactSpring = () => {
    return (
        <Flex style={{padding: '50px'}} vertical align="flex-start" gap={30}>
            <Flex vertical style={{width: '500px', height: '500px'}}>
                <Typography.Title level={4}>Click to toggle</Typography.Title>
                <HelloComponent />
            </Flex>
        </Flex>
    )
}