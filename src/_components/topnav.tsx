import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaUserCircle } from 'react-icons/fa';


export default function Topnav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-auto text-white">
      <div className="flex justify-center flex-1">
        <img 
          src="https://nqoiq4wi68.ufs.sh/f/2f9wccbRFAt91feVizjIsQmGHiBp0oa9WAXOtrNVzky62K8n" 
          alt="Logo" 
          className="h-15 w-40 center"
        />
      </div>
  
      <div className="flex flex-row">
      <SignedOut>
        <SignInButton>
        <button className="p-3 rounded-full hover:bg-white-700 transition-colors cursor-pointer">
            <FaUserCircle className="w-10 h-10 text-white" />
        </button>
        </SignInButton>
      </SignedOut>
        <SignedIn>

        </SignedIn>
      </div>
    </nav>
  );
};