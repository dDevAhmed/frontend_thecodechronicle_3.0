import { RiGovernmentLine } from "react-icons/ri";
import { LuBrainCircuit } from "react-icons/lu";
import { IoFitnessOutline } from "react-icons/io5";
import { LuGaugeCircle } from "react-icons/lu";
import { BsShieldCheck } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";
import { IoServerOutline } from "react-icons/io5";
import { IoPieChartOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { AiOutlineBlock } from "react-icons/ai";

const LeftSidebarFollowing = ({category}) => {
    // need category map - for their icons
    // ai, health, performance, security, frontend, backend, data, web3, tools, 
    // for codeland - government

    const categoryMap = {
        government: <RiGovernmentLine />,
        ai: <LuBrainCircuit />,
        health: <IoFitnessOutline />,
        performance: <LuGaugeCircle />,
        security: <BsShieldCheck />,
        frontend: <CgBrowser />,
        backend: <IoServerOutline />,
        data: <IoPieChartOutline />,
        tool: <VscTools />,
        web3: <AiOutlineBlock />,
    }
  return (
    <div className='flex items-center justify-between ga-3'>
        <p></p>
    </div>
  )
}

export default LeftSidebarFollowing