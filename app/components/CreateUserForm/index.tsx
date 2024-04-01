'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { experimental_useFormState as useFormState } from 'react-dom';
import { Button } from '../Button';
import ConfirmBox from '../ConfirmBox';
import Modal from '../Modal';
import { createUser } from './action';

export default function CreateUserForm() {
  const router = useRouter();
  const initialState = { errors: {} };

  const [{ errors }, dispatch] = useFormState(createUser, initialState);

  const searchParams = useSearchParams();
  let isCancel = Boolean(searchParams.get('cancel'));
  let isProceed = Boolean(searchParams.get('proceed'));

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      router.push('?createuser=true');
    }
  }, [errors]);

  return (
    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
      <h1 className="text-transform: text-base font-semibold capitalize leading-6 text-gray-900">
        create user
      </h1>
      <hr className="my-2 h-px border-0 bg-gray-200 "></hr>

      <div>
        <form action={dispatch}>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="firstName"
                className="text-transform: block text-sm font-medium capitalize leading-6 text-gray-900"
              >
                employee's first name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  aria-describedby="create-error"
                />
                <div id="create-error" aria-live="polite" aria-atomic="true">
                  {errors?.firstName &&
                    errors.firstName.map((error: string) => (
                      <span className="text-red-500" key={error}>
                        {error}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="lastName"
                className="text-transform: block text-sm font-medium capitalize leading-6 text-gray-900"
              >
                employee's last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  aria-describedby="create-error"
                />
                <div id="create-error" aria-live="polite" aria-atomic="true">
                  {errors?.lastName &&
                    errors.lastName.map((error: string) => (
                      <span className="text-red-500" key={error}>
                        {error}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="text-transform: block text-sm font-medium capitalize leading-6 text-gray-900"
              >
                email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  aria-describedby="create-error"
                />
                <div id="create-error" aria-live="polite" aria-atomic="true">
                  {errors?.email &&
                    errors.email.map((error: string) => (
                      <span className="text-red-500" key={error}>
                        {error}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="password"
                className="text-transform: block text-sm font-medium capitalize leading-6 text-gray-900"
              >
                password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  aria-describedby="create-error"
                />
                <div id="create-error" aria-live="polite" aria-atomic="true">
                  {errors?.password &&
                    errors.password.map((error: string) => (
                      <span className="text-red-500" key={error}>
                        {error}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="justify-end gap-5 bg-gray-50 py-3 sm:flex">
            <Button
              type="button"
              title="go back"
              elTag="linkTag"
              path="?createuser=true&cancel=true"
              btnStyles="bg-secondary  block rounded-lg px-4 py-2 font-bold capitalize"
            />

            <Button
              type="button"
              title="save user"
              elTag="linkTag"
              path="?createuser=true&proceed=true"
              btnStyles="bg-primary block rounded-lg px-4 py-2 font-bold capitalize"
            />

            {isCancel && <Modal element={<ConfirmBox />} width="max-w-lg" />}
            {isProceed && <Modal element={<ConfirmBox />} width="max-w-lg" />}
          </div>
        </form>
        {/* {state.data && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      </div>
    </div>
  );
}
