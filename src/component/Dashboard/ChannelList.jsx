import React from 'react'

const ChannelList = () => {

    const channels = ["Software" , "Random", "Marketing", "Development"]

  return (
    <div className="channel-list">
        <div className="channel-header">
            Channels

        </div>

        <div className="channel-items">
            {channels.map(channel => 

                (
                    <div key={channel} className="channel-item">
                        {channel}
                    </div>

                )
            )}


        </div>
    </div>
  )
}

export default ChannelList