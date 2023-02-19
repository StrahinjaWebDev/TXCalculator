import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import {animate, motion} from "framer-motion"
const Income = ({ income, incomeType, incomeFrequency, sideIncomeBar }) => {
  
  const [sideBar, setSideBar] = useState(sideIncomeBar);
  const [dropdownState, setDropdownState] = useState(false);
  const [currentIncome, setCurrentIncome] = useState(income);
  const [currentIncomeType, setCurrentIncomeType] = useState(incomeType);
  const [currentIncomeFrequency, setCurrentIncomeFrequency] =
    useState(incomeFrequency);
  const [currentTax, setCurrentTax] = useState(0);
  let useIncome = currentIncome || 0;
  useEffect(() => {
    setSideBar(sideIncomeBar);
  }, [sideIncomeBar]);
  const taxCalculator = () => {
    const taxRules = [
      {
        minIncome: 0,
        maxIncome: 10275,
        rate: 0.1,
      },
      {
        minIncome: 10275,
        maxIncome: 41775,
        rate: 0.12,
      },
      {
        minIncome: 41775,
        maxIncome: 89075,
        rate: 0.22,
      },
      {
        minIncome: 89075,
        maxIncome: 170050,
        rate: 0.24,
      },
      {
        minIncome: 170050,
        maxIncome: 215950,
        rate: 0.32,
      },
      {
        minIncome: 215950,
        maxIncome: 539900,
        rate: 0.35,
      },
      {
        minIncome: 539900,
        maxIncome: Infinity,
        rate: 0.37,
      },
    ];

    let tax = 0;

    for (const k of taxRules) {
      const min = k.minIncome;
      const max = k.maxIncome;
      const taxRate = k.rate;

      const kIncome = Math.max(0, Math.min(max, useIncome) - min);

      tax += kIncome * taxRate;

      useIncome -= kIncome;

      if (useIncome <= 0) break;
    }

    setCurrentTax(tax);

  };
  useEffect(() => {
    taxCalculator();

  }, [currentIncome]);
  let dropdownRef = useRef();
  useEffect(() => {
    let handlerb = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setDropdownState(false);
      }
    };
    document.addEventListener('mousedown', handlerb);

    return () => {
      document.removeEventListener('mousedown', handlerb);
    };
  });
  return (
    <div 
    className="income-details w-[100%] h-[70%] bg-mainOverlay rounded-[20px] flex flex-col items-center justify-center gap-5">
      <div
        className="wrapper h-[10%]
      lg:h-[20%]
      md:w-[80%] md:flex lg:items-center lg:gap-2"
      >
        <div
          className="relative w-[100%] flex justify-center items-center gap-1
      sm:text-2xl
      md:h-[60%] md:p-5 md:bg-mainOrange md:rounded-[20px]"
        >
          <span>
            Your total {currentIncomeType === 'grossState' ? 'net' : 'gross'}
          </span>
          <div className="btn-menu flex items-center">
            <div
              ref={dropdownRef}
              className={`btn-wrapper relative
            ${sideBar && 'pointer-events-none'}
            `}
            >
              <button
                disabled={sideBar}
                onClick={() => {
                  setDropdownState(!dropdownState);
                }}
                className="flex items-center"
              >
                {currentIncomeFrequency}
                <IoMdArrowDropdown />
              </button>
              <div className={`dropdown-menu`}>
                <div
                  className={`dropdown-menu-box flex flex-col border border-slate-400 items-center justify-around
                  sm:h-[150px] w-[100px] md:w-[150px]
                  
                  `}
                  style={{
                    transition: '0.45s',
                    height: dropdownState ? '150px' : '20px',
                    opacity: dropdownState ? '1' : '0',
                  }}
                >
                  <button
                    disabled={sideBar}
                    className={`text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]
                   ${(sideBar || !dropdownState) && 'pointer-events-none'}`}
                    onClick={() => {
                      setCurrentIncomeFrequency('Weekly');
                    }}
                    style={{
                      color: currentIncomeFrequency === 'Weekly' && '#4ECF20',
                      transform: !dropdownState
                        ? 'translateX(-30px)'
                        : 'translateX(0)',
                      transition: '0.5s',
                      opacity: open ? '1' : '0',
                    }}
                  >
                    Weekly
                  </button>
                  <button
                    disabled={sideBar}
                    className={`text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]
                  ${(sideBar || !dropdownState) && 'pointer-events-none'}
                  `}
                    onClick={() => {
                      setCurrentIncomeFrequency('Fortnightly');
                    }}
                    style={{
                      color:
                        currentIncomeFrequency === 'Fortnightly' && '#4ECF20',
                      transform: !dropdownState
                        ? 'translateX(-30px)'
                        : 'translateX(0)',
                      transition: '0.7s',
                      opacity: open ? '1' : '0',
                    }}
                  >
                    Fortnightly
                  </button>
                  <button
                    disabled={sideBar}
                    className={`text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]
                  ${(sideBar || !dropdownState) && 'pointer-events-none'}
                  `}
                    onClick={() => {
                      setCurrentIncomeFrequency('Monthly');
                    }}
                    style={{
                      color: currentIncomeFrequency === 'Monthly' && '#4ECF20',
                      transform: !dropdownState
                        ? 'translateX(-30px)'
                        : 'translateX(0)',
                      transition: '0.8s',
                      opacity: open ? '1' : '0',
                    }}
                  >
                    Monthly
                  </button>
                  <button
                    disabled={sideBar}
                    className={`text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]
                  ${(sideBar || !dropdownState) && 'pointer-events-none'}
                  `}
                    onClick={() => {
                      setCurrentIncomeFrequency('Annually');
                    }}
                    style={{
                      color: currentIncomeFrequency === 'Annually' && '#4ECF20',
                      transform: !dropdownState
                        ? 'translateX(-30px)'
                        : 'translateX(0)',
                      transition: '0.9s',
                      opacity: open ? '1' : '0',
                    }}
                  >
                    Annually
                  </button>
                </div>
              </div>
            </div>
            <span>income</span>
          </div>
        </div>
        <div
          className="total-income h-[70%] bg-mainGreen text-black rounded-[20px] flex items-center justify-center
          md:h-[60%]
          lg:w-[50%] lg: p-5"
        >
          <span
            className="text-2xl
        sm:text-3xl"
          >
            {currentIncomeType === 'grossState' &&
            currentIncomeFrequency === 'Annually'
              ? `$${(currentIncome - currentTax).toFixed(0)}`
              : currentIncomeType === 'grossState' &&
                currentIncomeFrequency === 'Monthly'
              ? `$${((currentIncome - currentTax) / 12).toFixed(0)}`
              : currentIncomeType === 'grossState' &&
                currentIncomeFrequency === 'Fortnightly'
              ? `$${((currentIncome - currentTax) / 26).toFixed(0)}`
              : currentIncomeType === 'grossState' &&
                currentIncomeFrequency === 'Weekly'
              ? `$${((currentIncome - currentTax) / 52).toFixed(0)}`
              : currentIncomeType === 'netState' &&
                currentIncomeFrequency === 'Annually'
              ? `$${(currentIncome + currentTax).toFixed(0)}`
              : currentIncomeType === 'netState' &&
                currentIncomeFrequency === 'Monthly'
              ? `$${((currentIncome + currentTax) / 12).toFixed(0)}`
              : currentIncomeType === 'netState' &&
                currentIncomeFrequency === 'Fortnightly'
              ? `$${((currentIncome + currentTax) / 26).toFixed(0)}`
              : currentIncomeType === 'netState' &&
                currentIncomeFrequency === 'Weekly' &&
                `$${((currentIncome + currentTax) / 52).toFixed(0)}`}

            {/**`$${(currentIncome + currentTax).toFixed(0)}` */}
          </span>
        </div>
      </div>
      <div className="table-wrapper w-[80%] h-[40%] bg-white rounded-[20px]">
        <div
          className="tbl bg-white w-[170%] flex flex-col p-5 
      sm:justify-around sm:h-[100%] sm:text-xl
      2xl:w-[100%] 2xl:overflow-hidden 2xl:text-center"
        >
          <div className="tbl-head">
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Frequency</div>
                <div className="grid-col">Gross Income</div>
                <div className="grid-col">Tax</div>
                <div className="grid-col">Net Income</div>
              </div>
            </div>
          </div>
          <div className="tbl-body flex flex-col h-[100%] justify-around">
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Weekly</div>
                <div className="grid-col">
                  $
                  {currentIncomeType === 'grossState'
                    ? (currentIncome / 52).toFixed(0)
                    : (Number(currentIncome + currentTax) / 52).toFixed(0)}
                </div>
                <div className="grid-col">${(currentTax / 52).toFixed(0)}</div>
                <div className="grid-col">
                  $
                  {currentIncomeType === 'netState'
                    ? (currentIncome / 52).toFixed(0)
                    : (Number(currentIncome - currentTax) / 52).toFixed(0)}
                </div>
              </div>
            </div>
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Fortnightly</div>
                <div className="grid-col">
                  $
                  {currentIncomeType === 'grossState'
                    ? (currentIncome / 26).toFixed(0)
                    : (Number(currentIncome + currentTax) / 26).toFixed(0)}
                </div>
                <div className="grid-col">${(currentTax / 26).toFixed(0)}</div>{' '}
                <div className="grid-col">
                  $
                  {currentIncomeType === 'netState'
                    ? (currentIncome / 26).toFixed(0)
                    : (Number(currentIncome - currentTax) / 26).toFixed(0)}
                </div>
              </div>
            </div>
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Monthly</div>
                <div className="grid-col">
                  $
                  {currentIncomeType === 'grossState'
                    ? (currentIncome / 12).toFixed(0)
                    : (Number(currentIncome + currentTax) / 12).toFixed(0)}
                </div>
                <div className="grid-col">${(currentTax / 12).toFixed(0)}</div>{' '}
                <div className="grid-col">
                  $
                  {currentIncomeType === 'netState'
                    ? (currentIncome / 12).toFixed(0)
                    : (Number(currentIncome - currentTax) / 12).toFixed(0)}
                </div>
              </div>
            </div>
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Anually</div>
                <div className="grid-col">
                  $
                  {currentIncomeType === 'grossState'
                    ? currentIncome.toFixed(0)
                    : Number(currentIncome + currentTax).toFixed(0)}
                </div>
                <div className="grid-col">${currentTax.toFixed(0)}</div>{' '}
                <div className="grid-col">
                  {' '}
                  $
                  {currentIncomeType === 'netState'
                    ? currentIncome.toFixed(0)
                    : Number(currentIncome - currentTax).toFixed(0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="compare-lenders h-[20%] flex flex-col items-center gap-2">
        <h3 className="sm:text-2xl">Compare lenders and get your finance</h3>
        <button
          className="px-5 w-[60%] h-[40%] text-xl rounded-[15px] bg-mainGreen 
                   text-white font-bolder border border-white
                   sm:text-2xl"
        >
          Apply now
        </button>
      </div>
    </div>
  );
};

export default Income;
