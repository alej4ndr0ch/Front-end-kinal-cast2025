import toast from "react-hot-toast";
import { followChannel as followChannelRequest} from "../../services";

export const useFollowChannel = () => {

    const followChannel = async(channelId, onSuccess) => {

        const responseData = await followChannelRequest(channelId);

        if(responseData){
            return toast.error(
                responseData.e?.responseData?.data || 'ocurrio un error al seguir al canal'
            )
        }

        toast.success('Channel Followed succesfully!')
        onSuccess(true)
    }

    return{
        followChannel
    }
}