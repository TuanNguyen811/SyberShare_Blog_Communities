export default function UserChip({ user, showBio = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
        {user.name.charAt(0)}
      </div>
      <div>
        <p className="font-medium text-sm">{user.name}</p>
        {showBio && user.bio && (
          <p className="text-xs text-neutral-500">{user.bio}</p>
        )}
      </div>
    </div>
  );
}
