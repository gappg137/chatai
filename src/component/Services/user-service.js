import { myAxios } from "./Helper"

import { BASE_URL } from "./Helper";

export const signUp= async (user) => 
    {
        try {
            const response = await myAxios.post(BASE_URL+"/x/register",user , { 
            });
            return response.data;

        } catch (error) {
            throw error;
        }
    };