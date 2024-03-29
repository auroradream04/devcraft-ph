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
          <button
            type="button"
            className="bg-secondary block w-64 flex-1 rounded-lg px-4 py-2 font-bold capitalize"
          >
            go back
          </button>

          <button
            type="button"
            className="bg-primary block w-64 flex-1 rounded-lg px-4 py-2 font-bold capitalize"
          >
            confirm cancel
          </button>
        </div>
      </div>
    </div>
  );
}
