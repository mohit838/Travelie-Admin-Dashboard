import DashboardLayout from "./components/layout/dashboard-layout";

function App() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-4 lg:p-6">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
              Dashboard
            </h1>
            <p className="dark:text -gray-400 mt-1 text-gray-600">
              Welcome back! Here's the overview.
            </p>
          </div>
          <button className="w-full rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md sm:w-auto">
            New Project
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md lg:p-6 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xl font-bold text-gray-900 lg:text-2xl dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg`}>
                  <span className={`text-${stat.color}-600 dark:text-${stat.color}-400 text-lg`}>
                    {stat.icon}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Charts & Tables Section */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Recent Activity */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
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
                  className="flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {item.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      {item.user}{" "}
                      <span className="font-normal text-gray-600 dark:text-gray-400">
                        {item.action}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
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
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-gray-600 dark:text-gray-400">
                      {metric.label}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {metric.value}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
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
