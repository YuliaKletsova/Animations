import dynamic from "next/dynamic";
import {NextPage} from "next/types";


const MainPageComponent = dynamic(() => import('~/src/components'), {
    ssr: false,
});

const Page: NextPage = () => <MainPageComponent />;

export default Page;