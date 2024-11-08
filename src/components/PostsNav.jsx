import { IoNewspaperOutline, IoVideocamOutline } from "react-icons/io5";
import { BsPlayBtn } from "react-icons/bs";
import { ImFilePicture } from "react-icons/im";
import { SlPicture } from "react-icons/sl";

const tabs = [
  { name: 'Posts', href: '#', icon: IoNewspaperOutline, id: 'posts' },
  { name: 'Videos', href: '#', icon: BsPlayBtn, id: 'videos' },
  { name: 'Pictures', href: '#', icon: SlPicture, id: 'pictures' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PostsNav({ currentTab, onTabChange }) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          value={currentTab}
          onChange={(e) => onTabChange(e.target.value)}
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.id}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior  
                  onTabChange(tab.id);
                }}
                aria-current={currentTab === tab.id ? 'page' : undefined}
                className={classNames(
                  currentTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium',
                )}
              >
                <tab.icon
                  aria-hidden="true"
                  className={classNames(
                    currentTab === tab.id ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-0.5 mr-2 h-5 w-5',
                  )}
                />
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}