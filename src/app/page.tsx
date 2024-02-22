import Image from "next/image";

export default function Home() {
  return (
    <main className="tw-flex tw-items-center tw-justify-between  tw-bg-white tw-h-screen">
      <div className="hero-banner tw-flex tw-w-full tw-items-center">
        <div className="tw-container">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-select-none">
            <div className="tw-flex tw-items-center tw-justify-center tw-w-[70%] md:tw-w-[50%] -tw-mt-4 md:-tw-mt-0">
              <Image
                src="/img/LeoAsher.png"
                alt="Leo Asher"
                className="main-img md:tw-max-h-[50vh] tw-mb-4 md:tw-mb-0"
                width={300}
                height={300}
              />
            </div>

            <div className="text-wrap tw-scale-75 md:tw-scale-100 tw-text-center md:tw-text-left">
              <p className="tw-text-5xl tw-font-bold tw-my-4">
                <span className="tw-text-black"> Hi, I&apos;m</span>
                <span className="tw-text-primary"> Leo Asher </span>
              </p>
              {/* <p className="tw-text-5xl tw-font-bold tw-my-3">
                I&apos;m the only
              </p>
              <p className="tw-text-5xl tw-font-bold tw-my-3">
                And, so are you
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
