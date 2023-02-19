import React, { useEffect } from 'react';
import { ReactDOM } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiArrowRight } from 'react-icons/hi';
import { RiArrowUpSFill } from 'react-icons/ri';
import BtnMenu from './small-components/BtnMenu';
import { useState, useRef } from 'react';
import {motion} from "framer-motion"
const IncomeDetails = (props) => {
  const [focused, setFocused] = useState(false);
  const [income, setIncome] = useState(0);
  const [dropdownState, setDropdownState] = useState(false);
  const [incomeFrequency, setIncomeFrequency] = useState('Monthly');
  const [incomeType, setIncomeType] = useState('');
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    props.incomeFrequency(incomeFrequency);
  }, [incomeFrequency]);
  useEffect(() => {
    setIncome(props.inputState);
  }, [props.inputState]);
  useEffect(() => {
    setIncomeType(props.typeState);
  }, [props.typeState]);
  useEffect(() => {
    setSideBar(props.sideBar);
  }, [props.sideBar]);
  let dropdownRef = useRef();
  let sideBarRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setDropdownState(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);
  return (
    <div className="income-details w-[100%] h-[70%] bg-mainOverlay rounded-[20px] flex items-center justify-center gap-5 flex-col">
      <div
        className="total-income w-[100%] h-[70px]  flex flex-col items-center justify-center gap-2 
      sm:h-[100px]"
      >
        <h3 className="text-white sm:text-2xl">What is your total income?</h3>

        <div
          className={`total-income--input w-[80%] h-[80%] flex bg-white items-center justify-between rounded-[20px] transition duration-500
                  ${focused && 'border-2 border-mainOrange'}
        `}
        >
          <div className="flex items-center w-[82%] gap-1 pl-2">
            <span className="text-[16px] sm:text-xl mt-[1px]">$</span>
            <input
              tabIndex="1"
              value={(income > 0) && income}
              className={`w-[100%] h-[100%] sm:text-xl outline-none
              placeholder:text-[16px]'
              `}
              inputMode="numeric"
              type="number"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="e.g 12,000"
              onChange={(e) => {
                setIncome(e.target.value);
                props.income(e.target.value);
              }}
            />
          </div>

          <div
            className={`btn-menu flex justify-center relative 
            md:w-[20%]
            `}
            ref={dropdownRef}
          >
            <button
              disabled={sideBar ? true : false}
              tabIndex="2"
              onClick={(e) => {
                !sideBar &&
                  !e.target.disabled &&
                  setDropdownState(!dropdownState);
              }}
              className={`flex items-center sm:text-xl
              ${sideBar && 'pointer-events-none'}
              `}
            >
              {incomeFrequency}
              <IoMdArrowDropdown />
            </button>

            <div
              className={`dropdown-menu
            `}
            >
              <div
                className={`dropdown-menu-box flex flex-col items-center justify-around transition-[0.45s] border border-slate-500
                 w-[100px] md:w-[150px]
                ${
                  dropdownState
                    ? 'h-[120px] sm:h-[150px] opacity-1'
                    : 'h-[20px] opacity-0'
                }
                `}
                style={{
                  opacity: dropdownState ? '1' : '0',
                  transition: '0.45s',
                }}
              >
                <button
                  disabled={sideBar}
                  className={`text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]
                  ${(sideBar || !dropdownState) && 'pointer-events-none'}
                `}
                  onClick={
                    !sideBar && dropdownState
                      ? () => setIncomeFrequency('Weekly')
                      : undefined
                  }
                  style={{
                    color: incomeFrequency === 'Weekly' && '#4ECF20',
                    transform: !dropdownState
                      ? 'translateX(-30px)'
                      : 'translateX(0)',
                    transition: '0.3s',
                    opacity: open ? '1' : '0',
                  }}
                >
                  Weekly
                </button>
                <button
                  className={`text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]
                  ${(sideBar || !dropdownState) && 'pointer-events-none'}
                  `}
                  onClick={
                    !sideBar && dropdownState
                      ? () => setIncomeFrequency('Fortnightly')
                      : undefined
                  }
                  style={{
                    color: incomeFrequency === 'Fortnightly' && '#4ECF20',
                    transform: !dropdownState
                      ? 'translateX(-30px)'
                      : 'translateX(0)',
                    transition: '0.3s',
                    transitionDelay: '0.2s',
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
                  onClick={
                    !sideBar && dropdownState
                      ? () => setIncomeFrequency('Monthly')
                      : undefined
                  }
                  style={{
                    color: incomeFrequency === 'Monthly' && '#4ECF20',
                    transform: !dropdownState
                      ? 'translateX(-30px)'
                      : 'translateX(0)',
                    transition: '0.3s',
                    transitionDelay: '0.3s',
                    opacity: open ? '1' : '0',
                  }}
                >
                  Monthly
                </button>
                <button
                  disabled={!sideBar && !dropdownState}
                  className={`text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]
                  ${(sideBar || !dropdownState) && 'pointer-events-none'}
                  `}
                  onClick={
                    !sideBar && dropdownState
                      ? () => setIncomeFrequency('Annually')
                      : undefined
                  }
                  style={{
                    color: incomeFrequency === 'Annually' && '#4ECF20',
                    transform: !dropdownState
                      ? 'translateX(-30px)'
                      : 'translateX(0)',
                    transition: '0.3s',
                    transitionDelay: '0.4s',
                    opacity: open ? '1' : '0',
                  }}
                >
                  Annually
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="income-type h-[40%] w-[80%] rounded-[20px] flex flex-col items-center justify-around bg-mainOverlay
      sm:justify-center sm:gap-5"
      >
        <h3 className="text-black sm:text-2xl">
          Please choose the income type
        </h3>

        <div
          className="income-type--buttons w-[100%] h-[55%] flex flex-col items-center gap-2
        sm:h-[45%] lg:h-[30%]
        lg:flex-row lg:w-[80%] lg:justify-center"
        >
          <button
            tabIndex="3"
            className="px-5 w-[80%] h-[100%] rounded-[15px] bg-white
           hover:bg-mainGreen hover:bg-opacity-[50%] focus:text-white 
           sm:text-xl
           lg:w-[40%] lg:h-[60%] lg:text-[1rem]"
            onClick={() => {
              setIncomeType('grossState');
              props.incomeType('grossState');
            }}
            style={{
              backgroundColor: incomeType === 'grossState' && '#4ECF20',
              color: incomeType === 'grossState' && 'white',
            }}
          >
            Gross Income
          </button>
          <button
            tabIndex="4"
            className="px-5 w-[80%] h-[100%] rounded-[15px] bg-white 
          hover:bg-mainGreen hover:bg-opacity-[50%] focus:text-white 
          sm:text-xl
          lg:w-[40%] lg:h-[60%] lg:text-[1rem]"
            onClick={() => {
              setIncomeType('netState');
              props.incomeType('netState');
            }}
            style={{
              backgroundColor: incomeType === 'netState' && '#4ECF20',
              color: incomeType === 'netState' && 'white',
            }}
          >
            Net Income
          </button>
        </div>
      </div>
      <button
        tabIndex="4"
        className="px-5 w-[80%] h-[10%] text-xl rounded-[15px] bg-white 
       hover:bg-mainGreen hover:text-white flex justify-center items-center gap-1
       sm:text-2xl
       lg:w-[25%]"
        disabled={incomeType === '' || income < 1 ? true : false}
        onClick={() => {
          props.mainComponent('incomeComponent');
          props.calculated(true);
        }}
      >
        <span>Calculate</span>
        <HiArrowRight />
      </button>
    </div>
  );
};

export default IncomeDetails;
