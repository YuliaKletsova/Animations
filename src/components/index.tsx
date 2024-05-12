import {ConfigProvider, Flex, Tabs, TabsProps} from "antd";
import {SVGanimation} from "./svg";
import {FramerMotion} from "./FramerMotion";
import {ReactSpring} from "./ReactSpring";
import {ReactMove} from "./ReactMove";
import {ReactAnime} from "./ReactAnime";

  
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
        label: 'React Move',
        children: <ReactMove />,
    },
    {
        key: '5',
        label: 'React Anime',
        children: <ReactAnime />,
    },
];

export default function Home() {
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
            <Tabs defaultActiveKey="2" items={items}/>
        </ConfigProvider>
     </Flex>  );
  }
