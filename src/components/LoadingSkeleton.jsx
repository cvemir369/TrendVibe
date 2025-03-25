const SkeletonCard = () => (
  <div className="card bg-base-100 w-96 h-[29.5rem] shadow-xl flex flex-col items-center justify-evenly my-5">
    <div className="flex flex-col gap-5 w-64">
      <div className="skeleton h-40 w-full rounded-xl"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-20 mx-auto"></div>
      <div className="skeleton h-4 w-28 mx-auto"></div>
      <div className="skeleton h-4 w-24 mx-auto"></div>
    </div>
  </div>
);

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {[...Array(6)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
