import {motion as m} from "framer-motion";
import {container, item} from "../animation";


export default function Projects(){
    return(
        <m.main 
        initial={{y: "100%"}}
        animate={{y: "0%"}}
        exit = {{opacity: 1}}
        transition = {{duration: 1, ease: "easeOut"}}
        className="text-greenc-500 absolute top-0 left-0 w-full h-full bg-greenc-100 lg:px-48 px-16">
            <div className="my-96 p-1 overflow-hidden">
                <m.h1 
                animate = {{y: 0}}
                initial = {{y: "100%"}}
                transition = {{delay: 0.5, duration: 0.5}}
                className="text-greenc-900 text-6xl text-center lg:text-right lg:text-9xl">
                    Comming soon.. 
                </m.h1>
            </div>
        </m.main>
    );
}