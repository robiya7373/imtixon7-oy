import {
  PlusOutlined,
  GoogleOutlined,
  FacebookFilled,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const Modal = ({ onCancel }) => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div
      className="fixed inset-0 w-full h-screen z-[9999] bg-[#0009] flex justify-center items-center"
      onClick={() => onCancel()}
    >
      <div
        className="modal flex gap-x-[100px] bg-white p-[20px] rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 p-[2px] bg-transparent text-[#46a358] border-none text-[22px] transform rotate-45"
          onClick={() => onCancel()}
        >
          <PlusOutlined />
        </button>
        <div className="py-[55px] px-[100px]">
          <div className="flex justify-center items-center gap-[10px] mb-[20px]">
            <Link to={"/"}>
              <button className="text-[#46a358] font-maven-pro text-[20px] font-medium leading-[16px] border-none bg-transparent cursor-pointer">
                Login
              </button>
            </Link>
            <p>|</p>
            <Link to={"/"}>
              <button className="text-[#3d3d3d] font-maven-pro text-[20px] font-medium leading-[16px] border-none bg-transparent cursor-pointer">
                Register
              </button>
            </Link>
          </div>
          <p className="text-center my-[23px] font-maven-pro text-[13px] text-[#3d3d3d] font-normal leading-[16px]">
            Enter your username and password to login.
          </p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="my-[27px] mx-auto mb-[16px] w-full rounded-lg border-none bg-[#46a358] text-white font-maven-pro text-[16px] font-bold leading-[16px] border border-[#46a358] transition duration-500 hover:bg-[#fff] hover:text-[#46a358]"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div className="login relative">
            <p className="mx-auto text-[#3d3d3d] font-maven-pro text-[13px] font-normal leading-[16px] px-[10px] z-10 bg-white max-w-max">
              Or login with
            </p>
          </div>
          <div className="flex flex-col gap-y-[15px] my-[27px] mx-auto mb-[38px]">
            <button className="flex gap-[10px] justify-center items-center py-[10px] px-0 text-[#46a358] bg-white border border-[#eaeaea] rounded-lg font-maven-pro font-medium leading-[16px] text-[13px] transition duration-500 hover:bg-[#46a358] hover:text-white google">
              <GoogleOutlined />
              <p className="social__btn__text">Login with Google</p>
            </button>
            <button className="flex gap-[10px] justify-center items-center py-[10px] px-0 text-[#46a358] bg-white border border-[#eaeaea] rounded-lg font-maven-pro font-medium leading-[16px] text-[13px] transition duration-500 hover:bg-[#46a358] hover:text-white facebook">
              <FacebookFilled />
              <p className="social__btn__text">Login with Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
