export const Sidebar = ({channels}) => {
    if(!channels){
        return null
    }

    return (
        <div className="sidebar-container">
            <span className="sidebar-tittle">sugeridos</span>
            <span className="sidebar-subtittle">CANALES QUE SIGO</span>
            {channels.map((channel) => {
                return(
                    <div key={channel.id} className="sidebar-list-item">
                        <span className="sidebar-list-username">{channel.username}</span>
                        <span className="sidebar-list-status"
                            style={{
                                
                            }}
                        >
                                {channel.isOnline ? 'Online' : 'Offline'}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}