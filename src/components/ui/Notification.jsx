import NotificationItem from '@/components/ui/NotificationItem'
export default function Notification({notificationsList}){

    return (
        <div className="container">
            <div className="notifications">
                {notificationsList.map((item, index) => (
                    <NotificationItem key={index} data={item} />
                ))}
            </div>
        </div>
    )
}