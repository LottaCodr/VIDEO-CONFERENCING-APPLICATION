"use server";


import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { StreamClient } from "@stream-io/node-sdk";


const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const { user } = useKindeBrowserClient();
    
if(!user) throw new Error('User is not logged in');
if(!apiKey) throw new Error('No Api Key');
if(!user) throw new Error('No API Secret');

const client = new StreamClient(apiKey, apiSecret!)

const issued = Math.floor(Date.now() / 1000) - 60;
const expiration = Math.round(new Date().getTime() / 1000) + 60 * 60;

const token = client.generateUserToken({user_id: user.id, expiration, issued});
 
return token;

}