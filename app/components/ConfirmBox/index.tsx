import { Button as CancelBtn } from '../Button';

export default function ConfirmBox() {
  return (
    <div className="confirm-box mt-3 text-center">
      <h3 className="text-transform: text-base font-semibold capitalize leading-6 text-gray-900">
        confirm user cancellation
      </h3>
      <hr className="my-2 h-px border-0 bg-gray-200 "></hr>
      <div className="my-2">
        <p className="text-sm font-bold text-gray-500">
          Would you like to proceed with cancelling this user form
          registreation?
        </p>
      </div>
      <div>
        <div className="gap-5 bg-gray-50 py-3 sm:flex">
          <CancelBtn
            type="button"
            title="go back"
            elTag="linkTag"
            path="?createuser=true"
            btnStyles="bg-secondary block flex-1  rounded-lg px-4 py-2 font-bold capitalize"
          />

          <CancelBtn
            type="button"
            title="confirm cancel"
            elTag="linkTag"
            path="/home"
            btnStyles="bg-primary block flex-1  rounded-lg px-4 py-2 font-bold capitalize"
          />

          {/* <button
            type="button"
            className="bg-primary block w-64 flex-1 rounded-lg px-4 py-2 font-bold capitalize"
          >
            confirm cancel
          </button> */}
        </div>
      </div>
    </div>
  );
}
