var React = require("react");
import { Row, Col } from 'antd';
export default class PCFooter extends React.Component {
  constructor(){
  	super();
  }
  render() {
    return (
		    <div className="footer">
		    	<Row>
		    	      <Col span={2}></Col>
		    	      <Col span={20}>
		    	      	   <h2>Copyright © 2017</h2>
		    	      </Col>
		    	      <Col span={2}></Col>
		    	</Row>
		    </div>
    	) 
  }
}