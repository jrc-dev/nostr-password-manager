import {
  CheckIcon,
  EllipsisHorizontalIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import { Virtuoso } from "react-virtuoso";

const timeline = [
  {
    content: "Encryption",
    datetime: "2020-09-20",
    state: 0,
  },
  {
    content: "Connect to relay",
    datetime: "2020-09-20",
    state: 1,
  },
  {
    content: "Vault, items, menu and roadmap",
    datetime: "2020-09-20",
    state: 2,
  },
  {
    content: "Hello World",
    datetime: "2023-08-05",
    state: 2,
  },
];

export default function FAQView() {
  function rowRenderer({ index, item }: { index: number; item: any }) {
    return <RoadmapItem key={index} index={index} item={item} />;
  }

  return (
    <div className="w-full h-full p-2 space-y-2">
      <ul className="h-full">
        <Virtuoso
          style={{ height: "100%" }}
          data={timeline}
          itemContent={(index, item) => rowRenderer({ index, item })}
        />
      </ul>
    </div>
  );
}

function RoadmapItem({ index, item }: { index: number; item: any }) {
  return (
    <li>
      <div className="relative pb-8">
        {index !== timeline.length - 1 ? (
          <span
            className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        ) : null}
        <div className="relative flex space-x-3">
          <div>
            <span
              className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                item.state === 2
                  ? "bg-primary"
                  : item.state === 1
                  ? "bg-brand-2"
                  : "bg-gray-400"
              }`}
            >
              {item.state === 0 && (
                <EllipsisHorizontalIcon className="h-5 w-5 text-white" />
              )}
              {item.state === 1 && (
                <WrenchIcon className="h-5 w-5 text-white" />
              )}
              {item.state === 2 && <CheckIcon className="h-5 w-5 text-white" />}
            </span>
          </div>
          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
            <div>
              <p className="text-sm text-gray-500">{item.content}</p>
            </div>
            <div className="whitespace-nowrap text-right text-sm text-gray-500">
              <time dateTime={item.datetime}>{item.datetime}</time>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
