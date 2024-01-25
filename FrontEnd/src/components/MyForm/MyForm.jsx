import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const MyForm = () => {
    const [formMsg, setFormMsg] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
        setFormMsg(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setFormMsg(true);
    };

    return (
        <Form
            name="MyForm"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            scrollToFirstError={true}
        >
            <div className="border-b-2 border-b-[#ff7e00]">
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Name is required!',
                        },
                    ]}
                >
                    <Input
                        placeholder="Name*"
                        className="text-lg bg-gray-100 border-none hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:border-none"
                    />
                </Form.Item>
            </div>

            <div className="border-b-2 border-b-[#ff7e00]">
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Email is required!',
                        },
                    ]}
                >
                    <Input
                        placeholder="Email*"
                        className="text-lg bg-gray-100 border-none hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:border-none mt-5"
                    />
                </Form.Item>
            </div>

            <div className="border-b-2 border-b-[#ff7e00]">
                <Form.Item
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: 'Message cannot be Empty!',
                        },
                    ]}
                >
                    <textarea
                        placeholder="Message*"
                        className="text-lg w-full h-44 bg-gray-100 focus:outline-none px-3 mt-5"
                    />
                </Form.Item>
            </div>
            <p className="text-[#999] py-4">*required field</p>
            <Form.Item>
                <Button
                    htmlType="submit"
                    className="bg-[#ff7e00] text-white mt-10 text-2xl px-8 py-6 flex items-center justify-center hover:bg-black hover:text-white"
                >
                    Send Message
                </Button>
            </Form.Item>
            {formMsg && (
                <p className="text-xl text-[#dc3545] uppercase font-semibold text-center py-4">
                    Did you fill in the form properly?
                </p>
            )}
        </Form>
    );
};

export default MyForm;
