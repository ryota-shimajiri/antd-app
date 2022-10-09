import React from 'react';
import { Button, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import Typography from 'antd/lib/typography/Typography';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';

function App() {
  return (
    <div style={{margin: "50px"}}>
    <Typography>
    <Title>タイトル</Title>
    <Paragraph>
      こちらは段落です。
    </Paragraph>
      <Space>
        <DatePicker />
        <Button type="primary">ボタン</Button>
      </Space>
    </Typography>
    </div>
  );
}

export default App;
