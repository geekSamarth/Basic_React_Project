import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import App from "./App.css";
function Form() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is required!"),
    Email: yup.string().email().required(),
    Age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password do not match!")
      .required(),
  });
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver:yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder="Email" {...register("Email")} />
        <p>{errors.Email?.message}</p>
        <input type="text" placeholder="Age" {...register("Age")} />
        <p>{errors.Age?.message}</p>
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
       <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit" placeholder="Submit" />
      </form>
    </div>
  );
}

export default Form;
