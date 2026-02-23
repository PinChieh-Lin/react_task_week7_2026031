// import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { emailValidation } from "../utils/validations";
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

// function Login({ setIsAuth, getProducts }) {
function Login() {
    const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   username: "p55482301@yahoo.com.tw",
  //   password: "dingdong",
  // });

  const {
    register, handleSubmit, formState: { errors, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "p55482301@yahoo.com.tw",
      password: "dingdong",
    }
  })

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   // console.log(name, value); //檢查輸入的欄位名稱與值
  //   setFormData((preData) => ({
  //     ...preData,//解構先前的資料
  //     [name]: value,//動態設定欄位名稱與值
  //   }));
  // }


  const onSubmit = async (formData) => {
    try {
      // e.preventDefault();
      const response = await axios.post(`${API_BASE}/admin/signin`, formData);
      // console.log(response.data);
    const { token, expired } = response.data;
      // document.cookie = `hexToken=${token};expires=${new Date(expired)};`;  
       setTimeout(() => {
      document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
    }, 0);

      // getProducts();
      // setIsAuth(true);
            navigate('/products');  // 新增：登入成功後導航到產品頁面

    } catch (err) {
      // setIsAuth(false);
      console.log(err.response);
      //印出錯誤訊息
      alert(err.response?.data?.message || "登入失敗");
    }
  }
  return (
    <div className="container login">
      <h1>請先登入</h1>
      {/* <form className="form-floating" onSubmit={(e) => onSubmit(e)}> */}
      <form className="form-floating" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" name="username" placeholder="name@example.com"
            {...register("username", emailValidation)}
          // value={formData.username}
          // onChange={(e) => handleInputChange(e)} 
          />
          <label htmlFor="username">Email address</label>
          {errors.username && <p className="text-danger">{errors.username.message}</p>}
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" name="password" placeholder="Password"
            // value={formData.password}
            // onChange={(e) => handleInputChange(e)} 
            {...register("password", {
              required: "請輸入密碼",
              minLength: {
                value: 6,
                message: "密碼長度至少需 6 碼",
              },
            })}
          />
          <label htmlFor="password">Password</label>
          {errors.password && <p className="text-danger">{errors.password.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-2" disabled = {!isValid}>登入</button>
      </form>
    </div>
  )
} export default Login;