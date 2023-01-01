import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {
        return (
            <div className='section section-about'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='header-title'>Truyền thông nói về Bookingcare</span>
                    </div>
                    <div className='section-body'>
                        <div className='section-child section-about'>
                            <div className='left-cus'>
                                <iframe width="100%" height="280" src="https://www.youtube.com/embed/FyDQljKtWnI" title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className='right-cus'>
                                <ul>
                                    <li><a title='Báo sức khỏe đời sống nói về BookingCare' target='_blank' href='https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm'>
                                        <i className="about-news suckhoedoisong"></i>
                                    </a>
                                    </li>
                                    <li><a title='VTV1 - Cà phê khởi nghiệp 14-11-2018' target='_blank' href='https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm'>
                                        <i className="about-news vtv1"></i>
                                    </a>
                                    </li>
                                    <li><a title='Báo điện tử ictnews giới thiệu BookingCare' target='_blank' href='https://ictnews.vietnamnet.vn/kinh-doanh/doanh-nghiep/startup-bookingcare-chinh-thuc-ra-mat-phien-ban-di-dong-cua-nen-tang-ho-tro-dat-lich-kham-online-173512.ict'>
                                        <i className="about-news ictnews"></i>
                                    </a>
                                    </li>
                                    <li><a title='VnExpress nói về BookingCare' target='_blank' href='https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html'>
                                        <i className="about-news vnexpress"></i>
                                    </a>
                                    </li>
                                    <li><a title='VTC News nói về BookingCare' target='_blank' href='https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html'>
                                        <i className="about-news vtcnews"></i>
                                    </a>
                                    </li>
                                    <li><a title='Cục công nghệ thông tin - Bộ Y tế nói về BookingCare' target='_blank' href='https://ehealth.gov.vn/?action=News&newsId=46094'>
                                        <i className="about-news cnntbyt"></i>
                                    </a>
                                    </li>
                                    <li><a title='Báo điện tử infonet nói về BookingCare' target='_blank' href='https://infonet.vietnamnet.vn/da-co-hon-20000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html'>
                                        <i className="about-news infonet"></i>
                                    </a>
                                    </li>
                                    <li><a title='VTV1 - Cà phê khởi nghiệp 16-08-2018' target='_blank' href='https://vtv.vn/video/ca-phe-khoi-nghiep-16-8-2018-317687.htm'>
                                        <i className="about-news vtv1"></i>
                                    </a>
                                    </li>
                                    <li><a title='VTC Go nói về BookingCare' target='_blank' href='https://www.youtube.com/watch?v=mstAc81lpMc'>
                                        <i className="about-news vtcgo"></i>
                                    </a>
                                    </li>
                                    <li><a title='VTV1 - Cà phê khởi nghiệp 21-02-2018' target='_blank' href='https://vtv.vn/video/ca-phe-khoi-nghiep-21-02-2018-282723.htm'>
                                        <i className="about-news vtv1"></i>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
