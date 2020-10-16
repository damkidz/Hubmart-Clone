import React from 'react'
import voucher1 from '../../assets/images/voucher1.gif'
import voucher2 from '../../assets/images/voucher2.jpg'
import voucher3 from '../../assets/images/voucher3.jpg'
import './styles/promo.css';

export default function Promo() {
    return (
            <div className='row' >
                <div className='column'>
                <img src={voucher1} />
                
                </div>
                <div className='column'>
                <img src={voucher2} />
                
                </div>
                <div className='column'>
                <img src={voucher3} />
                </div>
            </div>
    )
}
