import React from 'react';

const BtnMenu = () => {
  return (
    <div className="btn-menu flex items-center relative">
      <button
        onClick={() => {
          setDropdownState(!dropdownState);
        }}
        className="flex items-center"
      >
        {incomeFrequency}
        <IoMdArrowDropdown />
      </button>

      <div className="dropdown-menu">
        <div
          className="dropdown-menu-box flex flex-col items-center justify-around"
          style={{
            display: dropdownState ? 'flex' : 'none',
          }}
        >
          <button
            className="text-sm"
            onClick={() => {
              setIncomeFrequency('Weekly');
            }}
            style={{
              color: incomeFrequency === 'Weekly' && '#4ECF20',
            }}
          >
            Weekly
          </button>
          <button
            className="text-sm"
            onClick={() => {
              setIncomeFrequency('Fortnightly');
            }}
            style={{
              color: incomeFrequency === 'Fortnightly' && '#4ECF20',
            }}
          >
            Fortnightly
          </button>
          <button
            className="text-sm"
            onClick={() => {
              setIncomeFrequency('Monthly');
            }}
            style={{
              color: incomeFrequency === 'Monthly' && '#4ECF20',
            }}
          >
            Monthly
          </button>
          <button
            className="text-sm"
            onClick={() => {
              setIncomeFrequency('Annually');
            }}
            style={{
              color: incomeFrequency === 'Annually' && '#4ECF20',
            }}
          >
            Annually
          </button>
        </div>
      </div>
    </div>
  );
};

export default BtnMenu;
