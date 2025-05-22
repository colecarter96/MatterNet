import Image from "next/image";
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />

      {/* // This is the main body section */}
      <div>
        {/* // Card #1 (Traction) */}
        <div className="pb-20 pt-30 relative">
          <div className="relative">
            <h1 className="font-roboto-mono text-8xl font-bold text-right pr-30 animate-slide-in">
            {/* <h1 className="font-roboto-mono text-8xl font-bold text-right pr-30"> */}
              TRACTION
            </h1>
          </div>
          <p className="font-rubik text-2xl ml-30 mr-[40%] pt-30"> 
          Matter web will take you from no site to a full fledged site. Whether you have an idea, another site, 
          or haven&apos;t even thought of making a site for your business.
          </p>
        </div>

        <div className="h-[1px] bg-black w-[98%] ml-[1%]"></div>

        {/* // Card #2 (Clarity) */}
        <div className="pb-20 pt-30">
            <h1 className="font-roboto-mono text-8xl font-bold text-left pl-30 animate-typewriter">
                CLARITY
            </h1>
            <p className="font-rubik text-2xl mr-30 ml-[40%] pt-30">
            Clearly convey the message to your client. We&apos;re talking personal branding here. 
            Whether you&apos;re a pizza shop, a local electrician, or a designer furniture boutique, 
            we have to let the people know what they&apos;re getting.
            </p>
        </div>

        <div className="h-[1px] bg-black w-[98%] ml-[1%]"></div>

        {/* // Card #3 (Credibility) */}
        <div className="pb-20 pt-30">
            <h1 className="font-roboto-mono text-8xl font-bold text-right pr-30 animate-credibility">
            {/* <h1 className="font-roboto-mono text-8xl font-bold text-right pr-30"> */}
              CREDIBILITY
            </h1>
            <p className="font-rubik text-2xl ml-30 mr-[40%] pt-30">
              Our last step is to make you look official. We will equip you with all of the
              bells and whistles to make sure you&apos;re dialed in. Make sure people know your pizza
                is the real deal, your wire cutting is top notch, or your chairs are really Herman Miller.
            </p>
        </div>

        <div className="h-[1px] bg-black w-[98%] ml-[1%]"></div>


        {/* This is where I want the red cube */}
        <div className="ml-[80%] w-[20%] aspect-square bg-[#CA0000] rounded-l-lg translate-y-[-50%]">
          
        </div>

        <div className=""></div>

        

      </div>
    </div>
  );
}
