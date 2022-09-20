import { Form, Input, Card, DatePicker, Row, InputNumber  } from "antd";
import "antd/dist/antd.css"
import "./App.css"

function App() {
  const [form] = Form.useForm();
  const config = {
    rules: [
        {
            required: true,
            message: "cannot be empty"
        },
    ],
};


  return (
    <div className="App">
      <Card
        style={{fontSize: '18px',
         height: 550,
         width:550,
         borderRadius: '8px',
         marginRight: 8,
         marginTop: 30,
         boxShadow: '4px 4px 10px #f3f3f3',
         backgroundColor: ''
         }}
        hoverable={true}>
            
        <Form form={form} layout='vertical'
        style={{
          marginTop: 20,
        }}>

            <Row style={{display: 'flex', justifyContent:'space-between'}}>
                    <Form.Item key={1} name="external_no" style={{width: 185}} label="External no." {...config}>
                          <InputNumber style={{width: 185}}/>
                    </Form.Item>

                    <Form.Item key={2} name="payment mode" style={{width: 185}} label="Payment mode" {...config}>
                        <Input/>
                    </Form.Item>
            </Row>


            <Row style={{display: 'flex', justifyContent:'space-between'}}>
                    <Form.Item key={3} name="patient_type" style={{width: 185}} label="Patient type" {...config}>
                        <Input/>
                    </Form.Item>
                    
                    <Form.Item key={4} name='service' style={{width: 185}} label="Service" {...config}>
                        <Input/>
                    </Form.Item>
            </Row>


            <Row style={{display: 'hospital', justifyContent:'space-between'}}>
                    <Form.Item key={5} name="hospital_cost" style={{width: 185}} label="Hospital cost" {...config}>
                        <InputNumber style={{width: 185}}/>
                    </Form.Item>


                    <Form.Item key={6} name="external_cost" label="External cost" {...config} style={{width: 185}}>
                        <InputNumber style={{width: 185}}/>
                    </Form.Item>
            </Row>


            <Row style={{display: 'flex', justifyContent:'space-between'}}>
                    <Form.Item key={7} name="notes" style={{width: 185}} label="notes" {...config}>
                        <Input/>
                    </Form.Item>

                    
                    <Form.Item key={8} name='request_department' style={{width: 185}} label="Request department" {...config}>
                         <Input style={{color:"blue"}}/>
                    </Form.Item>
            </Row>


            <Row style={{display: 'flex', justifyContent:'space-between'}}>
                    <Form.Item key={7} name="input_date" style={{width: 185}} label="Input date" {...config}>
                        <DatePicker style={{width: 185}}/>
                    </Form.Item>

                    <Form.Item key={7} name="user_date" style={{width: 185}} label="User date" {...config}>
                        <DatePicker style={{width: 185}}/>
                    </Form.Item>
            </Row>
            
            
        </Form>
        
        </Card>
    </div>
  );
}

export default App;
