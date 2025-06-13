export default function StatsCard({ title, value, icon: Icon, trend, trendValue }) {
  const isTrendUp = trend === "up";

  return (
    <div className="rounded-lg border bg-white dark:bg-gray-900 p-4 shadow-sm">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        {Icon && <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />}
      </div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
      {trendValue && (
        <div className="flex items-center pt-1">
          <span
            className={`text-xs font-medium ${
              isTrendUp ? "text-emerald-500" : "text-rose-500"
            }`}
          >
            {isTrendUp ? "↑" : "↓"} {trendValue}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            from last month
          </span>
        </div>
      )}
    </div>
  );
}
