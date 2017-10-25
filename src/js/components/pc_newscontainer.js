import React from 'react';
import PCNewsBlock from './pc_news_block.js';
import PCNewsImgBlock from './pc_news_img_block.js';
import PCProduct from './pc_product.js';
import PCNewsImageBlock from './pc_news_img_block.js';
import {Row, Col} from 'antd';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component {
  render() {
  	const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    return (
		    <div>
		  		<Row>
		  		   <Col span={2}></Col>
		  		   <Col span={20} class="container">
		  		   		<div class="leftContainer">
						    <div class="carousel">
						    	<Carousel {...settings}>
						    		<div><img src="/src/img/carousel_1.jpg" alt="" /></div>
						    		<div><img src="/src/img/carousel_2.jpg" alt="" /></div>
						    		<div><img src="/src/img/carousel_3.jpg" alt="" /></div>
						    		<div><img src="/src/img/carousel_4.jpg" alt="" /></div>
						    	</Carousel>
						    </div>
							<PCNewsImgBlock count={6} type="guoji" width="400px" bordered="true" cardTitle="国际头条" imageWidth="112px"></PCNewsImgBlock>
						</div>
						<Tabs defaultActiveKey="1" class="tabs_news">
						    <TabPane tab="头条新闻" key="1">
						    	<PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
						    </TabPane>
						    <TabPane tab="娱乐新闻" key="2">
						    	<PCNewsBlock count={22} type="yule" width="100%" bordered="false"></PCNewsBlock>
						    </TabPane>							   
						  </Tabs>
						  <Tabs class="tabs_product">
							<TabPane tab="ReactNews 产品1" key="1">
								<PCProduct/>
							</TabPane>
						</Tabs>
						  <div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px" border="false" cardTitle="国内新闻"/>
							<PCNewsImageBlock count={8} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px" border="false" cardTitle="娱乐新闻"/>
						</div>						 
		  		   </Col>
		  		   <Col span={2}></Col>
		  		</Row>
		    </div>
    	) 
  }
}