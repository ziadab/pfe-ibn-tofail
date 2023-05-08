import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { createUser } from "@/actions/user";
import { Button } from "@chakra-ui/react";

export const RegisterForm = ({}: RegisterFormProps) => {
  const { register, handleSubmit, setValue } = useForm<UserData>();

  const mutation = useMutation(createUser);

  const onSubmit: SubmitHandler<UserData> = (data) => mutation.mutate(data);

  if (mutation.isSuccess) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h3>You&#39;re registeration has been saved</h3>
      </div>
    );
  }

  return (
    <form
      className="w-full h-full overflow-y-scroll p-10 flex flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-lg font-normal">Scholar Year 2023/2024</h2>
      <h1 className="text-4xl tracking-wider uppercase mt-2 font-semibold text-center">
        Registeration is <span className="text-primary">OPEN!</span>
      </h1>

      <div className="flex md:w-4/6 justify-between mt-8">
        <label className="w-full mr-4">
          <span className="text-gray-700">First name</span>
          <input
            type="text"
            className=" 
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
            placeholder=""
            {...register("first_name", { required: true })}
          />
        </label>
        <label className="w-full">
          <span className="text-gray-700">Last name</span>
          <input
            type="text"
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
            {...register("last_name", { required: true })}
            placeholder=""
          />
        </label>
      </div>

      <div className="flex md:w-4/6 justify-between mt-4">
        <label className="w-full mr-4">
          <span className="text-gray-700">Your CIN</span>
          <input
            type="text"
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
            {...register("cin", { required: true })}
            placeholder=""
          />
        </label>
        <label className="w-full">
          <span className="text-gray-700">Phone number </span>
          <PhoneInput
            containerStyle={{
              marginTop: "0.25rem",
            }}
            inputStyle={{
              height: "auto",
              width: "100%",
            }}
            country={"ma"}
            onChange={(phone) => {
              setValue("phone_number", phone);
            }}
          />
        </label>
      </div>
      <div className="flex md:w-4/6 w-full justify-between mt-4">
        <label className="w-full">
          <span className="text-gray-700">Email</span>
          <input
            {...register("email", { required: true })}
            type="email"
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
            placeholder=""
          />
        </label>
      </div>
      <div className="flex md:w-4/6 w-full justify-between mt-4">
        <label className="w-full">
          <span className="text-gray-700">When you got your BAC?</span>
          <select
            {...register("bac", { required: true })}
            className="block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            {[...Array(12)].map((_, i) => {
              return (
                <option key={i} value={2022 - i}>
                  {2022 - i}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <div className="flex md:w-4/6 w-full justify-between mt-4">
        <label className="w-full">
          <span className="text-gray-700">What do you want to study?</span>
          <select
            {...register("what_to_study", { required: true })}
            className="block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="LP">Licence professionnelle</option>
            <option value="MP1">Master professionnelle 1</option>
            <option value="MP2">Master professionnelle 2</option>
          </select>
        </label>
      </div>

      <div className="flex md:w-4/6 w-full justify-between mt-4">
        <Button
          className="w-full bg-primary text-white uppercase rounded-md p-3 font-semibold"
          type="submit"
          isLoading={mutation.isLoading}
          bg="#2c1e96"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export interface RegisterFormProps {}
export interface UserData {
  first_name: string;
  last_name: string;
  phone_number: string;
  cin: string;
  bac: number;
  email: string;
  what_to_study: string;
}
