'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type ModalProps = {
  element: React.ReactNode;
  width?: string;
};

export default function Modal({ element, width = 'max-w-3xl' }: ModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  let modal = Boolean(searchParams.get('createuser'));
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    if (target.classList.contains('overlay')) {
      router.push(pathname);
    }
  }

  return (
    <>
      {modal && (
        <div
          className="z-9 relative"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={handleClick}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="overlay flex cursor-default items-end justify-center p-4 text-center sm:min-h-full sm:items-center sm:p-0">
              <div
                className={`overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:${width}`}
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  {element}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
