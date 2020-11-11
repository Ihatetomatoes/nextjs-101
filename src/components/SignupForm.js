import classNames from "classnames";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Cross, Loading } from "../icons";

const SignupForm = () => {
  // front end validation with react-hook-form
  // prevent submitting invalid or empty emails
  const { register, errors, handleSubmit, reset } = useForm();

  // react query mutation that will call our API route
  const [mutate, { isLoading, isSuccess, reset: resetMutation }] = useMutation(
    ({ email }) => {
      return fetch(`/api/subscribe?email=${email}&tags=1980921`);
    }
  );

  // handle form submit
  const onSubmit = (data) => mutate(data);

  // reset form on success
  useEffect(() => {
    reset();
  }, [isSuccess]);

  // if success show confirmation message instead of the form
  if (isSuccess) {
    return (
      <div className="text-sm p-3 pr-1 bg-green-100 border rounded-md border-success text-success inline-flex">
        <span>Success. Check your inbox and confirm your email.</span>
        <span className="self-center flex mr-1">
          <button
            onClick={() => resetMutation()}
            className="bg-success text-white rounded-full h-4 w-4 mt-auto ml-1 hover:bg-red-500 transition-colors duration-200"
          >
            <Cross className="h-2 w-2 mx-auto" />
          </button>
        </span>
      </div>
    );
  }

  // css classes for our UI
  const formClass = classNames({
    "flex items-center border rounded-md border-gray-300 p-1": true,
    "bg-gray-100 border-gray-100": isLoading,
  });

  const inputClass = classNames({
    "appearance-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none": true,
    "opacity-50 cursor-not-allowed": isLoading,
  });

  const btnClass = classNames({
    "flex-shrink-0 bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-sm border-4 text-white py-1 px-2 rounded inline-flex ": true,
    "disabled:opacity-75 cursor-not-allowed": isLoading,
  });

  return (
    <>
      <p className="p-2 pl-4">
        Leave your email below, to be notified
        <br /> when this course is ready.
      </p>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className={formClass}>
          <div className="flex flex-col w-full">
            <input
              className={inputClass}
              type="text"
              name="email"
              disabled={isLoading}
              ref={register({
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              placeholder="Jane Doe"
              aria-label="Full name"
            />
          </div>

          <button className={btnClass} disabled={isLoading} type="submit">
            {isLoading ? (
              <>
                <Loading className="animate-spin h-5 w-5 mr-3" />
                Processing
              </>
            ) : (
              <>Sign Up</>
            )}
          </button>
        </div>
        {errors.email && (
          <p className="text-sm px-3 mt-1 text-red-500 inline-block">
            Please enter a valid email.
          </p>
        )}
      </form>
    </>
  );
};

export default SignupForm;
