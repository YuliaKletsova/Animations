import { ConfigProvider, Flex, Tabs, TabsProps } from "antd";
import { SVGanimation } from "./svg";
import { FramerMotion } from "./FramerMotion";
import { ReactSpring } from "./ReactSpring";
import { ReactTransitionGroup } from "./ReactTransitionGroup";
import { GSAP } from "./GSAP";
import { useRouter } from "next/router";

  
const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'SVG Animation',
        children: <SVGanimation/>,
    },
    {
        key: '2',
        label: 'Framer Motion',
        children: <FramerMotion />,
    },
    {
        key: '3',
        label: 'React Spring',
        children: <ReactSpring />,
    },
    {
        key: '4',
        label: 'GSAP',
        children: <GSAP />,
    },
    {
        key: '5',
        label: 'ReactTransitionGroup',
        children: <ReactTransitionGroup />
    }
];

export default function Home() {
    const {query, push} = useRouter();
    const initialTab = query.tab && !Array.isArray(query.tab) ? query.tab : '1'; 
    const onTabChange: TabsProps['onChange'] = (activeKey) => 
        push(
            {
                pathname: '/',
                query: { tab: activeKey }
            }, 
            undefined,
            { shallow: true }
        )

    return (
     <Flex style={{width: '100vw', height: '100vh', padding: '100px'}}>
        <ConfigProvider theme={{
            components: {
                Tabs: {
                    inkBarColor: 'white',
                    itemActiveColor: 'white',
                    itemColor: 'white',
                    itemSelectedColor: 'white',
                },
                Typography: {
                    colorText: 'white',
                    colorTextDescription: 'white',
                    colorTextHeading: 'white'
                }
            }
        }}>
            <Tabs defaultActiveKey={initialTab} items={items} onChange={onTabChange} />
        </ConfigProvider>
     </Flex>  );
  }
