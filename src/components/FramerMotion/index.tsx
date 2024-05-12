import {Flex} from "antd"
import {CloudSVG} from "./CloudSVG"

export const FramerMotion = () => {
    return  (
        <Flex style={{padding: '50px'}} vertical align="flex-start" gap={30}>
            <Flex vertical style={{width: '500px', height: '500px'}}>
                <CloudSVG />
            </Flex>
        </Flex>
    )
}