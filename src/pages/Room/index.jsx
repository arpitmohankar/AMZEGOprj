import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage=()=>{
    const {roomID}=useParams()

    const myMeeting=async(element)=>{
        const appID = 1644181493;
        const serverSecret = "bcc1341335a731d2cdb8f7a61eb7f47d";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomID, 
            Date.now().toString(), 
            "Your Name"
            );
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
                container:element,
                sharedLinks: [
                    {
                      name: 'share link',
                      url:`http://localhost:3000/room/${roomID}`
                    },
                  ],
                scenario:{
                    mode:ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
                
            });
    };

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}

export default RoomPage;


