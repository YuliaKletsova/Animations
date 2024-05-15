import {Flex, Typography} from "antd"
import {CloudSVG} from "./CloudSVG"
import {motion} from "framer-motion"

const divStyles = {
    width: '100px',
    height: '100px',
    background: 'white',
    borderRadius: '20%'
}
export const FramerMotion = () => {
    return  (
        <Flex style={{padding: '50px'}} align="center" gap={30}>
            <Flex vertical style={{width: '300px', height: '300px'}}>
                <CloudSVG />
            </Flex>

            <Flex vertical style={{width: '300px', height: '300px'}} gap={30} align="center">
                <Typography.Title level={4}>Hover the box</Typography.Title>
                <motion.div 
                    style={divStyles}
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.8 }} 
                />
            </Flex>


            <Flex vertical style={{width: '300px', height: '300px'}} gap={30} align="center">
                <Typography.Title level={4}>Just enjoy</Typography.Title>
                <motion.div
                    style={divStyles}
                    animate={{
                        scale: [1, 1.2, 1.2, 1.1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        repeatDelay: 1
                    }}
                />
            </Flex>
        </Flex>
    )
}