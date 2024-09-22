

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
//   const userId = 'user-id';
//   const token = 'authentication-token';
//   const user: User = { id: userId };

//   const client = new StreamVideoClient({ apiKey, user, token });
//   const call = client.call('default', 'my-first-call');
//   call.join({ create: true });

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();

    const { user, getUser } = useKindeBrowserClient();


    useEffect(() => {
        if (!getUser || !user) return;
        if (!apiKey) throw new Error('Stream API key missing');

        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id!,
                name: user?.given_name! || user?.id!,
                image: user?.picture!
            },

        });
    }, [user, getUser]);

    return (
        <StreamVideo client={videoClient}>

        </StreamVideo>
    );
};

export default StreamVideoProvider;