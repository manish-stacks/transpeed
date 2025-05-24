export default function RecentActivity({ activities }) {
  return (
    <div className="col-span-1 lg:col-span-2 border rounded-lg bg-white dark:bg-gray-900 shadow-sm p-4">
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Recent Activity
      </h2>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            <div className="h-9 w-9 mr-3 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-white">
              {activity.userAvatar ? (
                <img
                  src={activity.userAvatar}
                  alt={activity.user}
                  className="h-full w-full object-cover"
                />
              ) : (
                activity.user.substring(0, 2).toUpperCase()
              )}
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-800 dark:text-gray-100 leading-none">
                <span className="font-medium">{activity.user}</span>
                <span className="text-gray-500 dark:text-gray-400"> {activity.action}</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
