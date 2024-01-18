import Link from "next/link"
export default function Header() {
  return (
    <>
      <header
        className="top-0 sticky z-20 w-full flex flex-row animate-in fade-in slide-in-from-top-4 duration-1000 ease-in-out"
      >
        <>
        <Link
          className="items-left flex flex-row justify-center pt-4"
          href="/"
        >
          <img
            src="/Logo.png"  
            alt="EchoExpert Logo"
            width="200"  
            height="200"
          />
        </Link>

        
        <button
          className="fixed top-0 right-0 m-4 flex flex-row flex-shrink-0 items-center justify-center rounded-lg truncate transition duration-200 ease-out disabled:pointer-events-auto disabled:opacity-50 bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50 px-2.5 sm:px-2 py-2 h-9 sm:h-8 sm:text-sm rounded-lg font-medium input-focus-ring select-none"
          type="button"
          id="account-button"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <span className="material-symbols-outlined">
          person
          </span>
        </button>
        </>

        
      </header>


    </>
  );
}
