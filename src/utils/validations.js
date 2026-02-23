export const emailValidation = {
              required: "請輸入Email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email 格式不正確",
              },
            }