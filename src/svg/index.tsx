import { Flex, Typography } from "antd"
import { Progress, Rectangle } from './svgComponents';

export const SVGanimation = () => {
    return (
        <Flex style={{padding: '50px'}} vertical align="flex-start" gap={30}>
            <Flex vertical>
                <Typography.Title level={4}>Animating borderRadius and fill for simple svg</Typography.Title>
                <Rectangle />
            </Flex>

            <Flex vertical>
                <Typography.Title level={4}>Difference in gradients</Typography.Title>
                <Progress />
            </Flex>
        </Flex>
    )
};