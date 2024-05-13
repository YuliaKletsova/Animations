import { Flex, Typography} from "antd";
import { useLayoutEffect, useRef } from "react"
import gsap from 'gsap';

export const ContentSwitch = () => {
    const ref = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const timeline = gsap.timeline();
            timeline.from('#slider', {
                xPercent: '-100',
                duration: 1.3,
                delay: 0.3,
            }).from(['#title', '#description'], {
                opacity: 0,
                y: '+=30',
                stagger: 0.5
            }).to(['#title', '#description'], {
                opacity: 0,
                y: '-=30',
                stagger: 0.5
            }).to('#slider', {
                xPercent: '-100',
                duration: 1.3,
            })
        }, ref)

        return () => ctx.revert()
    }, [])

    return (
        <div style={{position: 'relative'}} ref={ref}>
            <Flex 
                vertical
                justify="center"
                align="center"
                style={{
                    position: 'absolute',
                    width: '500px',
                    height: '200px',
                    background:'#1c1b21',
                    zIndex: 1000
                }}
                id="slider"
            >
                <Typography.Title id="title">Hold on!</Typography.Title>
                <Typography.Title id="description">Just a second</Typography.Title>
            </Flex>
            <Flex vertical gap={30} id="transition-element" justify="center" align="center">
                <Typography.Title level={4} id="welcome">Welcome to GSAP animations</Typography.Title>
            </Flex>
        </div>
    )
}
