import React from 'react'
import voucher1 from '../../assets/images/hubdeli_feature1.jpg'
import voucher2 from '../../assets/images/bakery_feature.jpg'
import voucher3 from '../../assets/images/skincare_feature-2.jpg'
import voucher4 from '../../assets/images/produce_feature-1.jpg'
import voucher5 from '../../assets/images/homeoffice_feature.jpg'
import './styles/promo.scss';

export default function Promo() {
    return (
      <div className='promo'>
        <div className='first-div-promo'>
            <img src={voucher1} alt='v1' width="100%"/>
            <img src={voucher2} alt='v2'width="100%" height="300px"/>

         </div>
        <div className='second-div-promo'>
            <div className='first-div'>
            <img src={voucher3} alt='v1'width="60%"/>
            <img src={voucher4} alt='v1'width="60%"/>
            </div>
                <img src={voucher1} alt='v1'width="700px" height="300px"/>
                <img src={voucher1} alt='v1'width="700px" height="300px"/>

        </div>
      </div>
    )
}

            // <div className='row' >
            //     <div className='column'>
            //     <img src={voucher1} />
                
            //     </div>
            //     <div className='column'>
            //     <img src={voucher2} />
                
            //     </div>
            //     <div className='column'>
            //     <img src={voucher3} />
            //     </div>
            // </div>