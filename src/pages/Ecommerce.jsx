import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, SparkLine, Button } from '../components';
import { earningData, SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

function Ecommerce() {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-black dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 w-full m-3 p-9 pt-9 bg-hero-pattern bg-no-repeat bg-center bg-cover">
          <div className="flex justify-between">
            <div>
              <p>
                Earnings
              </p>
              <p>
                $419944
              </p>
            </div>
          </div>
          <div className="mt-7">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-300 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.itemColour, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 hover:drop-shadow-xl p-4 rounded-full"
              >{item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  ${item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="items-center gap-2 text-gray-600 hover:drop-shadow-xl text-green-400">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-28 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-4">
              <div>
                <span className="text-3xl font-semibold">$1,45,048</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 ml-3 text-xs">22%</span>
                <p className="text-gray-400 mt-1">Budget</p>
              </div>
              <div className="mt-5">
                <span className="text-3xl font-semibold">$49,000</span>
                <p className="text-gray-400 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  id="line-sparkline"
                  type="Line"
                  width="250px"
                  height="80px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-6">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download report"
                  borderRadius="15px"
                  size="md"
                />
              </div>
            </div>
            <div>
              <Stacked
                width="300px"
                height="380px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
