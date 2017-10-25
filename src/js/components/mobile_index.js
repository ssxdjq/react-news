var React = require("react");
import MobileHeader from "./mobile_header.js";
import MobileFooter from "./mobile_footer.js";
import { Tabs,Carousel } from 'antd';
const TabPane = Tabs.TabPane;
import MobileList from "./mobile_list.js";
export default class MobileIndex extends React.Component {
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
		    	<MobileHeader></MobileHeader>
		    	<Tabs defaultActiveKey="1" >
		    	   <TabPane tab="头条" key="1">
		    	   		<div class="carousel">
					    	<Carousel {...settings}>
					    		<div><img src="/src/img/carousel_1.jpg" alt="" /></div>
					    		<div><img src="/src/img/carousel_2.jpg" alt="" /></div>
					    		<div><img src="/src/img/carousel_3.jpg" alt="" /></div>
					    		<div><img src="/src/img/carousel_4.jpg" alt="" /></div>
					    	</Carousel>
					    </div>
		    	   	   <MobileList count={20} type="top"></MobileList>	
		    	   </TabPane>
		    	   <TabPane tab="社会" key="2">
		    	       <MobileList count={20} type="shehui"></MobileList>
		    	   </TabPane>
		    	   <TabPane tab="国内" key="3">
		    	       <MobileList count={20} type="guonei"></MobileList>
		    	   </TabPane>
		    	   <TabPane tab="国际" key="4">
		    	       <MobileList count={20} type="guoji"></MobileList>
		    	   </TabPane>
		    	   <TabPane tab="娱乐" key="5">
		    	       <MobileList count={20} type="yule"></MobileList>
		    	   </TabPane>
		    	 </Tabs>
				
		    	<MobileFooter></MobileFooter>
		    </div>
    	) 
  }
}