'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '../Button';
import ConfirmBox from '../ConfirmBox';
import Modal from '../Modal';

export default function CreateUserForm() {
  const searchParams = useSearchParams();
  let isCancel = Boolean(searchParams.get('cancel'));
  let isProceed = Boolean(searchParams.get('proceed'));

  return (
    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
      <h1 className="text-transform: text-base font-semibold capitalize leading-6 text-gray-900">
        create user
      </h1>
      <hr className="my-2 h-px border-0 bg-gray-200 "></hr>

      <div>
        <form>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="fisrtName"
                className="text-transform: block text-sm font-medium capitalize leading-6 text-gray-900"
              >
                employee's first name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="fisrtName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  id="lastName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  id="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
      </div>
    </div>
  );
}
