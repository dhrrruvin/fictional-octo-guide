export default function ProductDetailSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="h-10 w-24 bg-slate-200 rounded animate-pulse mb-6" />

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">

            <div className="p-10 flex justify-center">
              <div
                className="
                  w-full
                  h-[450px]
                  bg-slate-200
                  rounded-xl
                  animate-pulse
                "
              />
            </div>

            <div className="p-10 space-y-5">
              <div className="h-12 bg-slate-200 rounded animate-pulse" />

              <div className="h-10 w-40 bg-slate-200 rounded animate-pulse" />

              <div className="h-5 w-48 bg-slate-200 rounded animate-pulse" />

              <div className="h-5 w-52 bg-slate-200 rounded animate-pulse" />

              <div className="pt-8 space-y-3">
                <div className="h-5 bg-slate-200 rounded animate-pulse" />
                <div className="h-5 bg-slate-200 rounded animate-pulse" />
                <div className="h-5 w-4/5 bg-slate-200 rounded animate-pulse" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}