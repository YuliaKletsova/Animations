import { Flex } from "antd"
import { ContentSwitch } from "./ContentSwitch"
import { useEffect, useState } from "react";

export const GSAP = () => {
    const [mount, setMount] = useState(true);

    useEffect(() => {
        if (mount) setTimeout(() => setMount(false), 5000)
        else setMount(true)
    })

    return (
        <Flex style={{padding: '50px'}} vertical align="flex-start" gap={30}>
            <Flex vertical style={{width: '500px', height: '500px'}}>
                {mount && <ContentSwitch />}
            </Flex>
        </Flex>
    )
}