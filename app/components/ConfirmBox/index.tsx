'use client';

import { useSearchParams } from 'next/navigation';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Button } from '../Button';

export default function ConfirmBox() {
  const { pending } = useFormStatus();
  const searchParams = useSearchParams();
  let isCancel = Boolean(searchParams.get('cancel'));
  let isProceed = Boolean(searchParams.get('proceed'));

  return (
    <>
      {pending ? (
        // loading spinner
        <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
      ) : (
        <div className="confirm-box mt-3 text-center">
          <h3 className="text-transform: text-base font-semibold capitalize leading-6 text-gray-900">
            {isCancel && 'confirm user cancellation'}
            {isProceed && 'confirm user creation'}
          </h3>
          <hr className="my-2 h-px border-0 bg-gray-200 "></hr>
          <div className="my-2">
            <p className="text-sm font-bold text-gray-500">
              {isCancel &&
                ' Would you like to proceed with cancelling this user form registreation?'}
              {isProceed &&
                'Would you like to proceed with creating this user form?'}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 bg-gray-50 py-3">
            <Button
              type="button"
              title="go back"
              elTag="linkTag"
              path="?createuser=true"
              btnStyles="bg-secondary block flex-1 rounded-lg px-4 py-2 font-bold capitalize"
            />

            {isCancel ? (
              <Button
                type="button"
                title="confirm cancel"
                elTag="linkTag"
                path="/home"
                btnStyles="bg-primary block flex-1 rounded-lg px-4 py-2 font-bold capitalize"
              />
            ) : (
              <Button
                type="submit"
                title="confirm creation"
                elTag="linkTag"
                btnStyles="bg-primary flex-1 block rounded-lg px-4 py-2 font-bold capitalize"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
