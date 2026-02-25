export default function JobsPage() {
  return (
    <div className="container-app py-28">
      <h1 className="text-heading-1 text-dark font-bold">Browse Jobs</h1>
      <p className="mt-3 text-body-lg text-slate-500 max-w-xl">
        Explore available jobs and find the perfect match for your skills.
      </p>

      {/* Search / filters placeholder */}
      <div className="mt-10 bg-white rounded-xl border border-slate-100 p-8 text-center">
        <p className="text-slate-400 text-sm">
          Job listings with search, filters, and AI recommendations coming soon
        </p>
      </div>
    </div>
  );
}
