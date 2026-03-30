import { useParams } from 'react-router-dom';

export default function ProfilePage() {
  const { id } = useParams();

  return (
    <div className="container-app py-28">
      <h1 className="text-heading-1 text-dark font-bold">Worker Profile</h1>
      <p className="mt-3 text-body-lg text-slate-500">
        Viewing profile: <strong>{id}</strong>
      </p>

      <div className="mt-10 bg-white rounded-xl border border-slate-100 p-8 text-center">
        <p className="text-slate-400 text-sm">
          Full worker profile with reviews, portfolio, availability, and booking will appear here
        </p>
      </div>
    </div>
  );
}
