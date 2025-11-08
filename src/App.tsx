import DashboardLayout from "./components/layout/dashboard-layout";

function App() {
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back! Here's the overview.
            </p>
          </div>
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md">
            New Project
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            {
              label: "Total Revenue",
              value: "$45,231",
              change: "+20.1%",
              icon: "",
              color: "green",
            },
            {
              label: "Users",
              value: "12,234",
              change: "+18%",
              icon: "",
              color: "blue",
            },
            {
              label: "Orders",
              value: "1,234",
              change: "+12%",
              icon: "",
              color: "purple",
            },
            {
              label: "Conversion",
              value: "3.2%",
              change: "+2.1%",
              icon: "",
              color: "orange",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 lg:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`p-3 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg`}
                >
                  <span
                    className={`text-${stat.color}-600 dark:text-${stat.color}-400 text-lg`}
                  >
                    {stat.icon}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Charts & Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 lg:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {[
                {
                  user: "John Doe",
                  action: "created new project",
                  time: "2 min ago",
                },
                {
                  user: "Sarah Smith",
                  action: "updated settings",
                  time: "1 hour ago",
                },
                {
                  user: "Mike Johnson",
                  action: "completed task",
                  time: "3 hours ago",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                      {item.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {item.user}{" "}
                      <span className="font-normal text-gray-600 dark:text-gray-400">
                        {item.action}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 lg:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Performance
            </h3>
            <div className="space-y-5">
              {[
                {
                  label: "Server uptime",
                  value: "99.9%",
                  percent: 99.9,
                  color: "green",
                },
                {
                  label: "Storage usage",
                  value: "75%",
                  percent: 75,
                  color: "blue",
                },
                {
                  label: "Memory usage",
                  value: "60%",
                  percent: 60,
                  color: "purple",
                },
              ].map((metric, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {metric.label}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {metric.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`bg-${metric.color}-500 h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${metric.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
