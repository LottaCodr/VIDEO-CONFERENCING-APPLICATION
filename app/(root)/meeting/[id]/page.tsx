"use client"

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const Meeting = ({ params: {id} }: { params: { id: string } }) => {

  const { user, isLoading } = useKindeBrowserClient()
  const [isSetupComplete, setIsSetupComplete ] = useState(false)
  const { call, isCallLoading } = useGetCallById(id);

  if(!isLoading || isCallLoading) return <Loader/>

  return (
  
  <main className="h-screen w-full">
    <StreamCall call={call}>
      <StreamTheme>
        {
          !isSetupComplete ? (
            <MeetingSetup/>
          ) : (<MeetingRoom/>)
        }
      </StreamTheme>
    </StreamCall>

  </main>
  )
};

export default Meeting;
