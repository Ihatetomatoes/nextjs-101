import fetch from "isomorphic-unfetch";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const SignupForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const subscribeEmail = async ({ email }) => {
    const response = await fetch(`/api/subscribe?email=${email}`);
    return response;
  };

  const [mutate, { isLoading, isError, error }] = useMutation(subscribeEmail);

  const onSubmit = async (data) => {
    try {
      await mutate(data);
      // Todo was successfully created
    } catch (error) {
      // Uh oh, something went wrong
    }
  };

  // todo: loading state
  // todo: success message
  if (isLoading) {
    return <p>Adding you to the list.</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center border rounded-md border-grey-100 p-1">
          <div className="flex flex-col w-full">
            <input
              className="appearance-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="email"
              ref={register({
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              placeholder="Jane Doe"
              aria-label="Full name"
            />
          </div>

          <button
            className="flex-shrink-0 bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>

        {errors.email && (
          <p className="text-sm px-3 mt-1 text-red-500">
            Please enter a valid email.
          </p>
        )}
      </form>
    </>
  );
};

export default SignupForm;
