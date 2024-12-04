import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

const icons = [
  {
    id: 0,
    icon: UserIcon,
    iconBackground: "bg-gray-400",
    status: "started",
  },
  {
    id: 1,
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
    status: "in",
  },
  {
    id: 2,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
    status: "completed",
  },
];

const timeline = [
  {
    id: 0,
    content: "Order Placed",
    target: "Check here",
    to: "#",
    date: "June 24",
    datetime: "2024-09-20",
    status: "started",
  },
  {
    id: 1,
    content: "Order Confirmed",
    target: "Check here",

    to: "#",
    date: "June 24",
    datetime: "2024-09-20",
    status: "started",
  },
  {
    id: 2,
    content: "Shipped",
    target: "Check here",

    to: "#",
    date: "June 24",
    datetime: "2020-09-22",
    status: "in",
  },
  // {
  //   id: 3,
  //   content: "Out for delivery",
  //   target: "Check here",

  //   to: "#",
  //   date: "Sep 28",
  //   datetime: "2020-09-28",
  //   status: "completed",
  // },
  // {
  //   id: 4,
  //   content: "Delivered",
  //   target: "Bethany Blake",
  //   to: "#",
  //   date: "Sep 30",
  //   datetime: "2020-09-30",
  //   status: "in",
  // },
  // {
  //   id: 5,
  //   content: "Delivered by",
  //   target: "Tom Cook",
  //   to: "#",
  //   date: "Oct 4",
  //   datetime: "2020-10-04",
  //   status: "completed",
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProgressBar() {
  const handleReturnOrder = () => {
    alert("Returning order...");
    // Logic to handle returning order
  };

  const handleCancelOrder = () => {
    alert("Cancelling order...");
    // Logic to handle cancelling order
  };

  return (
    <div className="mx-auto flow-root bg-white max-w-3xl">
      <h2 className="text-xl mb-6 text-[#444444] text-center font-bold">
        Tracking Order:
      </h2>
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 && (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      icons.find((icon) => icon.status === event.status)
                        ?.iconBackground,
                      "flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white"
                    )}
                  >
                    {icons.map((icon) => {
                      if (icon.status === event.status) {
                        const IconComponent = icon.icon;
                        return (
                          <IconComponent
                            key={event.id}
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        );
                      }
                      return null;
                    })}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{" "}
                      <Link
                        to={event.to}
                        className="font-medium text-gray-900"
                      >
                        {event.target}
                      </Link>
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handleReturnOrder}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Return Order
        </button>
        <button
          type="button"
          onClick={handleCancelOrder}
          className="inline-flex items-center ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
}
