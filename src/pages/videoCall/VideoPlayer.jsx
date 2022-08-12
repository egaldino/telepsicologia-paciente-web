import React, {useContext} from 'react';
import {SocketContext} from '../../context/VideoCallContext';
import {Grid} from "@mui/material";

const VideoPlayer = () => {
    const { callAccepted, myVideo, userVideo, callEnded, stream} = useContext(SocketContext);

    return (
        <>
            <Grid container>
                {stream && (
                        <Grid item xs={12} md={6}>
                            <video playsInline muted ref={myVideo} autoPlay style={{width: '550px'}}/>
                        </Grid>
                )}
                {callAccepted && !callEnded && (
                    <Grid item xs={12} md={6}>
                        <video playsInline ref={userVideo} autoPlay style={{width: '550px'}}/>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default VideoPlayer;
