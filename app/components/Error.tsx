export default function Error({ error }: { error: any }) {
  return (
    <div className="flex items-center justify-center">
      <div className="text-red-500">{error.toString()}</div>
    </div>
  );
}
