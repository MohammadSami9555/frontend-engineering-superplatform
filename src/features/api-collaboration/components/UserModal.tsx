"use client";
/* eslint-disable @next/next/no-img-element */

interface UserModalProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    image: string;
    company: {
      name: string;
    };
  } | null;
  onClose: () => void;
}

export default function UserModal({
  user,
  onClose,
}: UserModalProps) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 w-[500px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            User Details
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <img
  src={user.image}
  alt={`${user.firstName} ${user.lastName}`}
  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
/>

        <div className="space-y-3">
          <p>👤 {user.firstName} {user.lastName}</p>
          <p>📧 {user.email}</p>
          <p>📞 {user.phone}</p>
          <p>🏢 {user.company.name}</p>
        </div>
      </div>
    </div>
  );
}