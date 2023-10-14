import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import NorthIcon from '@mui/icons-material/North';
import Side from './Side';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Regular', 'Weakely', 'Monthly', 'Yearly', 'Loged IN', 'Signed UP'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192 )',
        'rgba(153, 102, 255 )',
        'rgba(255, 159, 64 )',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



const Maincontainer = () => {
  return (
    <div className='maincontainer'>
    <div className='mainheading'>
    <h1>Hello Siddhant</h1>
    <div mainheading><input type="text" placeholder='search' /><SearchIcon className='search'/> </div>
    </div>
    <div className='boxcontainer'>
        <div className='box'>
            <div className='insidebox'>
                <div className='circle'>
                    <CurrencyExchangeIcon className='icon'/>
                </div>
                <div className='content'>
                    <h4>Earning</h4>
                    <h5>$306</h5>
                    <p><NorthIcon/> 45% this month</p>
                </div>
            </div>
        </div>
        <div className='box'>
            <div className='insidebox'>
                <div className='circle'>
                    <CollectionsBookmarkIcon className='icon'/>
                </div>
                <div className='content'>
                    <h4>Earning</h4>
                    <h5>$456</h5>
                    <p><NorthIcon/> 20% this month</p>
                </div>
            </div>
        </div>
        <div className='box'>
            <div className='insidebox'>
                <div className='circle'>
                    <BusinessCenterIcon className='icon'/>
                </div>
                <div className='content'>
                    <h4>Earning</h4>
                    <h5>$546</h5>
                    <p><NorthIcon/>30% this month</p>
                </div>
            </div>
        </div>
        <div className='box'>
            <div className='insidebox'>
                <div className='circle'>
                    <AccountBalanceIcon className='icon'/>
                </div>
                <div className='content'>
                    <h4>Earning</h4>
                    <h5>$1996</h5>
                    <p><NorthIcon/>5% this month</p>
                </div>
            </div>
        </div>
        
    </div>
    <div className="barcontainer">
        <div className="vertical">
            <div className='areabox'>
            <div className='areaheading'>
                <h3>Overview</h3>
                <h3>Quarterly</h3>
            </div>
            <h4>Monthely Earning</h4>
            <div className='bars'>
                <div className="b1 b"></div>
                <div className="b2 b"></div>
                <div className="b3 b"></div>
                <div className="b4 b"></div>
                <div className="b5 b"></div>
                <div className="b6 b"></div>
                <div className="b7 b"></div>
                <div className="b8 b"></div>
                <div className="b9 b"></div>
                <div className="b10 b"></div>
                <div className="b11 b"></div>
                <div className="b12 b"></div>
                
            </div>
            </div>
        </div>
        <div className="piecharts">
        <h2>Coustermer</h2>
        <h4>coustermer that buys products </h4>
        <Doughnut style={{width:'100px'}} data={data} />
        <span>
            36% NC
        </span>
        
        </div>
    </div>
    <div className='v'>
    <div className="product">
        <h1>Product Sell</h1>
        <input type="text" placeholder='check product'/>
    </div>
    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptatum?</h3>

    </div>
    </div>
  )
}

export default Maincontainer