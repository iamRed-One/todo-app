import { Check } from "lucide-react";
import desktopBgLight from "./assets/images/bg-desktop-light.jpg";
import { useDarkMode } from "./hooks/useDarkMode";
import { useState } from "react";
import CheckBox from "./components/CheckBox";
import TodoItem from "./components/TodoItem";

const App = () => {
  const { isDark, toggleTheme } = useDarkMode();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="container-2xl mx-0 w-screen px-0">
      <div className="relative">
        <header
          className={
            "mx-0 flex h-50 w-screen justify-between bg-center bg-no-repeat px-10 py-10 transition-all delay-100 duration-150 sm:bg-[url(./assets/images/bg-mobile-light.jpg)] md:bg-[url(./assets/images/bg-desktop-light.jpg)] sm:dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)]"
          }
        >
          <div className="logo text-md font-family-sans text-2xl font-[700] tracking-widest text-white">
            TODO
          </div>
          <button className="h-0 cursor-pointer border-0" onClick={toggleTheme}>
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                />
              </svg>
            )}
          </button>
        </header>
        <section className="absolute top-[110px] w-full space-y-4 px-10">
          <div className="dark:bg-navy-900 flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-4 shadow-2xl transition-all delay-100 duration-150">
            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
            <input
              type="text"
              id="createTodo"
              placeholder="Create a new todo..."
              className="font-family-sans text-navy-850 h-full w-full rounded-md px-1 py-0 text-sm tracking-wide outline-0 dark:text-gray-600"
            />
          </div>

          {/* Todos Section */}
          <div className="dark:bg-navy-900 dark:divide-navy-850 divide-y-1 divide-gray-300 rounded-lg bg-gray-50 shadow-2xl transition-all delay-100 duration-150">
            <TodoItem isChecked={isChecked} setIsChecked={setIsChecked} />
            <TodoItem isChecked={isChecked} setIsChecked={setIsChecked} />
            <TodoItem isChecked={isChecked} setIsChecked={setIsChecked} />
            <TodoItem isChecked={isChecked} setIsChecked={setIsChecked} />

            <div className="font-family-sans flex items-center justify-between px-4 py-4.5 text-sm text-gray-600 dark:text-gray-600">
              <span>5 items left</span>
              <span className="cursor-pointer text-gray-600 dark:text-gray-600">
                Clear Completed
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="font-family-sans flex items-center justify-evenly bg-gray-50 px-4 py-4.5 text-sm text-gray-600 shadow-lg dark:text-gray-600">
            <button className="cursor-pointer">All</button>
            <button className="cursor-pointer">Active</button>
            <button className="cursor-pointer">Completed</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
