export default function Banner() {
  return (
    <div className="relative bg-brand-green-dark h-full p-10">
      <div className="bg-brand-green w-full h-full bg-opacity-25 rounded-lg text-center text-brand-off-white p-8 flex flex-col justify-center">
        <p className="font-bold tracking-widest text-6xl mb-4">ADMIT ONE</p>
        <p className="text-3xl">
          Thanks for your nominations. Can't wait to see you at the award
          ceremony!
        </p>
      </div>
      <div className="bg-brand-off-white rounded-full w-12 h-12 absolute top-0 left-0 -mt-5 -ml-5"></div>
      <div className="bg-brand-off-white rounded-full w-12 h-12 absolute top-0 right-0 -mt-5 -mr-5"></div>
      <div className="bg-brand-off-white rounded-full w-12 h-12 absolute bottom-0 left-0 -mb-5 -ml-5"></div>
      <div className="bg-brand-off-white rounded-full w-12 h-12 absolute bottom-0 right-0 -mb-5 -mr-5"></div>
    </div>
  );
}
